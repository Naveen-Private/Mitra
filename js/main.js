/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){
    //Client Caurosel
   $("#preloader").fadeOut("slow");
	$('html, body').stop().animate({
			scrollTop : 0
		}, 1500, 'easeInOutExpo');
	
	var isiDevice = /iphone|ipod/i.test(navigator.userAgent.toLowerCase());
	var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
	var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
	var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
	if(isiDevice || isAndroid){
		 $("#msc-logo").css({"right":"17%"});
         $('.navbar-brand').css({'font-size':'19px','padding-left':'0px'});
	} else {
		$("#msc-logo").css({"right":"4%"});
        $('.navbar-brand').css({'font-size':'20px','padding-left':'15px'});
	}

    $(document).on('click','button.navbar-toggle',function(e){
        e.preventDefault();
        var isAreaExpanded = $('.navbar-collapse').attr('aria-expanded');
        if(isAreaExpanded == "true"){
            $("#msc-logo").css({"top":"4%"});
        } else {
            $("#msc-logo").css({"top":"20%"});
        }
        
    });
	/* if(isiPad){
		$("#main-nav").css({"margin-right":"9%"});
		$("#msc-logo").css({"right":"2%"});
	} */
	
	$('.slickSlider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      dots: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }]
    });
    $(".slick-prev").css("display","none");
    $(".slick-next").css("display","none");
    /*$('.clientSlider').slick({
        dots: false,
        infinite: true,
        speed: 300, 
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
        ]
    });*/

});

/* ========================================================================= */
/*  Welcome Section Slider
/* ========================================================================= */

$(function() {

    var Page = (function() {

        var $navArrows = $( '#nav-arrows' ),
            $nav = $( '#nav-dots > span' ),
            slitslider = $( '#slider' ).slitslider( {
                onBeforeChange : function( slide, pos ) {

                    $nav.removeClass( 'nav-dot-current' );
                    $nav.eq( pos ).addClass( 'nav-dot-current' );

                }
            } ),

            init = function() {

                initEvents();
                
            },
            initEvents = function() {

                // add navigation events
                $navArrows.children( ':last' ).on( 'click', function() {

                    slitslider.next();
                    return false;

                } );

                $navArrows.children( ':first' ).on( 'click', function() {
                    
                    slitslider.previous();
                    return false;

                } );

                $nav.each( function( i ) {
                
                    $( this ).on( 'click', function( event ) {
                        
                        var $dot = $( this );
                        
                        if( !slitslider.isActive() ) {

                            $nav.removeClass( 'nav-dot-current' );
                            $dot.addClass( 'nav-dot-current' );
                        
                        }
                        
                        slitslider.jump( i + 1 );
                        return false;
                    
                    } );
                    
                } );

            };

            return { init : init };

    })();

    Page.init();

});



