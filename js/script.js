$(document).ready(function() {
	
	
	 var menu = $(".fixedMenuBurger");
        var clicked = false;
        $( "a.menu-trigger" ).click(function() {
            if(clicked){
                    menu.removeClass("hamburgerCross");
                    $(".menuNav").fadeOut("slow");
                    clicked=false;
                }else{
                    
                    menu.addClass("hamburgerCross");
                    $(".menuNav").fadeIn("slow");
                    clicked=true;  
                }
});

/* Scroll to first to section */
$('.top').localScroll(); 


/* Scroll all the way back to the top of page */ 
 $('#backtop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 2000);
    return false;
 });


	/* For the sticky navigation */
	
	$('.js--section-features').waypoint(function(direction){
		
		if(direction == "down"){
			
			$('nav').addClass('sticky');
		    $('.sticky').addClass('animated pulse');
			
		} else {
			
			$('nav').removeClass('sticky');
			
		}
		
		
	}, {
					offset: '60px;'
				});
	
	/* Scroll on buttons */
	
	$('.js--scroll-to-plans').click(function() {
		
		$('html, body').animate({scrollTop: $('.js--section-pricing').offset().top}, 1000);
		
	});
	
	$('.js--scroll-to-start').click(function() {
		
		$('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
		
	});
	
		$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000);
			return false;
		  }
		}
	  });
	});
	
	
	
	/* Animation on scroll */
	
		 $('.js--wp-1').waypoint(function(direction){
					
					
					$('.js--wp-1').addClass('animated fadeIn');
					
				}, {
								offset: '50%;'
							});
				
	   


		$('.js--wp-2').waypoint(function(direction){
				
				
				$('.js--wp-2').addClass('animated fadeInUp');
				
			}, {
							offset: '50%;'
					
			
		});


		$('.js--wp-3').waypoint(function(direction){
				
				
				$('.js--wp-3').addClass('animated fadeIn');
				
			}, {
							offset: '50%;'
					
		});


		$('.js--wp-4').waypoint(function(direction){
				
				
				$('.js--wp-4').addClass('animated pulse');
				
			}, {
							offset: '50%;'
			
			
		});
		
		$('.js--wp-5').waypoint(function(direction){
				
				
				$('.js--wp-5').addClass('animated bounce');
				
			}, {
							offset: '50%;'
			
			
		});
		
		$('.js--wp-6').waypoint(function(direction){
				
				
				$('.js--wp-6').addClass('animated pulse');
				
			}, {
							offset: '50%;'
			
			
		});
		
		
		 


 	/* Maps */
	var map = new GMaps({
	  div: '.map',
	  lat: 51.5069172,
	  lng: -0.1369873,
	  zoom: 15
	});
	
	map.addMarker({
	   lat: 51.5069172,
	  lng: -0.1369873,
	  title: 'Orpington',
		infoWindow: {
		content: '<p>Our Orpington Headquarters</p>'
			}
	});
	
	/* ######################## */

	
	$(".parra-pic").vegas({
		
	   	  delay: 9000,
		timer: true,
		cover: true,
		transitionDuration: 4000,
		
		
    slides: [
        { src: "./css/img/cab-ben.jpg" },
        {  src: "./css/img/taxiLight.jpg"},
        { src: "./css/img/ondon-taxi-monster.jpg" }
        
      
    ],
	    
		
	 
});






 });
 
 
 