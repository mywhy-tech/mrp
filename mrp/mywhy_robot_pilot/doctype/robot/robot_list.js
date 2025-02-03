// Copyright (c) 2025, Sione Taumoepeau and Olioni Taumoepeau
// For license information, please see license.txt

frappe.listview_settings['Robot'] = {
    hide_name_column: true,

    refresh: function(frm) {
        frm.page.sidebar.hide(); // this removes the sidebar
        $(".timeline").hide()
        frm.page.wrapper.find(".layout-main-section-wrapper").removeClass("col-md-10"); // this removes class "col-md-10" from content block, which sets width to 83%
        frappe.ui.toolbar.toggle_full_width()
        
    }

};