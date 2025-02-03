// Copyright (c) 2025, mywhy and Sione and Olioni Taumoepeau
// For license information, please see license.txt

frappe.listview_settings['Robot'] = {
    hide_name_column: true,

    refresh: function (frm) {
        $("body").addClass("full-width");
        frm.page.sidebar.hide(); // Hides the sidebar
        $(".timeline").hide();
        frm.page.wrapper.find(".layout-main-section-wrapper").removeClass("col-md-10");

        // Ping each robot to check its status
        $(".list-row").each(function () {
            var row = $(this);
            var robot_name = row.find("[data-fieldname='host']").text(); // Get the robot name
            console.log(robot_name)
            if (robot_name) {
                frappe.call({
                    method: "merp.utils.ping_robot",
                    args: { robot_name: robot_name },
                    callback: function (r) {
                        console.log(r)
                        if (r.message) {
                            row.find("[data-fieldname='status']").html(
                                r.message === "Connected"
                                    ? '<span class="indicator green">Connected</span>'
                                    : '<span class="indicator red">Disconnected</span>'
                            );
                        }
                    },
                });
            }
        });
    },

    onload: function (frm) {
        $("body").addClass("full-width");
        frm.page.sidebar.hide();
        $(".timeline").hide();
        frm.page.wrapper.find(".layout-main-section-wrapper").removeClass("col-md-10");
    },

    // Define multiple buttons in an array
    button: {
        show: function (doc) {
            return true;
        },
        get_label: function () {
            return '<i class="fa fa-eye"></i>';
        },
        get_description: function (doc) {
            return __('Choose an Action');
        },
        action: function (doc) {
            window.open(frappe.urllib.get_full_url("/mrp-frontend"));
        }
    }
};
