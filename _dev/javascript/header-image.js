/********************************************************
  calculate height of header/banner images
********************************************************/

// calculate height of banner image minus navigation on homepage
const headerHeight = () => {
  // get height of navigation container, banner (landing page), and feature images (sub pages)
  let $navHeight = $(".nav-container").height();
  let $bannerHeight = $("#banner").height();
  let $headerImageHeight = $("#header-image").height();
  // set height of banner (landing page)
  $("#banner").css("min-height", "calc(100vh - " + $navHeight + "px)");
  // Set height of header tags (landing page and sub pages)
  $("#landingPageHeader").css("min-height", "calc(100vh)");
  $("#subPageHeader").css("min-height", "calc(" + $navHeight + "px + " + $headerImageHeight + "px)");
} // end headerHeight()

// call headerHeight function
headerHeight();

// call functions when window is resized
$(window).resize(() => {
  headerHeight();
});