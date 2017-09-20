$(document).ready(function () {

  "use strict";

  /********************************************************
  Load More Posts Function
  ********************************************************/

  // Call Load more posts on click
  $(".loadMore").click(loadMorePosts);
  // Load more posts function
  function loadMorePosts() {
    var _this = this;
    var $blogContainer = $("#blogContainer");
    var nextPage = parseInt($blogContainer.attr("data-page")) + 1;
    var totalPages = parseInt($blogContainer.attr("data-totalPages"));

    $(this).addClass("loading");

    $.get("/blog/page" + nextPage, function (data) {
      var htmlData = $.parseHTML(data);
      var $articles = $(htmlData).find("article");

      $blogContainer.attr("data-page", nextPage).append($articles);

      if ($blogContainer.attr("data-totalPages") == nextPage) {
        $(".loading").remove();
      }

      $(_this).removeClass("loading");
    });
  } // End load more posts function

  /********************************************************
  Facebook Comments
  ********************************************************/

  (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  /********************************************************
  MailChimp Form Names
  ********************************************************/

  (function ($) {
    window.fnames = new Array();
    window.ftypes = new Array();
    fnames[0] = 'EMAIL';
    ftypes[0] = 'email';
    fnames[1] = 'FNAME';
    ftypes[1] = 'text';
    fnames[2] = 'LNAME';
    ftypes[2] = 'text';
  }(jQuery));
  var $mcj = jQuery.noConflict(true);

  /********************************************************
  Hide MailChimp Popup
  ********************************************************/

  $("body").on("touchstart click", function () {
    $("#PopupSignupForm_0").hide();
  });

  /********************************************************
  Google Analytics
  ********************************************************/

  (function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
      m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

  ga('create', 'UA-86211989-1', 'auto');
  ga('send', 'pageview');

  /********************************************************
  Navigation Bar
  ********************************************************/
  
  // Smooth Scrolling Function
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ?
          target :
          $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate({
              scrollTop: target.offset().top
            },
            1000,
            function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  class StickyNavigation {
    constructor() {
      this.currentId = null;
      this.currentTab = null;
      this.tabContainerHeight = 70;
      let self = this;
      $(".menuTab").click(function () {
        self.onTabClick(event, $(this));
      });
      $(window).scroll(() => {
        this.onScroll();
      });
      $(window).resize(() => {
        this.onResize();
      });
    }
    
    onScroll() {
      this.checkTabContainerPosition();
      this.findCurrentTabSelector();
    }

    onResize() {
      if (this.currentId) {
        this.setSliderCss();
      }
    }

    findCurrentTabSelector(element) {
      let newCurrentId;
      let newCurrentTab;
      let self = this;
      $(".menuTab").each(function () {
        let id = $(this).attr("href");
        let offsetTop = $(id).offset().top - self.tabContainerHeight;
        let offsetBottom =
          $(id).offset().top + $(id).height() - self.tabContainerHeight;
        if (
          $(window).scrollTop() > offsetTop &&
          $(window).scrollTop() < offsetBottom
        ) {
          newCurrentId = id;
          newCurrentTab = $(this);
        }
      });
      if (this.currentId != newCurrentId || this.currentId === null) {
        this.currentId = newCurrentId;
        this.currentTab = newCurrentTab;
        this.setSliderCss();
      }
    }

    setSliderCss() {
      let width = 0;
      let left = 0;
      if (this.currentTab) {
        width = this.currentTab.css("width");
        left = this.currentTab.offset().left;
      }
      $(".menuTabSlider").css("width", width);
      $(".menuTabSlider").css("left", left);
    }
  }

//  new StickyNavigation();


  // Add or remove class based on height of banner or heading image
  $(window).scroll(function () {
    // Banner height (homepage)
    var $bannerHeight = $("#banner").height();
    // Feature image height (subpages)
    var $featureHeight = $("#feature-image").height();
    // Vertical location of navbar
    var $offset = $(".nav-container").offset().top;
    if ($(this).scrollTop() > $bannerHeight) {
      $(".nav-container").addClass("nav-container--top");
    } else if ($(this).scrollTop() > $featureHeight) {
      $(".nav-container").addClass("nav-container--top");
    } else {
      $(".nav-container").removeClass("nav-container--top");
    }
  });

  // Toggle for menu overlay - see media query
  $("#openMenu").click(function () {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
  });

  $("#closeMenu").click(function () {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
  });

  $(".overlay ul li a").click(function () {
    $(this).toggleClass("active");
    $("#overlay").toggleClass("open");
  });
  
  /********************************************************
  Remove Image Tag Dragability
  ********************************************************/

  $("img").mousedown(function () {
    return false;
  });

  /********************************************************
  Calculate Height of Header/Banner Images
  ********************************************************/

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
  } // End headerHeight()

  // Call headerHeight function
  headerHeight();

  // Call functions when window is resized
  $(window).resize(function () {
    headerHeight();
  });

  /********************************************************
  Add Email to Footer
  ********************************************************/

  // Add email to footer
  var emailX = 'contact';
  var emailY = 'pareandflourish';
  $('.footerContact .email').html('Email: <a href="mailto:' + emailX + '@' + emailY + '.com">' + emailX + '@' + emailY + '.com</a>'); // End add email to footer

  /********************************************************
  Toggle Resume, Cover Letter, and LinkedIn Facts
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
