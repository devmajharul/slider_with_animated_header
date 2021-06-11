(function( $ ) {
	"use strict";

	jQuery(document).ready(function(){


	  // $(".owl-carousel.home_hero_slider_area").owlCarousel({
	  // 	items:1,
	  // 	autoplay:true,
	  // 	autoplayTimeout: 2000,
	  // 	autoplayHoverPause:true,
	  // 	loop:true,
	  // 	dots:true,
	  // 	nav:true,
	  // 	navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
	  // });

	  var homesliders = $('.owl-carousel.home_hero_slider_area');
	  homesliders.owlCarousel({
	  	items:1,
	  	autoplay:true,
	  	autoplayTimeout: 2000,
	  	autoplayHoverPause:true,
	  	loop:true,
	  	dots:true,
	  	nav:true,
	  	navText: ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
	  });


	  homesliders.on('translate.owl.carousel', function(event) {
    	$('.single_hero_slider h1').removeClass('animated animate__bounce');
    	$('.single_hero_slider p').removeClass('animated animate__wobble');
	  })

	  homesliders.on('translated.owl.carousel', function(event) {
    	$('.single_hero_slider h1').addClass('animated animate__bounce');
    	$('.single_hero_slider p').addClass('animated animate__wobble');
	  })


	});

}(jQuery));
