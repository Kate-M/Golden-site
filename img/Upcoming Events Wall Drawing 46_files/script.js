jQuery(function( $ )	{

	/* Handle smooth scrolling for anchor tags ------------- */
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top - 50
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	var isMobile = false; //initiate as false
	// device detection
	if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;

	var isMobile = window.matchMedia("only screen and (max-width: 799px)");

	function setSearchAttr(){
		if (isMobile.matches){
			$('.gsc-input').attr('placeholder', 'Search...');	
		} else {
			$('.gsc-input').attr('placeholder', 'Search for exhibitions, performances, artists, artwork...');	
		}

	}	
	setTimeout(setSearchAttr, 2000);


	/* Handle the desktop nav open and closed states ------------- */

	

	$('#menu-main-nav li').hover(function(){
		if (!isMobile.matches){
			$(this).siblings().find('.sub-menu-wrapper').removeClass('show');
			$(this).find('.sub-menu-wrapper').addClass('show');	
		}
	})

	if (!isMobile.matches){
		$('nav.nav-primary').mouseleave(function(){
			$('.sub-menu-wrapper.show').removeClass("show");
		})

		$('#menu-main-nav li.search-li > a').on('click', function(e){
			e.preventDefault();
			$(this).siblings().find('.sub-menu').removeClass('show');
			$(this).find('.sub-menu').addClass('show');	
		})

		if(window.location.href.indexOf("search_gcse") > -1) {
			$('.search-li .sub-menu-wrapper').css('min-height', 97);
      $('.search-li .sub-menu-wrapper').addClass('as-page-header sticky');
			$('.search-li .sub-menu-wrapper').prependTo('.content-sidebar-wrap');	
    }

		// Keep Submenu Open After Scroll
		var exhibitions = $('.menu-item.current-menu-item').hasClass('exhibitions') ? true : false;
		if (!exhibitions) {
			var active_submenu = $('.genesis-nav-menu .menu-item.current-menu-item .sub-menu-wrapper').detach();
			active_submenu.addClass('as-page-header sticky');
			active_submenu.prependTo('.content-sidebar-wrap');	
		}

		if (!$('.home.page').length){
			$('.site-header, .nav-primary, .site-inner').addClass('sticky');
      $('.home.page .square-logo').show();
		}
	}

	/* Handle scrolling functionality for desktop and mobile  ------------- */
	
	/* Fade in social buttons to soften load apperance */
	var socialShareButtons = $('.ssbp-wrap.ssbp-set--one');
	if (socialShareButtons.length > 0 ){
		socialShareButtons.fadeIn('slow');
	}

	/* Handle title and image scrolling for detail, generic listing, and generic pages ------------- */

	if(($('.event-detail-title').length > 0 || $('.event-detail-card').length > 0  ) && $('.home.page').length == 0 && $('.sol-lewitt-floorplan').length==0) {
		
			// get initial sizes		
			var windowH = $( window ).height();
			var scrollSet = 0;
			var headerH = 60;
			if ($('.as-page-header').length) {
				var subHeader = true;
				headerH = headerH + $('.as-page-header').outerHeight(true);
				var scrollSet = 60;
			}

			var title = $('.event-detail-title');

			if (title.length > 0){
				// set sticky elements
				$('body').addClass('sticky-contents');
				$('main').addClass('sticky-content');		
				$('.sticky-main-image').css('top', headerH );
				var imgWrapper = $('.sticky-main-image .img-wrapper'); 
				imgWrapper.css('max-height', (windowH - headerH - 100) );

				// get size for scrolling triggers
				var imgH = imgWrapper.outerHeight(true);
				var stickyContent = $('.sticky-content');
				var stickyContentH = $('.sticky-content').outerHeight(true);

				if ($('.sidebar').length > 0) {
					var sidebarH = $('.sidebar').height();
					if (sidebarH > stickyContentH){
						stickyContentH = sidebarH;
						stickyContent.css('min-height', sidebarH + 100);
					} 
				}
				var titleH = title.outerHeight(true);


				// add scroll button
				if (windowH < 672){
					$('.scroll-to-title').show();
				}

				// set initial elements for half width
				if ($('.event-detail-title.half-card').length){
					var titleH = $('.left-half').outerWidth();
					var imgH = 0;
					$('.ssbp-wrap').css('top', titleH + 25);
				}
				
				// Set title height
				var titleWrap = $('.title-wrap');
				if (titleWrap.length ) {
					if (!isMobile.matches) {
	        		titleWrap.css('margin-top', headerH + ($('.sticky-main-image .img-wrapper').outerHeight(true)));		
						
					} else {
						var imgH = imgWrapper.outerHeight(true);
						titleWrap.css('margin-top', imgH);		
					}
					
				} else {
					stickyContent.css('margin-top', headerH+imgH);	
				}
			}
		

			// handle main functionality

			// Set up vars for scroll cache

			var eventDetailTitle = $('.event-detail-title');
			var pageHeader = $('.as-page-header');
			var overlayDiv = $('.overlay-div');


			$(document).scroll(function(){
				var subHeaderH = 0;
				
				if (subHeader){
					
					if ($(this).scrollTop() > (imgH) ) {  
						pageHeader.css('position', 'absolute');
						pageHeader.css('top', imgH + 60);
					} else {

						pageHeader.css('position', 'fixed');
						pageHeader.css('top', 60);
					}
				}

				titleOffset = eventDetailTitle.offset().top - $(window).scrollTop();
				if (!isMobile.matches){
					overlayDiv.css('opacity', 1 - titleOffset/(imgH + headerH) );	
				}
				
				if (title.length) {
					if ($(this).scrollTop() > (imgH + headerH) && stickyContentH > windowH ) {

						eventDetailTitle.addClass('sticky');
						if (!isMobile.matches){
							title.slideDown(800);	
						}

						if ($(this).scrollTop() > (imgH + titleH )){
							$('.sticky-content.sticky').css('padding-top', titleH);	
						};
					} else {   
						if (title.hasClass('sticky')){
							$('.sticky-content.sticky, .event-detail-title.sticky').removeClass('sticky');
						}
						stickyContent.css('padding-top', 35);	
					}
				}	
			});
		
	}
	
	/* Handle scrolling for event info area and social sharing ------------- */

	if (!isMobile.matches){
		if( $('.event-info-area').length && $('.ssbp-wrap').length ) {
			// Set up variables so they're cached
			var eventInfoAreaTop = $('.event-info-area').offset().top - $('header').height() - 10;
			var ssbTop = $('.ssbp-wrap').offset().top - $('header').height() - 10;
			var contentH = $('#event-detail-content-wrapper').height();
			
			$(document).scroll(function(){
				if($(this).scrollTop() > (imgH + titleH - 60) && stickyContentH > windowH  ) {  
					$('.event-info-area').addClass('sticky');
					if ($('.event-detail-title.half-card').length) {
						// $('.event-info-area').css('top', 120);
						$('.ssbp-wrap').css('top', 150);
						// Show the half width title
						$('.event-detail-title.half').addClass('sticky');
						$('.event-detail-title.half.sticky').slideDown( "medium", function() {});
					}
				} else {
					$('.event-detail-title.half').hide();
					$('.event-info-area, .event-detail-title.half').removeClass('sticky');
					if ($('.event-detail-title.half').length){
						$('.ssbp-wrap').css('top', titleH + 30);
					}
				}
					
				if($(this).scrollTop() > (imgH + titleH - 60) && stickyContentH > windowH ) {  
					socialShareButtons.addClass('sticky');
				} else {   
					socialShareButtons.removeClass('sticky');
				}
				
				$('.event-info-area').css('margin-top', '1px' );
				socialShareButtons.css('margin-top', 'auto' );
						
			});
		}
	}
	

	/* Handle scrolling for Featured Events ------------- */
	if ($('.sidebar').length) {
		var sidebar = $('.sidebar');
		var sidebarH = $('.sidebar').height();
		var sidebarSticky = $('.sidebar').offset().top;
		var sidebarBottom = $('.sidebar').position().top+$('.sidebar').outerHeight(true);
		var sidebarBottom2 = $('.sidebar').position().top+$('.sidebar').offset().top+$('.sidebar').outerHeight(true);
		var entryH = $('article').outerHeight(true);

		$(document).scroll(function(){
			if($(this).scrollTop() > (imgH + titleH + scrollSet)) {  
				sidebar.addClass('sticky');
				sidebar.css('margin-top', titleH );
				if(sidebarH < sidebarSticky) {
					sidebar.addClass('sticky-short');
				}

				if($(this).scrollTop() > (sidebarH - 10)) {  
					sidebar.addClass('sticky-temp').css('top', 60);
				}
			}
			else {   
				sidebar.removeClass('sticky');
				sidebar.css('margin-top', 'auto' );
				if(sidebarH < sidebarSticky) {
					sidebar.removeClass('sticky-short');
				}
				sidebar.removeClass('sticky-temp').css('top','auto');
			}
			if(sidebarH > sidebarSticky) {
				if($(this).scrollTop() > (sidebarBottom - sidebarSticky)) {  
					sidebar.addClass('sticky-temp').css('top', sidebarSticky - sidebarH - 60);
				}
				else {
					sidebar.removeClass('sticky-temp').css('top','auto');
				}
			}

			if($(this).scrollTop() > (stickyContentH - 60) ) { 
				$('.event-detail-title, .sidebar').css('margin-top', ((entryH-60) - $(this).scrollTop()) );
				$('.widget-title-top, .widget-title').css('margin-top', ((entryH-60) - $(this).scrollTop()) );
				$('.widget-title-bottom').css('visibility', 'hidden');
			}
			else {
				title.css('margin-top', 'auto' );
				$('.widget-title-top, .widget-title').css('margin-top', 'auto' );
				$('.widget-title-bottom').css('visibility', 'visible');
			}
		});	
	}
		

	/* Handle Scrolling for Nav */
	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	if ($('body.home').length > 0) {
		var navbarHeight = $('.site-header').height();	
	} else {
		var navbarHeight = 0;
	}
	
	

	if (isMobile.matches){
		$(document).on('touchmove',function(e){
			hasScrolled();
		})
	} else {
		$(window).scroll(function(event){
			didScroll = true;	
		});
	}

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 5);

	
	function hasScrolled() {

    var st = $(this).scrollTop();
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
    	// Scroll Down
      if (isMobile.matches) {
      	if (!($('.responsive-menu-icon').hasClass('open'))){
					$('.site-header, .nav-primary').slideUp(800);
	      	$('.search-icon-href').hide();
	      	if ($(this).scrollTop() > (imgH + titleH + scrollSet) && stickyContentH > windowH ) {
	      		title.hide();
	      	}      		
      	}
      } else {
      	$('.site-header, .nav-primary, .site-inner').addClass('sticky');
      	$('.home.page .square-logo').show();
      	$('.home.page main.content').css('margin-top', 62);
      }
    } else {
      // Scroll Up
      if (isMobile.matches) {
    		$('.site-header, .nav-primary').slideDown(800);
    		$('.search-icon-href').show();

      } else {
      	if ($(this).scrollTop() < (navbarHeight - 10) ) {
      		$('.home.page .site-header, .home.page .nav-primary, .site-inner').removeClass('sticky');
      		$('.home.page .square-logo').hide();
      		$('main.content').css('margin-top', 0);
      	};
      };
  	}
    lastScrollTop = st;
	}

	function refreshExhibitionsCarousel(){
		var exhibitions_nav_carousel = $('.exhibitions-nav-carousel .ecs-event-list');
		exhibitions_nav_carousel.owlCarousel({
				loop:false,
		    navRewind: false,
		    margin:10,
		    nav:true,
		    navText: '',
		    slideBy: 1,
		    navSpeed: 500,
		    lazyLoad: true,
		    dots: false,
		    responsive:{
		        
	        800: {
	            items:3
	        },
	        960:{
	            items:4
	        },
	        1120:{
	            items:4
	        },
	        1280:{
	            items:5
	        }
		    }
			})	
	}

	var count= 1;

	$('#menu-main-nav li.exhibitions').on('click mouseover', function(e){
		
		if (count == 1) {
			refreshExhibitionsCarousel();
		}
		count++;
	});

	var frontpage_carousel_partnerships = $('.frontpage-carousel-partnerships');
	frontpage_carousel_partnerships.owlCarousel({
			loop:true,
	    navRewind: false,
	    margin:20,
	    nav:true,
	    dots: true,
	    navText: '',
	    slideBy: 'page',
	    navSpeed: 500,
	    lazyLoad: true,

	    responsive:{
	        0:{
	            items:1
	        },
	        750:{
	            items:2
	        },
	        960:{
	            items:3
	        },
	        1120:{
	            items:4
	        },
	        1450:{
	            items:5
	        },
	        1780:{
	            items:6
	        },
	        2000:{
	            items:7
	        }
	    }
	})



});