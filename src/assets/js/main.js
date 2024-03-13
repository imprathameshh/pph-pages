jQuery(document).ready(function() {

    (function(window, document, $) {
        SyntaxHighlighter.all();
    });

    $(".testimonial-slider").flexslider({
      animation: "slide",
      animationLoop: true,
      slideshow: true,
      touch: true,
      pauseOnHover: false,
      directionNav: true,
      controlNav: true,
      startAt: 0,
    });

});