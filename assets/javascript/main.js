$(document).ready(function () {

	//	Toggles newNavbar
	//	$('#toggle').click(function () {
	//		$(this).toggleClass('active');
	//		$('#overlay').toggleClass('open');
	//	});

	// Makes it so that no image is draggable
	$("img").mousedown(function () {
		return false;
	});
  
  $(".loadMore").click(loadMorePosts);
  
});
