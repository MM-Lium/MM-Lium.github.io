var script = function () {

    var $body = $('html,body');
    var winH = $(window).height();
    var winW = $(window).width();
    var $win = $(window);
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var conH = $('.wrapper').height();
    var headerH = $('header').height();
    var $sec = $('.sec');
    var hash = location.hash,
        href;

    /* page scroll */
    var thispage = 0;
    var pagescroll = true;
    var pageT = [],
        $sec = $('.sec'),
        $main = $('.wrapper'),
        // _mainTOP = $main.offset().top,
        ah = $main.outerHeight(true),
        pageName = ['kv', 'news', 'kol', 'promo'];

    var _thispagescroll = pageName.indexOf(hash);

    /* -------------------------------------------------------------------------------------------------------------------------*/
    /* ----------------slick----------------*/

    //新聞輪播
     $('.news_slick .allnews').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                infinite: true,
                slidesToScroll: 1,
                slidesToShow: 1,
                rows:2
            }
        }, ]
    });
    
    /* lightbox
    ------------------------------------------------------------*/

    // var lightbox = function(){

    var $lb = $('.lb'),
        $lbbox = $('.lbbox');
    var _vdUrl = 'https://www.youtube.com/embed/'
    var lb_data;

    var lbOpen = function (lb_data) {
        var lbAni = new TimelineMax();
        lbAni.to($('.lb[data-lb="' + lb_data + '"]'), .5, {
                css: {
                    zIndex: 99
                }
            }, '-=.5')
            .to($('.lb[data-lb="' + lb_data + '"]'), .5, {
                autoAlpha: 1,
                ease: Linear.easeNone
            });


        $body.css({
            'overflow-y': 'hidden',
        })


    }

    var lbClose = function () {
        var lbCloseAni = new TimelineMax();
        lbCloseAni.to($('.lb'), .5, {
                autoAlpha: 0,
                ease: Linear.easeNone
            })
            .to($('.lb'), .5, {
                css: {
                    zIndex: -1
                }
            });

        $body.css({
            'overflow-y': 'auto',
        })
    }

    // lbOpen(lbname);
    $('.libtn').click(function () {
        var lbname = $(this).data('lb');

        lbOpen(lbname);

        return false;
    });

    $('.lb .btn_x').click(lbClose);

    $body.click(function (e) {
        var _con = $('.Chart .databox'); // 设置目标区域
        var _con2 = $('.Chart .contentbox'); // 设置目标区域
        if (!_con.is(e.target) && _con.has(e.target).length === 0) { // Mark 1

            let _databox = $('.Chart .databox');
            _databox.css({'opacity':'0','display':'none'});
        }

        if (!_con2.is(e.target) && _con2.has(e.target).length === 0) { // Mark 1

            let tooltipEl = $('.Chart .contentbox');
            tooltipEl.css({'opacity':'0','display':'none'});
        }
    });

    /* resize
    ------------------------------------------------------------*/

    var _resize = function () {

        winW = $win.width();
        winH = $win.height();
        docH = $(document).height();
        _scroll = $(window).scrollTop();
        scrollBottom = $(window).scrollTop() + $(window).height();
        headerH = $('.myheader2').height();

    }
    $win.resize(function () {

    });


    var windowHeight = $(window).height();

    // Resize Event
    $(window).resize(function () {

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if ($(window).width() != windowHeight) {

            // Update the window width for next time
            windowHeight = $(window).width();

            // Do stuff here
            _resize();
            // if (pagescroll || windowHeight > 768) scrollthispage();

            // iframe_resize();
        }
    });
}



$(function () {
    $('header').load('include/header.html');
    $('footer').load('include/footer.html');

    script();

    // var imagesLoaded = loading();
    // imagesLoaded.loadfunc();
    // imagesLoaded.callback = function () {

    //     script();

    // };

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0, 0);
});