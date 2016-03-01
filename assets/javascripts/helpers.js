App.helpers = (function () {

    // Public method => Animation scrolling to top
    function smoothScrolling() {
        $(function() {
          $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate({
                  scrollTop: target.offset().top - $('.site-header').outerHeight()
                }, 1000);
                return false;
              }
            }
          });
        });
    }   
    
    
  return {
    smoothScrolling: smoothScrolling
  };
}());
