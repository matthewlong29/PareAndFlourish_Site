/********************************************************
calculate height of header images
********************************************************/

// calculate height of header
const headerHeight = () => {

  // get height of navigation container, banner (landing page), and feature images (sub pages)
  let $bottomNavbarHeight = $(".join-and-search-container").height();
  let $headerImageHeight = $("#header-image").height();

  // Set height of header tags (landing page and sub pages)
  $("header").css("min-height", "calc(" + $bottomNavbarHeight + "px + " + $headerImageHeight + "px)");

} // end headerHeight()

// call headerHeight function
headerHeight();

// call headerHeight() when window is resized
$(window).resize(() => {
  headerHeight();
});