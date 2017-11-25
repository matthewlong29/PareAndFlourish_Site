/********************************************************
 navigation bar
********************************************************/

$(document).ready(() => {

  // add or remove class based on height of banner or heading image
  $(window).scroll(function() {

    // header image height (subpages)
    let $headerHeight = $("#header-image").height();
    
    // vertical location of navbar
    let $offset = $(".join-and-search-container").offset().top;
     if ($(this).scrollTop() > $headerHeight) {
      $(".join-and-search-container").addClass("join-and-search-container-top");
    } else {
      $(".join-and-search-container").removeClass("join-and-search-container-top");
    }

  });

  // toggle for menu overlay - see media query
  $("#openMenu").click(() => {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
  });

  $("#closeMenu").click(() => {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
  });

  $(".overlay ul li a").click(() => {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
  });
});