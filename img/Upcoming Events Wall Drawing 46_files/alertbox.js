jQuery(document).ready(function(){
    
    var panel;

    if (document.cookie.indexOf("_alert_dismissed") >= 0){
      console.log("alert dismissed");
      jQuery("#alertbox_footer").hide();
    } else {
      jQuery("#alertbox_footer").show();
    }

    jQuery.fn.initScrollPanel = function(){
        var p = jQuery("#alertbox_msg").jScrollPane({
            showArrows: true,
            arrowScrollOnHover: true
        });
        panel   = p.data('jsp');
    }

    jQuery(window).resize(function(){
        if(panel != null){
            panel.destroy();
        }
        jQuery.fn.initScrollPanel();
    });

    jQuery("#alertbox_close_x").on("click", function(){
        var url = jQuery("#alertbox_footer").attr("data-ajax-url");
        jQuery("#alertbox_footer").fadeOut("slow", function(){jQuery(this).remove();});
        
        var d = new Date();
        d.setTime(d.getTime() + (30*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();

        document.cookie = "_alert_dismissed=true;" + expires + ";";
        console.log('set alert dismiss cookie');
        jQuery.ajax({
            url: url,
            dataType: "json",
            success: function( data, textStatus, jqXHR ){
            }
        });
    });

    jQuery.fn.initScrollPanel();

});
