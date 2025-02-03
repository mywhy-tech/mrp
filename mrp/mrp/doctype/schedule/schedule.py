import frappe
from frappe.utils import now_datetime
import time
from frappe.model.document import Document

class Schedule(Document):
    pass

def process_schedule(schedule_name):
    try:
        schedule_doc = frappe.get_doc("Schedule", schedule_name)

        #Update status to Running and progress start at 0
        schedule_doc.status = "Running"
        schedule_doc.progress = 0
        schedule_doc.save()
        frappe.db.commit()

        #Status Update to Frontend
        frappe.publish_realtime(
            "schedule_status_update",
            {"schedule_name": schedule_doc.name, "status": "Running"}
        )

        # Dummy simulation of task execution with progress updates for 2 minutes
        total_seconds = 120
        interval = 5
        for elapsed in range(0, total_seconds + 1, interval):
            progress = max(0, min(100, int((elapsed / total_seconds) * 100)))
            schedule_doc.progress = progress
            schedule_doc.save()
            frappe.db.commit()

            #Status Update to Frontend
            frappe.publish_realtime(
                "schedule_progress_update",
                {"schedule_name": schedule_doc.name, "progress": progress}
            )

            time.sleep(interval)

        #Update status to Completed and progress to 100
        schedule_doc.status = "Completed"
        schedule_doc.progress = 100
        schedule_doc.save()
        frappe.db.commit()

        frappe.publish_realtime(
            "schedule_status_update",
            {"schedule_name": schedule_doc.name, "status": "Completed"}
        )

    except Exception as task_error:
        frappe.logger().error(f"Error processing schedule {schedule_name}: {str(task_error)}")

def update_schedule_status():
    """ Identify schedules to run and process them concurrently using background jobs """
    try:
        pending_schedules = frappe.get_all(
            "Schedule",
            filters={"status": "Pending", "docstatus": 0},
            fields=["name", "schedule_start"]
        )

        current_time = now_datetime()
        schedules_to_process = []

        # Identify schedules sequentially to avoid skipping any
        for schedule in pending_schedules:
            schedule_doc = frappe.get_doc("Schedule", schedule["name"])
            schedule_time = schedule_doc.schedule_start

            if schedule_time and now_datetime() >= schedule_time:
                schedules_to_process.append(schedule_doc.name)
                frappe.logger().info(f"Identified schedule {schedule_doc.name} for execution.")

        if not schedules_to_process:
            frappe.logger().info("No schedules found to execute.")
            return

        # Enqueue each schedule as a background job and using enqueue method to run tasks concurrently
        for schedule_name in schedules_to_process:
            frappe.enqueue(process_schedule, queue='long', schedule_name=schedule_name)

    except Exception as e:
        frappe.log_error(f"Error updating schedule status: {e}")
