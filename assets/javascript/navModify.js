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

$(document).click(function (e) {
	if (!$(e.target).is('a') && !$(e.target).is('input')) {
		$('.collapse').collapse('hide');
	}
});
