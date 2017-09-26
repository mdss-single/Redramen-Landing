(function($){ 
	"use strict";

	$(window).on('load resize', function() {
		if ($(window).width() < 800) {
			if (!$('.nav').has('.nav__mobile').length) $('.nav').wrapInner('<div class="nav__mobile"></div>');
			$('html').click(function() {
				$('.nav__mobile--active').removeClass('nav__mobile--active');
			});
			$('.burger').click(function(e) {
				e.preventDefault();
				e.stopPropagation();
				$('.nav__mobile').toggleClass('nav__mobile--active');
			});
			$('.nav__mobile--active').click(function(e) {
				e.stopPropagation();
			});
		} else {
			$('.js-slider').flickity({
				cellSelector: '.contacts__slide',
				autoPlay: 4000,
				prevNextButtons: false,
				pageDots: false,
			});
		}
	});

	console.log('%c Верстка: mdss@makexhtml.ru ', 'color:#fff;font-size:1.2rem;background-color:#3469c6;')

})(jQuery);