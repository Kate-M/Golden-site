!function(e,t,r,i,s,a,n){e.extend(tribe_ev.fn,{set_form:function(t){var r=!1,s=e("body"),a=e("#tribe_events_filters_form"),n=e("#tribe-bar-form");s.addClass("tribe-reset-on"),a.length&&(a.tribe_clear_form(),a.find(".ui-slider").length&&(r=!0,e("#tribe_events_filters_form .ui-slider").each(function(){var t=e(this).attr("id"),r=e("#"+t),i=r.prev(),s=i.prev(),a=r.slider("option");r.slider("values",0,a.min),r.slider("values",1,a.max),s.text(a.min+" - "+a.max),i.val("")}))),n.length&&n.tribe_clear_form(),t=i.parse_string(t),e.each(t,function(t,r){if("action"!==t){var i=decodeURI(t),s="";if(1===r.length)e('[name="'+i+'"]').is('input[type="text"], input[type="hidden"]')?e('[name="'+i+'"]').val(r):e('[name="'+i+'"][value="'+r+'"]').is(":checkbox, :radio")?e('[name="'+i+'"][value="'+r+'"]').prop("checked",!0):e('[name="'+i+'"]').is("select")&&e('select[name="'+i+'"] option[value="'+r+'"]').attr("selected",!0);else for(var a=0;a<r.length;a++)s=e('[name="'+i+'"][value="'+r[a]+'"]'),s.is(":checkbox, :radio")?s.prop("checked",!0):e('select[name="'+i+'"] option[value="'+r[a]+'"]').attr("selected",!0)}}),r&&e("#tribe_events_filters_form .ui-slider").each(function(){var t=e(this).attr("id"),r=e("#"+t),i=r.prev(),s=i.val().split("-");if(""!==s[0]){var a=i.prev();r.slider("values",0,s[0]),r.slider("values",1,s[1]),a.text(s[0]+" - "+s[1]),r.slider("refresh")}}),s.removeClass("tribe-reset-on")}}),e(document).ready(function(){function n(e){(e||"filters"===s.ajax_trigger&&t.v_width<t.mobile_break)&&(m.addClass("tribe-filters-closed").removeClass("tribe-filters-open"),tribe_storage&&tribe_storage.setItem("tribe_events_filters_wrapper","closed"),s.ajax_trigger="")}function l(){m.removeClass("tribe-filters-closed").removeClass("tribe-ajax-success").addClass("tribe-filters-open"),tribe_storage&&tribe_storage.setItem("tribe_events_filters_wrapper","open")}function o(){m.is(".tribe-filters-closed")?l():n(!0)}function _(){u.find(".tribe-events-filter-autocomplete").each(function(){var t=e(this);t.find(".chosen-choices .search-choice-close").click(),t.find("select option:selected").removeProp("selected");var r=t.find("select").data("placeholder"),i=t.find(".chosen-choices"),s=t.find(".search-field");s.find("input").val(r).css({width:i.innerWidth()-(s.outerWidth()-s.innerWidth())})})}function c(){t.v_width<t.mobile_break&&n(!0)}function d(){"past"===s.view||"list"===s.view||"photo"===s.view||"map"===s.view?(s.paged=1,"past"!==s.view&&"list"!==s.view||s.filter_cats&&(t.cur_url=e("#tribe-events-header").attr("data-baseurl"))):"month"===s.view?(s.date=e("#tribe-events-header").attr("data-date"),s.filter_cats?t.cur_url=e("#tribe-events-header").attr("data-baseurl"):t.cur_url=i.url_path(document.URL)):"week"!==s.view&&"day"!==s.view||(s.date=e("#tribe-events-header").attr("data-date"))}function v(){i.disable_inputs("#tribe_events_filters_form","input, select"),s.popping=!1,d(),"map"===s.view?a.pushstate?i.pre_ajax(function(){e(r).trigger("tribe_ev_runAjax"),e(r).trigger("run-ajax.tribe"),s.ajax_trigger="filters"}):i.pre_ajax(function(){e(r).trigger("tribe_ev_reloadOldBrowser"),e(r).trigger("reload-old-browser.tribe")}):i.pre_ajax(function(){e(r).trigger("tribe_ev_runAjax"),e(r).trigger("run-ajax.tribe"),s.ajax_trigger="filters"})}e(".tribe_events_filter_item").filter(":last").addClass("tribe_last_child");var f=e(".tribe-events-filter-autocomplete .chosen-dropdown").attr("data-no-results-text");e(".tribe-events-filter-autocomplete .chosen-dropdown").chosen({no_results_text:f,width:"100%",display_selected_options:!1,search_contains:!0});var u=e("#tribe_events_filters_form"),b=e(".tribe-events-filters-horizontal"),p=e("#tribe-events"),m=e("body"),g=!(!p.length||!p.tribe_has_attr("data-hover-filters")||1!==p.data("hover-filters"));if(e("#tribe_events_filter_item_eventcategory").length&&s.category&&(s.filter_cats=!0),tribe_storage){var h=tribe_storage.getItem("tribe_events_filters_wrapper");null==h&&m.is(".tribe-filters-closed")&&(h="closed"),h&&"closed"==h?n(!0):h&&"open"==h&&l(),e(".tribe_events_filter_item").each(function(){var t=e(this),r=t.attr("id"),i=tribe_storage.getItem(r);i&&"closed"==i&&t.addClass("closed")})}e("#tribe_events_filters_wrapper").on("click","#tribe_events_filters_reset",function(t){t.preventDefault(),m.addClass("tribe-reset-on"),u.tribe_clear_form(),u.find(".ui-slider").length&&e("#tribe_events_filters_form .ui-slider").each(function(){var t=e(this).attr("id"),r=e("#"+t),i=r.prev(),s=i.prev(),a=r.slider("option");r.slider("values",0,a.min),r.slider("values",1,a.max),s.text(a.min+" - "+a.max),i.val("")}),b.length&&e(".tribe_events_filter_item").addClass("closed"),_(),u.submit(),m.removeClass("tribe-reset-on")}).on("click","#tribe_events_filters_toggle",function(e){e.preventDefault(),o()}),m.on("click",function(){b.length&&!g&&e(".tribe_events_filter_item").addClass("closed")}).on("click",".tribe-events-filter-group",function(e){b.length&&!g&&e.stopPropagation()}),g&&u.on("mouseover",".tribe_events_filter_item",function(){b.length&&e(this).removeClass("closed")}).on("mouseout",".tribe_events_filter_item",function(){b.length&&e(".tribe_events_filter_item").addClass("closed")}),u.on("click","h3",function(t){if(!b.length||!g){var r=e(this),i=r.parent(),s=i.attr("id");b.length&&(t.stopPropagation(),e(".tribe_events_filter_item").not(i).addClass("closed")),i.hasClass("closed")?(i.removeClass("closed"),tribe_storage&&tribe_storage.setItem(s,"open")):(i.addClass("closed"),tribe_storage&&tribe_storage.setItem(s,"closed"))}}),c(),e(r).on("ajax-success.tribe",function(){n(!1)}).on("resize-complete.tribe",c),u.on("submit",function(t){"change_view"!==tribe_events_bar_action&&(t.preventDefault(),s.popping=!1,d(),i.pre_ajax(function(){e(r).trigger("tribe_ev_runAjax"),e(r).trigger("run-ajax.tribe"),s.ajax_trigger="filters"}))}),a.live_ajax()&&a.pushstate&&(u.find('input[type="submit"]').remove(),e("#tribe_events_filter_item_eventcategory").length&&s.category&&e("#tribe_events_filter_item_eventcategory input, #tribe_events_filter_item_eventcategory select").on("change",function(){i.setup_ajax_timer(function(){v()})}),u.on("slidechange",".ui-slider",function(){i.setup_ajax_timer(function(){v()})}).on("change","input, select",function(){s.filter_cats&&"tribe_events_filter_item_eventcategory"===e(this).parents(".tribe_events_filter_item").attr("id")||i.setup_ajax_timer(function(){v()})})),e(r).on("tribe_ev_collectParams",function(){var e=i.serialize("#tribe_events_filters_form","input, select");e.length?(s.filters=!0,s.params=s.params+"&"+e,"map"!==s.view&&(s.url_params.length?s.url_params=s.url_params+"&"+e:s.url_params=e)):s.filters=!1}),e(r).on("collect-params.tribe",function(){s.filter_cats&&e("#tribe_events_filter_item_eventcategory option:selected, #tribe_events_filter_item_eventcategory input:checked").remove();var t=i.serialize("#tribe_events_filters_form","input, select");s.url_params.length&&t.length?s.url_params=s.url_params+"&"+t:t.length&&(s.url_params=t)}),e("#tribe_events_filter_item_eventcategory").length&&s.category&&(m.addClass("tribe-reset-on"),e('#tribe_events_filter_item_eventcategory option[data-slug="'+s.category+'"]').attr("selected",!0),e('#tribe_events_filter_item_eventcategory input[data-slug="'+s.category+'"]').attr("checked","checked"),m.removeClass("tribe-reset-on"))})}(jQuery,tribe_ev.data,tribe_ev.events,tribe_ev.fn,tribe_ev.state,tribe_ev.tests,tribe_debug);