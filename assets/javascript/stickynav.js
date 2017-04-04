$(document).ready(function () {

	var stickyNavbar = $('.navbar').offset().top;

	$(window).scroll(function () {
		if ($(window).scrollTop() > stickyNavbar) {
			$('.navbar').addClass('navbar-fixed-top');
		} else {
			$('.navbar').removeClass('navbar-fixed-top');
		}
	});

});
