
$(document).ready(function() {

	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
		}
		
	});

	$('a[href^="#"]').on('click', function(event) {

		var target = $(this.getAttribute('href'));

		if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
				scrollTop: target.offset().top
			}, 1000);
		}

	});

    $(".menu__btn, nav").click(function() {
        $('header').toggleClass("active"),
		$('.menu__btn').toggleClass("active");
    });
});