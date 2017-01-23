$(document).ready(function () {

//slider
    $('.carousel').carousel({
        //interval: false
    })

//header-scroll
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 0 ) {
            $('.header').addClass('header-scroll');
            $('.header-left').css('margin-top', '10px');
            $('.header-right').css('margin-top', '10px');
        } else {
            $('.header').removeClass('header-scroll');
            $('.header-left').css('margin-top', '');
            $('.header-right').css('margin-top', '');
        }
    })



    //preloader
    $(window).on('load', function () {
        var $preloader = $('#page-preloader');
        $spinner = $preloader.find('.spinner');
        $spinner.fadeOut();
        $preloader.delay(350).fadeOut('slow');
    });


    //menu-btn
    var $button = $('#menu-btn');

    $button.on('click', function (e) {
        e.preventDefault();
        if ($button.hasClass('open')) {
            $button.removeClass('open');
            $button.addClass('clos');
        } else {
            $button.removeClass('clos');
            $button.addClass('open');
        }
    });

    $button.on('click', function () {
        $('aside,.sliding-panel-fade-screen').toggleClass('is-visible');
    })


    //swipe
    $("#carouselExampleIndicators").swiperight(function () {
        $(this).carousel('prev');
    });
    $("#carouselExampleIndicators").swipeleft(function () {
        $(this).carousel('next');
    });

    //end swipe



});
