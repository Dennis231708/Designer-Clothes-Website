// $('.dropdown').mouseenter(function(){
//     $(this).children('.dropdown .dropdown-menu').slideDown('slow');
//     $(this).children('.dropdown .dropdown-menu').toggleClass('open');

//     $(this).mouseleave(function(){
//         $(this).children('.dropdown .dropdown-menu').stop(true).slideUp('fast');
//         $(this).children('.dropdown .dropdown-menu').removeClass('open');


//     });
// });





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
        $('.dropdown').on('click', function(){
            $(this).children('.dropdown .dropdown-menu').slideDown('slow');
            $(this).children('.dropdown .dropdown-menu').toggleClass('open');
            $(this).css({'max-height': '400px', 'overflow-y': 'auto'})
        
            $(this).on('click', function(){
                $(this).children('.dropdown .dropdown-menu').stop(true).slideUp('fast');
                $(this).children('.dropdown .dropdown-menu').toggleClass('open');       
            });
        });
       }
    }
    windowSizeCheck();
});
