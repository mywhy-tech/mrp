// Copyright (c) 2025, Sione Taumoepeau and Olioni Taumoepeau
// For license information, please see license.txt

frappe.ui.form.on("Schedule", {
    refresh(frm) {
        // Hide the print button
        $("button[data-original-title=Print]").hide();

        // Show custom button only when the document has been saved and status is Pending
        if (!frm.is_new() && frm.doc.status === "Pending") {
            frm.add_custom_button(
                'Mark as Completed',
                () => {
                    frappe.confirm(
                        'Are you sure you want to mark this schedule as Completed?',
                        () => {
                            // Update status and progress through backend call
                            frappe.call({
                                method: 'frappe.client.set_value',
                                args: {
                                    doctype: 'Schedule',
                                    name: frm.doc.name,
                                    fieldname: {
                                        status: 'Completed',
                                        progress: 100
                                    }
                                },
                                callback: () => {
                                    frappe.msgprint(`Schedule ${frm.doc.name} marked as Completed.`);
                                    frm.reload_doc();
                                }
                            });
                        },
                        () => frappe.msgprint('Action cancelled.')  // If user cancels
                    );
                }
            ).removeClass('btn-secondary').addClass('btn-success').css({
                'margin-right': '10px',
                'background-color': '#28a745',  // Custom green shade
                'color': 'white'
            });
        }
    },
});
