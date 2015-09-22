
$(function() {

	$('.carousel-cards__list').owlCarousel({
    responsiveClass:true,
    responsive:{
        320:{
            items:1,
            nav:true
        },
        768:{
            items:2,
            nav:false
        },
        1024:{
            items:3,
            nav:true
        },
        1200:{
            items:3,
            nav:true
        }
    }
});

/*----------------
 tabs
 ----------------*/
    $('.banner-news__info_tab').click(function (e) {
        e.preventDefault()
        $('.tab-pane').tab('show')
    })

});

$(window).load(function(){
    $('.slider').fractionSlider({
        'fullWidth': 			true,
        'controls': 			true,
        'pager': 				true,
        'responsive': 			true,
        'increase': 			false,
        'pauseOnHover': 		true
    });

});

(function($){
    $(window).load(function(){
        $(".getScroll").mCustomScrollbar({
            theme:"minimal"
        });
    });

})(jQuery);


$( ".navigation__button" ).click(function() {
    $( '.header' ).toggleClass( "open" );
});



