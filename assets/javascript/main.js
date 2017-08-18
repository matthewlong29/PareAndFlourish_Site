$(document).ready(function () {

  // Makes it so that no image is draggable
  $("img").mousedown(function () {
    return false;
  });

  // Call loadMore function
  //  $(".loadMore").click(loadMorePosts);

  // Calculate height of banner image minus navigation on homepage
  function headerHeight() {
    // Get height of navigation container, banner (landing page), and feature images (sub pages)
    var $navHeight = $(".nav-container").height();
    var $bannerHeight = $("#banner").height();
    var $featureImageHeight = $("#feature-image").height();
    // Set height of banner (landing page)
    $("#banner").css("min-height", "calc(100vh - " + $navHeight + "px)");
    // Set height of header tags (landing page and sub pages)
    $("#landingPageHeader").css("min-height", "calc(100vh)");
    $("#subPageHeader").css("min-height", "calc(" + $navHeight + "px + " + $featureImageHeight + "px)");
  }

  // Set heights of header when window is resized
  $(window).resize(function () {
    headerHeight();
  });

  headerHeight();

});