$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 2000,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $(".navbar-brand a").css("color","#fff");
            $("#navigation").removeClass("animated-header");
            $('#msc-logo').css('top','5%');
        } else {
            $(".navbar-brand a").css("color","inherit");
            $("#navigation").addClass("animated-header");
            $('#msc-logo').css('top','20%');
        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

    // Slider Height
    var slideHeight = $(window).height();
    
    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);

    $(window).resize(function(){'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height',slideHeight);
    });
	
	
	
	$("#works, #testimonial").owlCarousel({	 
		navigation : true,
		pagination : false,
		slideSpeed : 700,
		paginationSpeed : 400,
		singleItem:true,
		navigationText: ["<i class='fa fa-angle-left fa-lg'></i>","<i class='fa fa-angle-right fa-lg'></i>"]
	});
	
	
	/* ========================================================================= */
	/*	Featured Project Lightbox
	/* ========================================================================= */

	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
			
		beforeShow: function () {
			this.title = $(this.element).attr('title');
			this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
		},
		
		helpers : {
			title : { 
				type: 'inside' 
			},
			overlay : {
				css : {
					'background' : 'rgba(0,0,0,0.8)'
				}
			}
		}
	});

    //Support Link
    $(document).on('click','#support',function(e){
        e.preventDefault();
        //$(this).attr('target','_blank');
        var url = 'http://www.mitragroup.com.my/support';
        window.open(url, "_blank");
    })

    //Email 
    $('#contact-submit').click(function (e) {

        //stop the form from being submitted
        e.preventDefault();

        /* declare the variables, var error is the variable that we use on the end
        to determine if there was an error or not */
        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        /* in the next section we do the checking by using VARIABLE.length
        where VARIABLE is the variable we are checking (like name, email),
        length is a JavaScript function to get the number of characters.
        And as you can see if the num of characters is 0 we set the error
        variable to true and show the name_error div with the fadeIn effect. 
        if it's not 0 then we fadeOut the div( that's if the div is shown and
        the error is fixed it fadesOut. 
        
        The only difference from these checks is the email checking, we have
        email.indexOf('@') which checks if there is @ in the email input field.
        This JavaScript function will return -1 if no occurrence have been found.*/
        if (name.length == 0) {
            var error = true;
            $('#name').css("border-color", "#D8000C");
        } else {
            $('#name').css("border-color", "#666");
        }
        if (email.length == 0 || email.indexOf('@') == '-1') {
            var error = true;
            $('#email').css("border-color", "#D8000C");
        } else {
            $('#email').css("border-color", "#666");
        }
        if (subject.length == 0) {
            var error = true;
            $('#subject').css("border-color", "#D8000C");
        } else {
            $('#subject').css("border-color", "#666");
        }
        if (message.length == 0) {
            var error = true;
            $('#message').css("border-color", "#D8000C");
        } else {
            $('#message').css("border-color", "#666");
        }

        //now when the validation is done we check if the error variable is false (no errors)
        if (error == false) {
            //disable the submit button to avoid spamming
            //and change the button text to Sending...
            $('#contact-submit').attr({
                'disabled': 'false',
                'value': 'Sending...'
            });

            /* using the jquery's post(ajax) function and a lifesaver
            function serialize() which gets all the data from the form
            we submit it to send_email.php */
            $.post("sendEmail.php", $("#contact-form").serialize(), function (result) {
                //and after the ajax request ends we check the text returned
                if (result == 'sent') {
                    //if the mail is sent remove the submit paragraph
                    $('#cf-submit').remove();
                    //and show the mail success div with fadeIn
                    $('#mail-success').fadeIn(500);
                } else {
                    //show the mail failed div
                    $('#mail-fail').fadeIn(500);
                    //re enable the submit button by removing attribute disabled and change the text back to Send The Message
                    $('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
                }
            });
        }
    });

    //Career Attachment

    /*$('#resumeUploadSubmit').click(function (e) {

        //stop the form from being submitted
        e.preventDefault();*/

        /* declare the variables, var error is the variable that we use on the end
        to determine if there was an error or not */
        /*var error = false;
        var name = $('#sender_name').val();
        var email = $('#sender_email').val();
        var subject = $('#sender-subject').val();
        var message = $('#sender-message').val();*/

        /* in the next section we do the checking by using VARIABLE.length
        where VARIABLE is the variable we are checking (like name, email),
        length is a JavaScript function to get the number of characters.
        And as you can see if the num of characters is 0 we set the error
        variable to true and show the name_error div with the fadeIn effect. 
        if it's not 0 then we fadeOut the div( that's if the div is shown and
        the error is fixed it fadesOut. 
        
        The only difference from these checks is the email checking, we have
        email.indexOf('@') which checks if there is @ in the email input field.
        This JavaScript function will return -1 if no occurrence have been found.*/
        /*if (name.length == 0) {
            var error = true;
            $('#sender_name').css("border-color", "#D8000C");
        } else {
            $('#sender_name').css("border-color", "#666");
        }
        if (email.length == 0 || email.indexOf('@') == '-1') {
            var error = true;
            $('#sender_email').css("border-color", "#D8000C");
        } else {
            $('#sender_email').css("border-color", "#666");
        }
        if (subject.length == 0) {
            var error = true;
            $('#sender-subject').css("border-color", "#D8000C");
        } else {
            $('#sender-subject').css("border-color", "#666");
        }
        if (message.length == 0) {
            var error = true;
            $('#sender-message').css("border-color", "#D8000C");
        } else {
            $('#sender-message').css("border-color", "#666");
        }

        //now when the validation is done we check if the error variable is false (no errors)
        if (error == false) {
            //disable the submit button to avoid spamming
            //and change the button text to Sending...
            $('#resumeUploadSubmit').attr({
                'disabled': 'false',
                'value': 'Sending...'
            });

            $('#resumeUploadForm').submit();*/

            /* using the jquery's post(ajax) function and a lifesaver
            function serialize() which gets all the data from the form
            we submit it to send_email.php */
            /*$.post("emailAttachment.php", $("#resumeUploadForm").serialize(), function (result) {
                console.log(result);
                //and after the ajax request ends we check the text returned
                if (result == 'sent') {
                    //if the mail is sent remove the submit paragraph
                    $('#resumeUploadSubmitDiv').remove();
                    //and show the mail success div with fadeIn
                    $('#resume-upload-success').fadeIn(500);
                } else {
                    //show the mail failed div
                    $('#resume-upload-fail').fadeIn(500);
                    //re enable the submit button by removing attribute disabled and change the text back to Send The Message
                    $('#resumeUploadSubmit').removeAttr('disabled').attr('value', 'Send The Message');
                }
            });*/
        /*}
    });*/
	
});


/* ==========  START GOOGLE MAP ========== */

// When the window has finished loading create our google map below


// ========== END GOOGLE MAP ========== //

var wow = new WOW ({
	offset:       75,          // distance to the element when triggering the animation (default is 0)
	mobile:       false,       // trigger animations on mobile devices (default is true)
});
wow.init();

