;(function($) {
	"use strict";

	$(function() {
		var $fullScreenSlider = $('.ba-slider');
		$fullScreenSlider.slick({
			dots: true,
			infinite: false,
			arrow:false
		});
		
		var $newSlider = $('.ba-news__slider');
		$newSlider.slick({
			dots: true,
			infinite: false,
			arrow:false,
			slidesToShow:3,
			slidesToScroll:1
		});


	});

	var baMap;

	function initMap() {

		var poltava = {lat: 49.568528, lng: 34.585432};

		baMap = new google.maps.Map(
			document.querySelector('.ba-map'), 
			{
				center: poltava,
				zoom: 17,
				disableDefaultUI:true
			});
	}

 // initMap();
window.addEventListener('load', initMap);



 
})(jQuery);

