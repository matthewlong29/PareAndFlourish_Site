$(document).ready(function() {
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
    var $featureHeight = $("#header-image").height();
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
});