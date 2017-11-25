jQuery(document).ready(function() {

  "use strict";
  
  /********************************************************
  remove image tag dragability
  ********************************************************/

  $("img").mousedown(function () {
    return false;
  });

  /********************************************************
  calculate height of header/banner images
  ********************************************************/

  // calculate height of banner image minus navigation on homepage
  function headerHeight() {
    // get height of navigation container, banner (landing page), and feature images (sub pages)
    var $navHeight = $(".nav-container").height();
    var $bannerHeight = $("#banner").height();
    var $headerImageHeight = $("#header-image").height();
    // set height of banner (landing page)
    $("#banner").css("min-height", "calc(100vh - " + $navHeight + "px)");
    // Set height of header tags (landing page and sub pages)
    $("#landingPageHeader").css("min-height", "calc(100vh)");
    $("#subPageHeader").css("min-height", "calc(" + $navHeight + "px + " + $headerImageHeight + "px)");
  } // end headerHeight()

  // call headerHeight function
  headerHeight();

  // call functions when window is resized
  $(window).resize(function () {
    headerHeight();
  });

  /********************************************************
  add email to footer
  ********************************************************/

  // Add email to footer
  var emailX = 'contact';
  var emailY = 'pareandflourish';
  $('.footerContact .email').html('Email: <a href="mailto:' + emailX + '@' + emailY + '.com">' + emailX + '@' + emailY + '.com</a>'); // End add email to footer

  /********************************************************
  toggle resume, cover letter, and linkedin facts
  ********************************************************/
  
  $('.resume .fact').show();
  $('.linkedIn .fact').hide();
  $('.coverLetter .fact').hide();

  $('.resume').on('click', () => {
    $('.linkedIn .fact').hide();
    $('.coverLetter .fact').hide();
    $('.resume .fact').fadeToggle();
  });

  $('.coverLetter').on('click', () => {
    $('.linkedIn .fact').hide();
    $('.coverLetter .fact').fadeToggle();
    $('.resume .fact').hide();
  });

  $('.linkedIn').on('click', () => {
    $('.linkedIn .fact').fadeToggle();
    $('.coverLetter .fact').hide();
    $('.resume .fact').hide();
  });
});