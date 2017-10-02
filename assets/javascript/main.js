jQuery(document).ready(function () {

  "use strict";

  /********************************************************
  load more posts function
  ********************************************************/

  // call Load more posts on click
  $(".loadMore").click(loadMorePosts);
  // load more posts function
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
  } // end load more posts function

  /********************************************************
  facebook comments
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
  hide mailchimp popup
  ********************************************************/

  $("body").on("touchstart click", function () {
    $("#PopupSignupForm_0").hide();
  });

  /********************************************************
  google analytics
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
  navigation bar
  ********************************************************/
  
  // smooth Scrolling Function
  $('a[href*="#"]')
    // remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
      // on-page links
      if (
        location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // figure out element to scroll to
        var target = $(this.hash);
        target = target.length ?
          target :
          $("[name=" + this.hash.slice(1) + "]");
        // does a scroll target exist?
        if (target.length) {
          // only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate({
              scrollTop: target.offset().top
            },
            1000,
            function () {
              // callback after animation
              // must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // adding tabindex for elements not focusable
                $target.focus(); // set focus again
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


  // add or remove class based on height of banner or heading image
  $(window).scroll(function () {
    // banner height (homepage)
    var $bannerHeight = $("#banner").height();
    // feature image height (subpages)
    var $featureHeight = $("#feature-image").height();
    // vertical location of navbar
    var $offset = $(".nav-container").offset().top;
    if ($(this).scrollTop() > $bannerHeight) {
      $(".nav-container").addClass("nav-container--top");
    } else if ($(this).scrollTop() > $featureHeight) {
      $(".nav-container").addClass("nav-container--top");
    } else {
      $(".nav-container").removeClass("nav-container--top");
    }
  });

  // toggle for menu overlay - see media query
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
    var $featureImageHeight = $("#feature-image").height();
    // set height of banner (landing page)
    $("#banner").css("min-height", "calc(100vh - " + $navHeight + "px)");
    // Set height of header tags (landing page and sub pages)
    $("#landingPageHeader").css("min-height", "calc(100vh)");
    $("#subPageHeader").css("min-height", "calc(" + $navHeight + "px + " + $featureImageHeight + "px)");
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
  
  /********************************************************
  events carousel on homepage
  ********************************************************/

  const eventImage = {
    1: 'http://www.pareandflourish.com/images/events/event1-pic1.jpg',
    2: 'http://www.pareandflourish.com/images/events/event1-pic2.jpg',
    3: 'http://www.pareandflourish.com/images/events/event1-pic3.jpg',
    4: 'http://www.pareandflourish.com/images/events/event1-pic4.jpg',
    5: 'http://www.pareandflourish.com/images/events/event1-pic5.jpg',
    6: 'http://www.pareandflourish.com/images/events/event1-pic6.jpg',
    7: 'http://www.pareandflourish.com/images/events/event1-pic7.jpg',
    8: 'http://www.pareandflourish.com/images/events/event2-pic1.jpg',
    9: 'http://www.pareandflourish.com/images/events/event2-pic2.jpg',
    10: 'http://www.pareandflourish.com/images/events/event2-pic3.jpg',
    11: 'http://www.pareandflourish.com/images/events/event2-pic4.jpg',
    12: 'http://www.pareandflourish.com/images/events/event2-pic5.jpg'
  }
    
  let eventImages = '';
  
  for (let i = 1; i < 12; i++) {
    eventImages += '<div class="eventImage" style="background: url(' + eventImage[i] + ')"></div>';
  }
  
  $('.eventGallery').append(eventImages);
  
  $('.eventGallery').slick({
    centerMode: true,
    centerPadding: '3rem',
    slidesToShow: 3,
    arrows: false,
    dots: true,
    autoplay: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          centerPadding: '2rem',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '2rem',
          slidesToShow: 1
        }
      }
    ]
  });

});
