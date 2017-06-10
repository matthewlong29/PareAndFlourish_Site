// jQuery to collapse the navbar on scroll
$(document).ready(function () {

	function collapseNavbar() {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	}

//	$(window).scroll(collapseNavbar);
//	$(document).ready(collapseNavbar);

	// Closes the Responsive Menu on Menu Item Click
//	$('.navbar-collapse ul li a').click(function () {
//		$(this).closest('.collapse').collapse('toggle');
//	});

});
