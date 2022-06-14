/* Safari 『強制』禁止縮放
==================================================*/
document.documentElement.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1)
        e.preventDefault();
}, false);
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function(e) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300)
        e.preventDefault();
    lastTouchEnd = now;
}, false);







var script = function() {

    var $body = $('html,body');
    var winH = $(window).height();
    var winW = $(window).width();
    var $win = $(window);
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var conH = $('.container').height();
    var headerH = $('header').height();


    console.log('location.href: ' + location.href);
    console.log('location.protocol: ' + location.protocol);
    console.log('location.hostname: ' + location.hostname);
    console.log('location.host: ' + location.host);
    console.log('location.pathname: ' + location.pathname);



    $('.gb-footer-2019__btn-top').click(function() {
        $body.animate({
            scrollTop: 0
        }, 600);
    })




    /* 選單
   ------------------------------------------------------------*/

    function navde() {
        $('.burger').attr('toggle', '0');
        $('.burger').removeClass('isclick');
        TweenMax.to('.navbox', .4, { autoAlpha: 0, zIndex: -1 });

        if (winW >= 1024) {
            $('.nav').show();
            $('#myheader').find('.container').css({
                'background': '#fff'
            })
            $('body,html').css({
                'overflow': '',
                'height': ''
            })
        } else {
            $('.nav').slideUp();
            $('#myheader').find('.container').css({
                'background': '#000'
            })
        }
    }
    navde();


    $('.burger').click(function() {

        var menuOpen = $('.burger').attr('toggle');

        if (menuOpen == 0) {

            $('.nav').slideDown();

            $('.burger').attr('toggle', '1');
            $('.burger').addClass('isclick');

            $('body,html').css({
                'overflow': 'hidden',
                'height': '100vh'
            })

            // $('#myheader').find('.container').css({
            //    'background': '#262626'
            // })
            if (winW <= 1024) {
                TweenMax.to($('#myheader').find('.container'), .1, { backgroundColor: '#262626', ease: Linear.easeNone });
            }
        } else if (menuOpen == 1) {

            $('.nav').slideUp();

            $('.burger').attr('toggle', '0');
            $('.burger').removeClass('isclick');

            $('body,html').css({
                'overflow': '',
                'height': ''
            })

            // $('#myheader').find('.container').css({
            //    'background': '#000'
            // })
            if (winW <= 1024) {
                TweenMax.to($('#myheader').find('.container'), 1, { backgroundColor: '#000', ease: Linear.easeNone });
            }
        }

    });



    // $('.preorder').find('.step2').find('.choose').find('label').hover(function () {
    //     $(this).parent().toggleClass('hover');
    // })






    // function stepde() {
    //     $('.preorder').find('.inner').hide();
    //     $('.preorder').find('.stepbox').find('li').removeClass('select');
    // }
    // stepde();
    //
    // function infode() {
    //     $('.information').find('.inner').hide();
    // }
    // infode();
    //
    // $('.preorder').find('.step1').fadeIn();
    // $('.preorder').find('.stepbox').find('li').eq(0).addClass('select');
    //
    // $('.information').find('.step1').fadeIn();

    // $('.preorder').find('.stepbox').find('li').click(function () {
    //
    //     var ind = $(this).index();
    //
    //     stepde();
    //
    //     $('.preorder').find('.inner[data-step="'+(ind+1)+'"]').fadeIn();
    //     $('.preorder').find('.stepbox').find('li').eq(ind).addClass('select');
    // });

    // $('.stepbtn').click(function () {
    //     var stepname = $(this).data('tostep');
    //
    //     stepde();
    //     infode();
    //
    //     $('.preorder').find('.inner[data-step="'+stepname+'"]').fadeIn();
    //     $('.preorder').find('.stepbox').find('li').eq(stepname-1).addClass('select');
    //
    //     $('.information').find('.inner[data-step="'+stepname+'"]').fadeIn();
    // });



    //選單改變顏色

    if ($('.rule-how').length) {

        $('._Note20ultra .capacities label').on('click', function() {
            $('._Note20ultra #note20ultracolor2').prop("checked", true);
        })

        $('._Note20 .capacities label').on('click', function() {
            $('._Note20 #note20color3').prop("checked", true);
        })

        $('._GalaxyS21 .capacities label').on('click', function() {
            $('._GalaxyS21 #galaxyS21color3').prop("checked", true);
        })
    }



    /* 首頁LB
   ------------------------------------------------------------*/


    $('.kv_video .main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.kv_video .list',
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,

            }
        }]


    });


    $('.kv_video .list').slick({
        slidesToShow: 8,
        slidesToScroll: 4,
        slidesPerRow: 4,
        asNavFor: '.kv_video .main',
        dots: false,
        swipe: false,
        infinite: false,
        arrows: false,
        swipeToSlide: false,
        centerMode: false,
        pauseOnFocus: true,
        draggable: false,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: true,
                slidesToShow: 3,
                swipe: true,
                infinite: true,
                swipeToSlide: true,
                slidesToScroll: 1,
            }
        }]
    });


    $('.kv_video .slick-arrow').click(function() {

        $('.kv_video .mainIframe').each(function() {
            this.contentWindow.postMessage('{"event": "command", "func": "stopVideo", "args": ""}', '*');
        });

    });

    $('.kv_video .main').on('afterChange', function(event, slick, currentSlide, nextSlide) {
        var phoneimg = $('.main .slick-slide.slick-current.slick-active .imgWrap').data('pic');
        console.log(phoneimg);

        $('.lb2 .imgWrap').attr('src', phoneimg);

    });




    // $('.btn_prev').click(function() {
    //     $('.kv_video .mainIframe').each(function() {
    //         this.contentWindow.postMessage('{"event": "command", "func": "stopVideo", "args": ""}', '*');
    //     });

    // });


    /* 首頁 kv2 tab選單
   ------------------------------------------------------------*/


    $('.kv2 .title li').on('click', function() {
        // if ($(this).hasClass('active')) return false;
        $('.kv2 .title li.on').removeClass('on');
        $('.kv2 .content li.on').removeClass('on');

        $(this).addClass('on');

        $('.kv2 .content li.' + $(this).attr('data-list')).addClass('on');

    });


    /* 訂單選項
   ------------------------------------------------------------*/

    $('.shoplist').find('li').removeClass('select');
    $('.shoplist').find('li').click(function() {
        $('.shoplist').find('li').removeClass('select');
        $(this).addClass('select');
    })


    /* step2 選擇產品規格
    ------------------------------------------------------------*/

    var imgpath = 'images/phone/';
    $s21ultra_512g = ['black', 'silver'];
    $s21ultra_256g = ['black', 'silver'];
    $s21plus_256g = ['purple', 'silver2', 'black2'];
    $s21plus_128g = ['purple', 'silver2'];
    $s21_256g = ['purple2', 'pink', 'white', 'gray'];
    $s21_128g = ['purple2', 'gray'];


    $('.step2____').find('.choose').each(function() {

        var ptName = 1;

        reloadDataimg()

        function reloadDataimg() {
            if (ptName == 1) {
                $(".pcolor").each(function() {
                    $(this).attr('data-img', $(this).data('pt1img'))
                });
            } else if (ptName == 2) {
                $(".pcolor").each(function() {
                    $(this).attr('data-img', $(this).data('pt2img'))
                });
            } else if (ptName == 3) {
                $(".pcolor").each(function() {
                    $(this).attr('data-img', $(this).data('pt3img'))
                });
            }
        }

        $(this).find('dt,dd').click(function() {
            var phoneimg = $(this).data('img');
            var phoneId = $(this).data('pdname');
            var phoneCapa;

            $('.phoneimg').attr('src', imgpath + phoneimg + ".png");

            if ($(this).hasClass('phonetype')) {
                ptName = $(this).data('pt')
                $('.pcapa').hide().removeClass('select');
                $('.capa-' + phoneId).removeClass('hide').fadeIn().eq(0).trigger('click');

                reloadDataimg()
            }

            if ($(this).hasClass('pcapa')) {
                ptName = $(this).data('pt')
                phoneCapa = $(this).data('capa');
                $('.pcolor').hide().removeClass('select');

                reloadDataimg()

                switch (phoneCapa) {
                    case 's21ultra_512g':
                        $.each($s21ultra_512g, function(i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s21ultra_512g[0]).addClass('select')
                        break;
                    case 's21ultra_256g':
                        $.each($s21ultra_256g, function(i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s21ultra_256g[0]).addClass('select')
                        break;
                    case 's21plus_256g':
                        $.each($s21plus_256g, function(i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s21plus_256g[0]).addClass('select')
                        break;
                    case 's21plus_128g':
                        $.each($s21plus_128g, function(i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s21plus_128g[0]).addClass('select')
                        break;
                    case 's21_256g':
                        $.each($s21_256g, function(i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s21_256g[0]).addClass('select')
                        break;
                    case 's21_128g':
                        $.each($s21_128g, function(i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s21_128g[0]).addClass('select')
                        break;
                }
            }


            if (!$(this).hasClass('disabled')) {
                $(this).parent().find('dt,dd').removeClass('select');
                $(this).addClass('select');
            }

        })
    })



    /* QA
    ------------------------------------------------------------*/

    $('.qna').find('.box').each(function() {
        $(this).click(function() {
            $(this).toggleClass('isopen');
            if ($(this).hasClass('isopen')) {
                $(this).find('.txt').slideDown();
            } else {
                $(this).find('.txt').slideUp();
            }
        })
    })


    /* 取消原因
    ------------------------------------------------------------*/

    $('.lb-reason .selectbox select').click(function() {

        $('.lb-reason  .main').addClass('open');

    });







    /* 熱銷通路切換 -----------------------------------------------------*/

    var thisPath = 1,
        prevPath = '',
        $btn_tab = $('.soldout .tabbox .tab');

    var pathPagechange = function() {
        if (thisPath !== prevPath) $('.soldout .btnlist').css({
            'opacity': 0,
            'z-index': -1,
            'height': 0
        })

        $('.soldout .btnlist[data-list="' + thisPath + '"]').css({
            // 'opacity':1,
            'height': 'auto',
            'z-index': 1
        })

        var pathAni = new TimelineMax();
        pathAni.to($('.soldout .btnlist[data-list ="' + thisPath + '"]'), .3, { css: { opacity: 1, height: 'auto' }, ease: Linear.easeNone });

        $btn_tab.removeClass('select');
        $btn_tab.eq(thisPath - 1).addClass('select');
        prevPath = thisPath;
    }
    pathPagechange(thisPath);

    $btn_tab.click(function() {
        var $this = $(this);
        // var _se5pos = $('.sec5').offset().top;
        if ($this.hasClass('js-justLink')) return;

        // $body.animate({
        //     scrollTop: _se5pos
        // }, 600);

        thisPath = $this.index();
        pathPagechange();
    });


    // tab切換效果 

    $btn_tab.click(function() {
        var _ind = $(this).index() - 1,
            _w = $(this).outerWidth(true);

        if (_ind === 2) return;
        // console.log(_w);

        TweenMax.to($(this).parent().find('.ovr'), .3, { left: _ind * _w, ease: Quart.easeInOut });
    })





    /* promo ------------------------------------------------------------*/

    // 主選切換
    var thisS4 = 0,
        prevS4 = '',
        $btn_sec4 = $('.promobox .tabbox .tab');

    var sec4Pagechange = function () {
        if(thisS4 !== prevS4)$('.promobox .inner').fadeOut(0);
        $('.promobox .inner[data-inner ="' + thisS4 + '"]').fadeIn(500);
        $btn_sec4.removeClass('select');
        $btn_sec4.eq(thisS4).addClass('select');
        prevS4 = thisS4;
    }
    sec4Pagechange(thisS4);
    $btn_sec4.click(function(){
        thisS4 = $(this).index();
        sec4Pagechange();
    });

    //副選單
    $('.promobox .inner').each(function () {
        $(this).find('.submenu').find('li').each(function () {
            $(this).click(function () {
                var _ind = $(this).index();
                var _thispos = $(this).closest('.inner').find('.listing').find('.one').eq(_ind).offset().top;

                $body.animate({
                    scrollTop: _thispos
                }, 600);
            })
        })
    })

    var hash = location.hash;


    if ($('#promo').length) {
        var promoPos = $('#promo').offset().top;
    }

    function promoscroll() {
        if (hash != '' && hash == '#promo') {
            TweenMax.to('body,html', .8, { scrollTop: promoPos, ease: Quart.easeOut });
        }
        if (hash != '' && hash == '#promo_1') {
            TweenMax.to('body,html', .8, { scrollTop: promoPos, ease: Quart.easeOut });
            thisS4 = 0;
            sec4Pagechange(thisS4);
        }
        if (hash != '' && hash == '#promo_2') {
            TweenMax.to('body,html', .8, { scrollTop: promoPos, ease: Quart.easeOut });
            thisS4 = 1;
            sec4Pagechange(thisS4);
        }
        if (hash != '' && hash == '#promo_3') {
            TweenMax.to('body,html', .8, { scrollTop: promoPos, ease: Quart.easeOut });
            thisS4 = 2;
            sec4Pagechange(thisS4);
        }
    }
    promoscroll();










    /* lightbox
    ------------------------------------------------------------*/

    // var lightbox = function(){

    var $lb = $('.lb'),
        $lbbox = $('.lbbox');
    // var _vdUrl = 'https://www.youtube.com/embed/'

    var lb_data,
        lb_data2,
        lbname,
        lbname2;
    // var lbname = 'reason';

    TweenMax.set($('.lb'), { opacity: 0, zIndex: -1 });

    var lbOpen = function(lb_data) {

        var lbAni = new TimelineMax();
        lbAni.to($('.lb[data-lb="' + lb_data + '"]'), .3, { css: { zIndex: 9999 } }, '-=.3')
            .to($('.lb[data-lb="' + lb_data + '"]'), .3, { opacity: 1, ease: Linear.easeNone });

        if ($('.restart').length) {
            $('.restart').click(lbClose);
        }

        $body.css({
            'overflow': 'hidden',
            'position': ''
        })
    }


    var lbOpen2 = function(lb_data) {

        var lbAni = new TimelineMax();
        lbAni.to($('.lb2[data-lb2="' + lb_data + '"]'), .3, { css: { zIndex: 9999 } }, '-=.3')
            .to($('.lb2[data-lb2="' + lb_data + '"]'), .3, { opacity: 1, ease: Linear.easeNone });

        if ($('.restart').length) {
            $('.restart').click(lbClose);
        }

        $body.css({
            'overflow': 'hidden',
            'position': 'fixed'
        })
    }

    var lbClose = function(lb_data2) {

        // var lbCloseAni = new TimelineMax();
        //     lbCloseAni.to($('.lb[data-lb="'+lb_data2+'"]') , .3 ,{opacity:0  ,ease:Linear.easeNone})
        //               .to($('.lb[data-lb="'+lb_data2+'"]') , .3 ,{css:{zIndex:-1}});

        var lbCloseAni = new TimelineMax();
        lbCloseAni.to($('.lb'), .3, { opacity: 0, ease: Linear.easeNone })
            .to($('.lb'), .3, { css: { zIndex: -1 } });


        $body.css({
            'overflow': '',
            'position': ''
        })

    }

    var lbClose2 = function(lb_data2) {

        // var lbCloseAni = new TimelineMax();
        //     lbCloseAni.to($('.lb[data-lb="'+lb_data2+'"]') , .3 ,{opacity:0  ,ease:Linear.easeNone})
        //               .to($('.lb[data-lb="'+lb_data2+'"]') , .3 ,{css:{zIndex:-1}});

        var lbCloseAni = new TimelineMax();
        lbCloseAni.to($('.lb2'), .3, { opacity: 0, ease: Linear.easeNone })
            .to($('.lb2'), .3, { css: { zIndex: -1 } });


        $body.css({
            'overflow': '',
            'position': ''
        })

    }

    // lbOpen(lbname);
    $('.libtn').click(function() {
        var lbname = $(this).data('lb');
        // var ytid = $(this).attr('ytid');

        lbOpen(lbname);

        return false;
    });

    $('.libtn2').click(function() {
        var lbname = $(this).data('lb2');
        // var ytid = $(this).attr('ytid');

        lbOpen2(lbname);

        return false;
    });


    $('.lb .btn_x').click(function() {
        // var rootlbname = $(this).parents('.lb').data('lb');

        $('.kv_video .mainIframe').each(function() {
            this.contentWindow.postMessage('{"event": "command", "func": "stopVideo", "args": ""}', '*');
        });

        lbClose();
    });


    $('.lb2 .btn_x').click(function() {
        // var rootlbname = $(this).parents('.lb').data('lb');

        lbClose2();
    });


    // }
    // lightbox();













    /* resize
    ------------------------------------------------------------*/

    var _resize = function() {

        winW = $win.width();
        winH = $win.height();
        docH = $(document).height();
        _scroll = $(window).scrollTop();
        scrollBottom = $(window).scrollTop() + $(window).height();
        headerH = $('header').height();

        promoPos = $('#promo').offset().top;
        promoscroll();

        navde();

    }
    _resize();
    $win.resize(function() {

        _resize();

    });





    var windowHeight = $(window).height();

    // Resize Event
    $(window).resize(function() {

        // Check window width has actually changed and it's not just iOS triggering a resize event on scroll
        if ($(window).width() != windowHeight) {

            // Update the window width for next time
            windowHeight = $(window).width();

            // Do stuff here
            _resize();

        }

    });



};


$(function() {
    //$('#myheader').load('include/header.html', function() {

    //    if ($('.wrapper').hasClass('com')) {
    //        $('#myheader').find('.nav').find('ul').find('li:nth-child(2)').hide();
    //        $('#myheader').find('.nav').find('ul').find('li:nth-child(3)').hide();
    //        $('#myheader').find('.nav').find('ul').find('li:nth-child(6)').hide();
    //    }

    //});
    //$('#myfooter').load('include/footer.html');

    // script();

    var imagesLoaded = loading();
    imagesLoaded.loadfunc();
    imagesLoaded.callback = function() {

        script();


    };
});