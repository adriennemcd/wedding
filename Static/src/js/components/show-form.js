define(function() {

  return {

    init: function() {
      $('.js-show-form').on('click', function() {
        $('.rsvp__form').slideToggle();
      });
    }
    
  };
});