// Copyright (c) 2025, Sione Taumoepeau and Olioni Taumoepeau
// For license information, please see license.txt

frappe.listview_settings['Schedule'] = {
    onload: function (listview) {
        console.log("Listening for real-time updates...");

        // Listen for status updates (Start/Complete)
        frappe.realtime.on("schedule_status_update", (data) => {
            let row = $(`[data-name="${data.schedule_name}"]`);
            if (row.length) {
                let progressColumn = row.find("td[data-fieldname='progress']");
                progressColumn.text(data.status === "Running" ? "0%" : "100%");
            }
        });

        // Listen for progress updates
        frappe.realtime.on("schedule_progress_update", (data) => {
            let progressCell = $(`[data-name="${data.schedule_name}"] td[data-fieldname='progress']`);
            if (progressCell.length) {
                progressCell.html(`
                    <div style="display: flex; align-items: center;">
                        <div style="flex: 1; margin-right: 10px;">
                            <div style="background-color: #e0e0e0; height: 10px; border-radius: 5px;">
                                <div style="width: ${data.progress}%; height: 100%; background-color: green; border-radius: 5px;"></div>
                            </div>
                        </div>
                        <span style="min-width: 30px; text-align: right; font-size: 12px;">${data.progress}%</span>
                    </div>
                `);
            }
        });
    },
    hide_name_column: true,

    refresh: function (frm) {
        frm.page.sidebar.hide();
        $(".timeline").hide();
        frm.page.wrapper.find(".layout-main-section-wrapper").removeClass("col-md-10");
        frappe.ui.toolbar.toggle_full_width();
    }
};