define(function() {

  return {

    init: function() {
      $('.js-show-form').on('click keypress', function() {
        $('.rsvp__form').slideToggle();
        $('.rsvp').toggleClass('open');
      });
    } 
    
  };
});