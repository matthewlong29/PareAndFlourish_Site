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

  // Add email to footer
  var emailX = 'contact';
  var emailY = 'pareandflourish';
  $('.footerContact .email').html('Email: <a href="mailto:' + emailX + '@' + emailY + '.com">' + emailX + '@' + emailY + '.com</a>');

  // Footer reveal effect
//  function footerReveal() {
//
//    var $footerHeight = $('footer').outerHeight(true);
//    var $footerPrimaryHeight = $('#footerPrimary').outerHeight(true);
//    var $colophonHeight = $('#colophon').outerHeight(true);
//
//    $('footer').css({
//      'z-index': '0',
//      'height': $footerHeight
//    });
//
//    $('#footerPrimary').css({
//      'z-index': '1',
//      'height': $footerPrimaryHeight,
//      'background': '#fdfdfd'
//    });
//
//    $('#colophon').css({
//      'z-index': '-1',
//      'height': $colophonHeight,
//      'position': 'fixed',
//      'bottom': '0',
//      'width': '100%'
//    });
//
//    console.log('footer height: ' + $footerHeight);
//    console.log('footer primary height: ' + $footerPrimaryHeight);
//    console.log('colophon height: ' + $colophonHeight);
//
//    console.log('total check: ' + ($colophonHeight + $footerPrimaryHeight));
//
//  }

  // Call headerHeight function
  headerHeight();

  // Call footerReveal function
//  footerReveal();

  // Call functions when window is resized
  $(window).resize(function () {
    headerHeight();
//    footerReveal();
  });

});
