
// Copyright (c) 2025, mywhy and Sione and Olioni Taumoepeauand and contributors
// For license information, please see license.txt

frappe.listview_settings['Schedule'] = {
    hide_name_column: true,

    onload: function (frm) {
        $("body").addClass("full-width");  
    },

    refresh: function(frm) {
        frm.page.sidebar.hide(); // this removes the sidebar
        $(".timeline").hide()
        frm.page.wrapper.find(".layout-main-section-wrapper").removeClass("col-md-10"); // this removes class "col-md-10" from content block, which sets width to 83%
        $("body").addClass("full-width");
        
    }

};