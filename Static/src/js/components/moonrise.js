define(function() {

  return {

    init: function() {
      $( document ).ready(function() {
        if ( $('html').css('font-family') == "mobile" ) {
          $('.js-moonrise').animate({'top':'10px'}, 3000);
          $('.js-flower').animate({'left':'-90px','width':'150%'}, 3000);
        } else if ( $('html').css('font-family') == "tablet" ) {
          $('.js-moonrise').animate({'top':'10px'}, 3000);
          $('.js-flower').animate({'width':'135%'}, 3000);
          console.log('tablet');
        } else {
          $('.js-moonrise').animate({'top':'10px'}, 3000);
          $('.js-flower').animate({'width':'110%'}, 3000);
        }

        $( window ).resize(function() {
          if ( $('html').css('font-family') == "mobile" ) {
            $('.js-moonrise').css({'top':'10px'});
            $('.js-flower').css({'left':'-90px','width':'150%'}, 3000);
          } else if ( $('html').css('font-family') == "tablet" ) {
            $('.js-moonrise').css({'top':'10px'});
            $('.js-flower').css({'width':'135%', 'left':'-5px'});
            console.log('tablet');
          } else {
            $('.js-moonrise').css({'top':'10px'});
            $('.js-flower').css({'width':'110%'});
          }
        })

      });
    }
    
  };
});