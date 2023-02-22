$(document).ready(() => {
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            768:{
                items:3,
                dots:true
            }
        }
    });

    $('.accordion-item').hover(
        function(){ 
            $(".accordion-item.active").addClass('inactive').removeClass('active');
        },
        function(){ 
            $(".accordion-item.inactive").addClass('active').removeClass('inactive'); 
        }
    );

    $('.mobile-menu').click(() => {
        $('.mobile-navbar').animate({ width:'75%' });
    });

    $('.mobile-menu_close').click(() => {
        $('.mobile-navbar').animate({ width:'0' });
    });

    $('a[href^=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});