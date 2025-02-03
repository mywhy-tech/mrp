# Copyright (c) 2025, mywhy and Sione and Olioni Taumoepeauand and contributors
# See license.txt

import frappe
import subprocess

@frappe.whitelist()
def ping_robot(robot_name):
    """ Pings the robot to check its status """
    
    # Fetch the host address from the Robot doctype
    robot = frappe.get_doc("Robot", robot_name)
    host = robot.get("host")  # Ensure your Robot doctype has a 'host_address' field

    if not host:
        return "Disconnected"

    try:
        response = subprocess.run(
            ["ping", "-c", "1", host],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            timeout=2  # Set a timeout for the ping
        )
        if response.returncode == 0:
            return "Connected"
        else:
            return "Disconnected"
    except Exception:
        return "Disconnected"
