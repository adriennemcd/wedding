define(function() {

  return {

    init: function() {
      // https://codepen.io/JTParrett/pen/fnCKE
      var prev = 0;
      var $window = $(window);
      var rsvp = $('.rsvp'); 

$window.on('scroll', function(){
      if (rsvp.hasClass('open') == false ) {
        var scrollTop = $window.scrollTop();
        rsvp.toggleClass('hidden', scrollTop > prev);
        prev = scrollTop;
      }
    });
    } 
  };
});