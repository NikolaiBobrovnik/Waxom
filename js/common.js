$(document).ready(function () {

//slider
    $('.carousel').carousel({
        interval: false
    })

    //slick slider
    $('.responsive').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1670,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false,
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    //end slick slider

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
