// Navbar hover on desktop click on mobile
$(document).ready(function(){
    function windowSizeCheck(){
       var $windowSize = $(window).width();
       if($windowSize > 992){
        $('.dropdown').mouseenter(function(){
            $(this).children('.dropdown .dropdown-menu').slideDown('slow');
            $(this).children('.dropdown .dropdown-menu').toggleClass('open');
        
            $(this).mouseleave(function(){
                $(this).children('.dropdown .dropdown-menu').stop(true).slideUp('fast');
                $(this).children('.dropdown .dropdown-menu').removeClass('open');       
            });
        });
       }
       else{
           
      $('.dropdown').unbind("mouseenter");
      $('.dropdown').unbind("mouseleave");

        $('.dropdown').on('click', function() {
                    $(this).children('.dropdown .dropdown-menu').slideDown('slow');
                    $(this).children('.dropdown .dropdown-menu').toggleClass('openNav');

                    if ($(this).children('.dropdown .dropdown-menu').attr('style')) {
                      $(this).children('.dropdown .dropdown-menu').removeAttr('style');
                    }
            
                  });
       }
    }
    windowSizeCheck();
    $(window).on('resize', function() {
        // this runs when document loads for the first time
        windowSizeCheck();
      });
    
});

