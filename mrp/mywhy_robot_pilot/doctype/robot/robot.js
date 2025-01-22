// Copyright (c) 2025, mywhy and contributors
// For license information, please see license.txt

 frappe.ui.form.on("Robot", {

     
    refresh(frm) {  
          
         $("button[data-original-title=Print]").hide();
         
         frm.add_custom_button(__('Inspection'), function() {
            frappe.route_options = {
                "cargo_ref": frm.doc.name,
                "work_type": frm.doc.work_type,
                "customer": frm.doc.consignee,
                "container_no": frm.doc.container_no,
                "mydoctype": "CARGO"
            }
            frappe.set_route("Form", "Gate2", "new-gate2-1");
        }).addClass("btn-default");
        
    },
 });
