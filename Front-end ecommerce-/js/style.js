$(document).ready(function () {

    /* LISTA PRODUCTO DEL 2020*/

    if ($('.bbb_slider').length) {
        var trendsSlider = $('.bbb_slider');
        trendsSlider.owlCarousel(
            {
                loop: false,
                margin: 30,
                nav: false,
                dots: false,
                autoplayHoverPause: true,
                autoplay: false,
                responsive:
                {
                    0: { items: 1 },
                    575: { items: 2 },
                    991: { items: 3 }
                }
            });

        trendsSlider.on('click', '.bbb_fav', function (ev) {
            $(ev.target).toggleClass('active');
        });

        if ($('.bbb_prev').length) {
            var prev = $('.bbb_prev');
            prev.on('click', function () {
                trendsSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.bbb_next').length) {
            var next = $('.bbb_next');
            next.on('click', function () {
                trendsSlider.trigger('next.owl.carousel');
            });
        }
    }

    /* visto recientemente */
    if ($('.bbb_viewed_slider').length) {
        var viewedSlider = $('.bbb_viewed_slider');

        viewedSlider.owlCarousel(
            {
                loop: true,
                margin: 30,
                autoplay: true,
                autoplayTimeout: 6000,
                nav: false,
                dots: false,
                responsive:
                {
                    0: { items: 1 },
                    575: { items: 2 },
                    768: { items: 3 },
                    991: { items: 4 },
                    1199: { items: 6 }
                }
            });

        if ($('.bbb_viewed_prev').length) {
            var prev = $('.bbb_viewed_prev');
            prev.on('click', function () {
                viewedSlider.trigger('prev.owl.carousel');
            });
        }

        if ($('.bbb_viewed_next').length) {
            var next = $('.bbb_viewed_next');
            next.on('click', function () {
                viewedSlider.trigger('next.owl.carousel');
            });
        }
    }




 /* VISOR DE IMG*/

 /*   (function($) {

        var tabs =  $(".tabs li a");
      
        tabs.click(function() {
            var content = this.hash.replace('/','');
            tabs.removeClass("active");
            $(this).addClass("active");
        $("#content > aside").hide();
        $(content).fadeIn(200);
        });
    
    })(jQuery);
*/


});






