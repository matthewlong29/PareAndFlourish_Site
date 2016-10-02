//= require vendor/jquery.min

$(document).ready(function(){

// Navbar //

    /// jQuery to collapse the navbar on scroll
    function collapseNavbar() {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    }

    $(window).scroll(collapseNavbar);
    $(document).ready(collapseNavbar);

    /// jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    /// Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $(this).closest('.collapse').collapse('toggle');
    });

// slabtext // 

    // Function to slabtext the H1 headings
    function slabTextHeadlines() {
        $("h1").slabText({
            // Don't slabtext the headers if the viewport is under 380px
            "viewportBreakpoint":380
        });
    };

    // Load fonts using google font loader
    var WebFontConfig = {
        google: { families: [ 'Open+Sans:400,700:latin', 'Oswald:700:latin' ] },
        // slabText the headers when the font has finished loading (or not)
        fontactive: slabTextHeadlines,
        fontinactive: slabTextHeadlines
    };
    (function() {
        var wf = document.createElement('script');
        wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
    })();

});