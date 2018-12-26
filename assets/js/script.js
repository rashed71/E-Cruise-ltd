$(document).ready(function(){
	//menu-hover navigation JS
    $('ul.nav li.dropdown').hover(function() {
	      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
	    }, function() {
	      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

     // WOW
      new WOW().init();

      // Owl Carousel(our cars)
      $('.review-cars').owlCarousel({
            autoplay: true,
            loop:true,
            margin:10,
            nav:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:3                    
                }
            }
        });

      //Owl carousel(testimonial)
            $("#about_ttml").owlCarousel({
                items: 4,
                autoplay: true,
                loop: true,
                dots:true,
                mouseDrag:true,
                nav:true,
                smartSpeed:700,
                transitionStyle:"fade",
                animateIn: 'fadeIn',
                animateOut: 'fadeOutLeft',
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:2
                    },
                    1000:{
                        items:3                    
                    }
                }           
            });

        // Owl Carousel(team)
          $('.review-team').owlCarousel({
                autoplay: true,
                loop:true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:4                    
                    }
                }
            });

        // Owl Carousel(blog)
          $('.review-blog').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:2                    
                    }
                }
            });

          //scroll start
                var scrollTop = $(".scrollTop");
              $(window).scroll(function() {
                // declare variable
                var topPos = $(this).scrollTop();

                // if user scrolls down - show scroll to top button
                if (topPos > 100) {
                  $(scrollTop).css("opacity", "1");

                } else {
                  $(scrollTop).css("opacity", "0");
                }

              }); //scroll end

              //Click event to 'scroll to top'
              $(scrollTop).click(function() {
                $('html, body').animate({
                  scrollTop: 0
                }, 800);
                return false;

              }); //Click event to 'scroll to top' end

});