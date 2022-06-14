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


    let _location = decodeURI(location.href);
    if (_location.split('#')[1] == "lb_open") {
        setTimeout(function () {
            lbOpen('explain');
        }, 1000)
    }else if(_location.split('#')[1]== "政黨好感度跨世代分析"){
        setTimeout(function () {
            let political_top = $(".political").offset().top;
            $body.animate({
                scrollTop: political_top - 140
            }, 600);
        }, 1000)
    }else if(_location.split('#')[1]== "今天誰來沛"){
        setTimeout(function () {
            $('.yahooTV_page .allhost').find('.slick-slide .host[data-on="0"]').click();
        }, 1000)
    }else if(_location.split('#')[1]== "鄉民大會"){
        setTimeout(function () {
            $('.yahooTV_page .allhost').find('.slick-slide .host[data-on="1"]').click();
        }, 1000)
    }else if(_location.split('#')[1]== "齊有此理"){
        setTimeout(function () {
            $('.yahooTV_page .allhost').find('.slick-slide .host[data-on="2"]').click();
        }, 1000)
    }else if(_location.split('#')[1]== "央視鬥風向"){
        setTimeout(function () {
            $('.yahooTV_page .allhost').find('.slick-slide .host[data-on="3"]').click();
        }, 1000)
    }else if(_location.split('#')[1]== "風向龍鳳配"){
        setTimeout(function () {
            $('.yahooTV_page .allhost').find('.slick-slide .host[data-on="4"]').click();
        }, 1000)
    }

    /* -------------------------------------------------------------------------------------------------------------------------*/
    /* ----------------slick----------------*/

    //新聞輪播
    $('.news_slick .allnews').slick({
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed:10000,
        responsive: [{
            breakpoint: 768,
            settings: {
                infinite: true,
                slidesToShow: 1,
                rows:2
            }
        }, ]
    });

    //焦點新聞
    $('.focusNews .allnews').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                arrows: false,
                dots: true
            }
        }, ]
    });

    //Yahoo最強聲 index.html
    $('.tv_list.more').slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                arrows: false,
                dots: true
            }
        }, ]
    });

    //候選人最新社群動態
    $('.community .Newactive').slick({
        dots: false,
        slidesToShow: 6.5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3.5,
                infinite: true,
                arrows: false,
                dots: false
            }
        }, ]
    });

    //QRcode
    $('.QRcode .social').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        autoplay: true,
    });

    $('.QRcode .social').on('afterChange', function (event, slick, direction) {
        $(this).find('.box').removeClass('up');
        $(this).find('.slick-slide[data-slick-index=' + direction + '] .box').addClass('up');

    });

    //Yahoo最強聲
    let yahoopage_allhost = $('.yahooTV_page .allhost');
    yahoopage_allhost.slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0',
        arrows: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                focusOnSelect: true
            }
        }, ]
    });

    //多元觀點
    $('.thought .theme').slick({
        dots: false,
        arrows: true,
        slidesToScroll: 1,
    });

    let yahoo_allhost = $('.yahooTV .allhost');

    if (winW <= 768) {
        //Yahoo最強聲
        yahoo_allhost.slick({
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true
        });

        //聲量紅人排行榜
        $('.volume  .con').slick({
            dots: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
        });

        //Yahoo最強聲 (TV節目專區)  兩個名字切換
        $('.yahooTV_page .host').each(function () {
            var _text = $(this).find('.name').text();

            if (_text.replace(/\s/g, "").length > 3) {
                $(this).find('.name').addClass('two');
                $(this).find('.name').html("<span>" + _text.substring(0, 3) + "</span><span>" + _text.substring(4, 7) + "</span>")
            }
        });
    }

    /* -------------------------------------------------------------------------------------------------------------------------*/
    /* ----字數控制---------------*/
    $('.comments li a').each(function () {
        var _text = $(this).text();

        if (_text.length > 15) {
            var text = _text.substring(0, 14) + "...";
            $(this).text(text);
        }
    });

    $('.hotNews li a').each(function () {
        var _text = $(this).text();

        if (_text.length > 15) {
            var text = _text.substring(0, 14) + "...";
            $(this).text(text);
        }
    });

    $('.hotkeywords li a').each(function () {
        var _text = $(this).text();

        if (_text.length > 6) {
            var text = _text.substring(0, 5) + "...";
            $(this).text(text);
        }
    });


    // Yahoo最強聲 (TV節目專區)  兩個名字切換
    $('.yahooTV .host').each(function () {
        var _text = $(this).find('.name').text().replace(/(^\s*)|(\s*$)/g, "");



        if (_text.length > 3) {

            $(this).find('.name').addClass('two');
            $(this).find('.name').html("<span>" + _text.substring(0, 3) + "</span><span>" + _text.substring(4, 7) + "</span>")
        }
    });

    $('.thought .theme  p').each(function () {
        var _text = $(this).text();

        if (_text.length > 10) {
            var text = _text.substring(0, 12) + "...";
            $(this).text(text);
        }
    });


  

    /* -------------------------------------------------------------------------------------------------------------------------*/
    /* ----其他按鈕原件--------------------------------*/


    /* ----yahooTV(index.html)-主持人切換--------------------------------*/

    yahoo_allhost.find('.host').click(function () {
        $('.yahooTV .host').removeClass('active');
        $(this).addClass('active');
    })

    yahoo_allhost.find('.slick-dots li').click(function () {
        let hostindex = yahoo_allhost.find('.slick-dots li.slick-active').index();
        yahooActive(hostindex);
    })

    yahoo_allhost.on('afterChange', function (event, slick, direction) {
        yahooActive(direction);
    });

    yahoo_allhost.on('swipe', function (event, slick, direction) {
        yahooActive(slick.currentSlide);
    });

    function yahooActive(now) {
        yahoo_allhost.find('.host').removeClass('active');
        yahoo_allhost.find('.slick-slide[data-slick-index=' + now + '] .host').addClass('active');
    }

    /* ----yahooTV(yahooTV.html)-主持人切換--------------------------------*/

    yahoopage_allhost.find('.host').click(function () {
        yahoopage_allhost.find('.host').removeClass('active');
        $(this).addClass('active');

        let _tvpage = $(this).data("on");
        let _tvoffset = $('.tvshow.page[data-page=' + _tvpage + ']').offset().top;

        $body.animate({
            scrollTop: _tvoffset - headerH - 20
        }, 600);
    })

    yahoopage_allhost.on('afterChange', function (event, slick, direction) {
        yahoopageActive(direction);
    });

    yahoopage_allhost.on('swipe', function (event, slick, direction) {
        yahoopageActive(slick.currentSlide);
    });

    yahoopage_allhost.find('.slick-dots li').click(function () {
        let hostindex = yahoopage_allhost.find('.slick-dots li.slick-active').index();
        yahoopageActive(hostindex);
    })

    function yahoopageActive(now) {
        yahoopage_allhost.find('.host').removeClass('active');
        yahoopage_allhost.find('.slick-slide[data-slick-index=' + now + '] .host').addClass('active');

        // let _tvpage = yahoopage_allhost.find('.slick-slide[data-slick-index=' + now + '] .host').data("on");
        // let _tvoffset = $('.tvshow.page[data-page=' + _tvpage + ']').offset().top;

        // $body.animate({
        //     scrollTop: _tvoffset - headerH - 20
        // }, 600);
    }



    /* ----yahooTV-更多節目-節目簡介-切換------------------------------*/

    $('.moreTV .title li').click(function () {
        $(this).parents('.moreTV').find('li').removeClass('active');
        $(this).addClass('active');

        let _page = $(this).data('list');

        $(this).parents('.moreTV').find('.tv_list').removeClass('active');
        $(this).parents('.moreTV').find('.tv_list.' + _page + '').addClass('active');
    })

    /* ----多元觀點切換--------------------------------*/

    $('.thought .other .com').click(function () {
        $('.thought .other .com').removeClass('active');

        let $newtit = $(this).data('newtit');
        let $newtxt = $(this).data('newtxt');

        let $newmain = $(this).parents('.extend').find('.news');
        $newmain.find('.tit').text($newtit);
        $newmain.find('.newsbox').text($newtxt);

        $(this).addClass('active');
    })

    /* ----心情點選--------------------------------*/

    $('.Feeling .icon').click(function () {
        // $('.Feeling .icon').removeClass('click');

        let _toggle = $(this).attr('toggle');

        if (_toggle == "0") {
            $(this).addClass('click');
            $(this).attr('toggle', '1');
        } else {
            $(this).removeClass('click');
            $(this).attr('toggle', '0');
        }
    })

    /* ----聲量紅人排行榜-看更多-------------------------------*/

    $('.volume .morebtn').click(function () {

        if (winW >= 768) {

            let _toggle = $(this).attr('toggle');
            let $v_top = $(this).parents('.volume').offset().top;

            if (_toggle == "0") {
                $(this).prev().removeClass('close');
                $(this).attr('toggle', '1');
                $(this).text("收合")
            } else {
                $(this).prev().addClass('close');
                $(this).attr('toggle', '0');
                $(this).text("看更多")

                $body.animate({
                    scrollTop: $v_top - headerH - 10
                }, 600);

            }
        }
    })

    /* ----多元觀點-看更多-------------------------------*/

    $('.thought .morebtn').click(function () {

        let _toggle = $(this).attr('toggle');

        if (_toggle == "0") {
            $(this).prev().css({
                'overflow': 'unset',
                '-webkit-line-clamp': '10'
            });
            $(this).attr('toggle', '1');
            $(this).text("收合")
        } else {
            $(this).prev().css({
                'overflow': 'hidden',
                '-webkit-line-clamp': '4'
            });
            $(this).attr('toggle', '0');
            $(this).text("看更多")
        }
    })

    /* ----候選人詳細資料-看更多-------------------------------*/

    $('.myprofile .morebtn').click(function () {

        let _toggle = $(this).attr('toggle');

        if (_toggle == "0") {
            $(this).prev().css({
                'overflow': 'unset',
                '-webkit-line-clamp': '10'
            });
            $(this).attr('toggle', '1');
            $(this).text("收合")
        } else {
            $(this).prev().css({
                'overflow': 'hidden',
                '-webkit-line-clamp': '1'
            });
            $(this).attr('toggle', '0');
            $(this).text("看更多")
        }
    })

    /* ----文章區塊-看更多-------------------------------*/

    $('.electionNews .con .list ').each(function () {
       console.log($(this).length);
    });

    $('.electionNews  .morebtn').click(function () {

        $(this).parents('.container').find('.con .list').removeClass('short');

        $(this).css({
            'display': 'none',
        })


    })

    /* ----影音點擊--------------------------------*/

    $('.yahooTV_page .vid').click(function () {

        let $vtit = $(this).find('p').text();
        let $vtxt = $(this).find('.txt').text();
        let $tvname = $(this).find('span .tvname').text();
        let $view = $(this).find('span .view').text();
        let $vmain = $(this).parents('.show').find('.video');

        let $vid = $(this).data('vid');
        let $yahoo_iframe = "https://tw.tv.yahoo.com/embed/video/";
        let $newvid = $yahoo_iframe + $vid.split("https://tw.tv.yahoo.com/", "2")[1];

        $vmain.find('.main_vid iframe').attr('src', $newvid);
        $vmain.find('.vidtit p').text($vtit);
        $vmain.find('.vidtit font').text($tvname + "．" + $view + "次觀看" + "．1 個月前");
        $vmain.find('.vidtit span').text($vtxt);
        $vmain.find('.vidtit p').text($vtit);
    })

    /* ----影音點擊--------------------------------*/

    $('.yahooTV .vid').click(function () {

        let $vtit = $(this).find('p').text();
        let $vtxt = $(this).find('.txt').text();
        let $view = $(this).find('span .view').text();
        let $vmain = $(this).parents('.tvpage').find('.host_TV');

        let $vid = $(this).data('vid');
        let $yahoo_iframe = "https://tw.tv.yahoo.com/embed/video/";

        let $newvid = $yahoo_iframe + $vid.split("https://tw.tv.yahoo.com/", "2")[1];

        $vmain.find('.video iframe').attr('src', $newvid);
        $vmain.find('.videotxt p').text($vtit);
        $vmain.find('.videotxt .view').text($view + "次觀看" + "．1 個月前");
        $vmain.find('.videotxt .content').text($vtxt);

    })

    /* ----文章頁-心情互動-點選-----------------------------*/

    $('.artibox .mood_icon li').click(function () {

        let _toggle = $(this).parent().attr('toggle');
        let _mood = $(this).index() + 1;

        if (_toggle == "0") {
            $(this).addClass('active');
            $(this).parents('.mymood').find('.material li:nth-child(' + _mood + ')').addClass('active');
            $(this).parent().attr('toggle', '1');
        } else {
            return false;
        }
    })

    /* ----文章頁-心情互動-看結果-----------------------------*/

    $('.artibox .result').click(function () {

        let _toggle = $(this).prev().attr('toggle');

        if (_toggle == "0") {
            return false;
        } else {
            $(this).slideUp(0);
            $(this).parent().find('.material').slideDown(200, "linear");

            $('.material li').each(function () {
                var $per = $(this).find('.score .per span').text();
                $(this).find('.strip').css('height', '' + 260 / 100 * $per + 'px');
            })
        }
    })


    /* ----頁面閒置-----------------------------*/

















    /* ----KV-車車-------------------------------*/

    let _header = $('header').offset().top;

    function headerfix() {
        let _scroll = $win.scrollTop();

        if (_scroll >= _header) {
            $('header').addClass('fixed')
        } else {
            $('header').removeClass('fixed')
        }
    }

    $win.scroll(headerfix);

    /* ----KV車車停止-- tour出現-----------------------------*/
    let $index_wapper = $('.wrapper.space1');



    // setTimeout(function() {
    //     $index_wapper.parents('html').addClass('tour');
    //     $index_wapper.parent('body').find('.moveCar .thecar').addClass('stop');
    //     $index_wapper.parent('body').find('.moveCar').addClass('tour_cover');
    //     $index_wapper.parent('body').find('header').addClass('tour_cover');
    //     $index_wapper.addClass('tour_cover')
    //     $index_wapper.find('.allmayor .choose').addClass('stop');
    // }, 600)


    $('.step .step_btn').click(function(){
        let $step = $(this).data('step');

        if($step == 1){
            let $stepTop =  $('.step._2').offset().top;

            $body.animate({
                scrollTop: $stepTop - headerH - 20
            }, 600);

        }else{
            $index_wapper.parents('html').removeClass('tour');
            $index_wapper.parent('body').find('.moveCar .thecar').removeClass('stop');
            $index_wapper.parent('body').find('.moveCar').removeClass('tour_cover');
            $index_wapper.parent('body').find('header').removeClass('tour_cover');
            $index_wapper.removeClass('tour_cover')
            $index_wapper.find('.allmayor .choose').removeClass('stop');

            $body.animate({
                scrollTop: 0
            }, 600);
        }

    })









    // 主選單-------------------------------------*/


    // function navde() {
    //     $('.burger').attr('toggle', '0');
    //     $('.burger').removeClass('isclick');

    //     if (winW <= 768) {
    //         $('header').find('.box2').hide();
    //     } else {
    //         $('header').find('.box2').show();
    //     }
    // }

    function navfunc() {
        if (winW <= 768) {
            var navopen = $('.burger').attr('toggle');

            console.log(navopen);
            if (navopen == 0) {
                $('header').find('.navbox').slideDown();
                // 20200521
                $('body').css({
                    'overflow-y': 'hidden',
                    // 'position': 'fixed',
                    'height': '100%'
                });
                $('.burger').attr('toggle', '1');
                $('.burger .xx').addClass('isclick');
                $('.burger .de').removeClass('isclick');

                $body.css({
                    'overflow-y': 'hidden',
                })

            } else if (navopen == 1) {
                $('header').find('.navbox').slideUp();
                // 20200521
                $('body').css({
                    'overflow-y': '',
                    // 'position': '',
                    'height': ''
                });
                $('.burger').attr('toggle', '0');

                $('.burger .de').addClass('isclick');
                $('.burger .xx').removeClass('isclick');

                $body.css({
                    'overflow-y': 'auto',
                })
            }
        } else {
            $('header').find('.navbox').show();
        }
    }

    $('.burger').click(navfunc);

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


            $body.addClass('overflow');


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

            $body.removeClass('overflow');
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