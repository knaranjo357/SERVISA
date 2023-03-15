
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // BACKSTRETCH SLIDESHOW
    $('.hero-section').backstretch([
      "images/marca/slider-desktop-01.jpg",
      "images/marca/slider-desktop-02-1.jpg",
      "images/marca/slider-desktop-03.jpg",
      "images/marca/slider-desktop-04.jpg",
      "images/marca/slider-desktop-05.jpg",
      "images/marca/slider-desktop-06-1.jpg",
      "images/marca/slider-desktop-07.jpg",
      "images/marca/slider-desktop-08.jpg"
      // "images/slideshow/afro-woman-cleaning-window-with-rag-home.jpg", 
      // "images/slideshow/afro-woman-holding-bucket-with-cleaning-items.jpg",
      // "images/slideshow/unrecognizable-cleaner-walking-into-hotel-room-with-tools-detergents.jpg",
      // "images/services/close-up-mop-cleaning-industrial-plant-floor.jpg"
    ],  {duration: 2000, fade: 750});
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      scrollToDiv(elWrapped);
      return false;
  
      function scrollToDiv(element){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
    
  })(window.jQuery);


