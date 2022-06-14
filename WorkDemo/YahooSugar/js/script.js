var script = function() {

    var $body = $('html,body');
    var winH = $(window).height();
    var winW = $(window).width();
    // var docH  = $(document).height();
    var $win = $(window);
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var conH = $('.wrapper').height();
    var headerH = $('.myheader2').height();



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





    /* slick
    -----------------------------------------------------------------------------*/

    function slickfunc() {

        $('.healthbuy').find('.slide').not('.slick-initialized').slick({
            dots: true
        });


        $('.lazycard').find('.slide').not('.slick-initialized').slick({
            dots: true
        })

    }


    $('.healthbuy').find('.slide').not('.slick-initialized').slick({
        dots: true
    });

    $('.relatedvid').find('.vidslide').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });

    /* 含糖計算機_職業類型 -------------------------------------*/

    var $cal_form = $('.calculate.count').find('.worklist');

    $cal_form.on('click', function() {

        var $toggle = $cal_form.find('.work').attr('toggle');
        if ($toggle == 0) {
            $cal_form.find('.work').slideDown();
            $cal_form.find('.work').attr('toggle', '1');

        } else {
            $cal_form.find('.work').slideUp();
            $cal_form.find('.work').attr('toggle', '0');
        }

    });

    $cal_form.find('.work li').on('click', function() {

        var $work = $(this).text();
        $cal_form.find('summary').text($work);
        $cal_form.find('.work').slideUp();
        $cal_form.find('.work').attr('toggle', '0');
        return false;

    });

    /* 含糖計算機_選擇食物 -------------------------------------*/

    var $category = $('.calculate').find('.category');

    // de
    function calde() {
        $category.find('.item').removeClass('open');
        $category.find('.item').find('.list').slideUp();
        $category.find('.item').find('.list').find('li').removeClass('select');
    }

    calde();

    // func
    $category.find('.item').each(function() {
        $(this).find('.sub').click(function() {
            $(this).closest('.item').toggleClass('open');
            if ($(this).closest('.item').hasClass('open')) {
                $(this).closest('.item').find('.list').slideDown();
            } else {
                $(this).closest('.item').find('.list').slideUp();
            }
        })
    })

    $category.find('.item').find('.list').find('li').click(function() {
        $(this).toggleClass('select');
    })

    /* 含糖計算機_燒杯的容量_根據公克改變顏色高度 -------------------------------------*/
    var $cup_1 = $('.calculate.result .cup_1');
    var $cup_2 = $('.calculate.result .cup_2');

    var $cup1_g = $cup_1.find('.tit_g font').text();
    var $cup2_g = $cup_2.find('.tit_g font').text();

    var $normal_1 = $cup_1.find('.n1 font').text();
    var $normal_2 = $cup_2.find('.n2 font').text();

    var height1 = (100 / 100) * $cup1_g + '%';
    var height2 = (100 / 100) * $cup2_g + '%';

    cup_txt();

    if ($cup1_g > $normal_1) {

        $cup_1.find('.per').css({ 'color': '#e02828' });
        $cup_1.find('.color').css({ 'background-color': '#e02828', 'height': height1 });
        $cup_1.find('.blowup').attr('src', 'images/cup_top2.png')

        if ($cup1_g > "50") {
            $cup_1.find('.blowup').attr('src', 'images/cup_top2.png')
            $cup_1.find('.full').css({ 'opacity': '1' });
        }

    } else {
        $cup_1.find('.per').css({ 'color': '#3ad25e' });
        $cup_1.find('.color').css({ 'background-color': '#3ad25e', 'height': height1 });
        $cup_1.find('.blowup').attr('src', 'images/cup_top1.png')
    }

    if ($cup2_g > $normal_2) {

        $cup_2.find('.per').css({ 'color': '#e02828' });
        $cup_2.find('.color').css({ 'background-color': '#e02828', 'height': height2 });
        $cup_2.find('.blowup').attr('src', 'images/cup_top2.png')

        if ($cup2_g > "50") {
            $cup_2.find('.blowup').attr('src', 'images/cup_top2.png')
            $cup_2.find('.full').css({ 'opacity': '1' });
        }

    } else {
        $cup_2.find('.per').css({ 'color': '#3ad25e' });
        $cup_2.find('.color').css({ 'background-color': '#3ad25e', 'height': height2 });
        $cup_2.find('.blowup').attr('src', 'images/cup_top1.png')
    }

   /* 含糖計算機_燒杯的容量_根據公克改變醫生對話框 -------------------------------------*/

    function cup_txt() {

        // var $br = '+ '<br>' +";
        var $cal_txt = $('.calculate.result .say .txt');

        if ($cup1_g < $normal_1 && $cup2_g < $normal_2) {
            $cal_txt.html('今日安全過關！');
            $cal_txt.css({ 'top': '32%' });

        } else if ($cup1_g > $normal_1 && $cup2_g < $normal_2) {
            $cal_txt.html('小心！<br/>醣吃過量也會胖喔！');
            $cal_txt.css({ 'top': '22%' });


        } else if ($cup1_g < $normal_1 && $cup2_g > $normal_2) {
            $cal_txt.html('你踏入甜蜜陷阱了！<br/>快醒醒！');
            $cal_txt.css({ 'top': '25%' });

        } else if ($cup1_g > $normal_1 && $cup2_g > $normal_2) {
            $cal_txt.html('這樣不行喔！<br/>你的身體在抗議了！');
            $cal_txt.css({ 'top': '22%' });

        }

    }

    function healthcareFunc() {
        
        if(winW<=768){

            $('.healthcare').find('.topic').eq(0).show();
            $('.healthcare').find('.tabbox').find('.tab').eq(0).addClass('select');

            $('.healthcare').find('.tabbox').find('.tab').click(function () {
                var ind = $(this).index();

                $('.healthcare').find('.topic').hide();
                $('.healthcare').find('.tabbox').find('.tab').removeClass('select');

                $('.healthcare').find('.topic').eq(ind).show();
                $('.healthcare').find('.tabbox').find('.tab').eq(ind).addClass('select');                
            })

        }else{
            $('.healthcare').find('.topic').show();
        }

    }
    healthcareFunc();








    /* 下午茶陷阱_看完後覺得_進度條 -------------------------------------*/
    var after = 0;
    var $line = $('.trap .feel .line');
    var $line1 = $('.trap .feel .line_1');
    var $line2 = $('.trap .feel .line_2');
    var $line3 = $('.trap .feel .line_3');

    $line.on('click', function() {

        if (after == 0) {

            $line.addClass('after');
            $(this).addClass('on');

            $line.find('span').css({ 'opacity': '1' })

            var percent1 = $line1.find('font').text();
            var percent2 = $line2.find('font').text();
            var percent3 = $line3.find('font').text();

            $line1.find('.color').css({ 'width': percent1 + '%' });
            $line2.find('.color').css({ 'width': percent2 + '%' });
            $line3.find('.color').css({ 'width': percent3 + '%' });

            after++;

        } else {
            return false;
        }

    });


    /* 血糖小測驗_問題_進度條 -------------------------------------*/

    var $qaline = $('.bloodsugar_text .qabox .line');

    var qaboxper = $qaline.find('font').text();
    var qawidth = (100 / 8) * qaboxper + '%';
    $qaline.find('.color').css({ 'width': qawidth });

    /* 血糖小測驗_問題_最後一題按紐 -------------------------------------*/

    var number = $('.bloodsugar_text .qabox .ques').find('font').text();

    if (number == "8") {

        $('.bloodsugar_text .qabox .next a').text("看結果");

    }



    // 主選單-------------------------------------*/

    function navde() {
        $('.burger').attr('toggle', '0');
        $('.burger').removeClass('isclick');

        if (winW <= 768) {
            $('header').find('.box2').hide();
        } else {
            $('header').find('.box2').show();
        }
    }

    function navfunc() {

        if (winW <= 768) {

            var navopen = $('.burger').attr('toggle');
            if (navopen == 0) {


                $('header').find('.box2').slideDown();


                // 20200521
                $('body').css({
                    'overflow-y': 'hidden',
                    // 'position': 'fixed',
                    'height': '100%'
                });

                $('.burger').attr('toggle', '1');
                $('.burger').addClass('isclick');
            } else if (navopen == 1) {

                $('header').find('.box2').slideUp();

                // 20200521
                $('body').css({
                    'overflow-y': '',
                    // 'position': '',
                    'height': ''
                });

                $('.burger').attr('toggle', '0');
                $('.burger').removeClass('isclick');
            }

        } else {
            $('header').find('.box2').show();
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
    // lbname = 'announcement';

    // TweenMax.set($('.lb'),{autoAlpha:0});
    // TweenMax.set($('.lb') ,{css:{zIndex:-1}});

    var lbOpen = function(lb_data) {

        var lbAni = new TimelineMax();
        lbAni.to($('.lb[data-lb="' + lb_data + '"]'), .5, { css: { zIndex: 10 } }, '-=.5')
            .to($('.lb[data-lb="' + lb_data + '"]'), .5, { autoAlpha: 1, ease: Linear.easeNone });
    }

    var lbClose = function() {

        var lbCloseAni = new TimelineMax();
        lbCloseAni.to($('.lb'), .5, { autoAlpha: 0, ease: Linear.easeNone })
            .to($('.lb'), .5, { css: { zIndex: -1 } });

        // $('#youtuUrl').attr('src' ,'');
    }

    // lbOpen(lbname);
    $('.libtn').click(function() {
        var lbname = $(this).data('lb');


        lbOpen(lbname);
        // $('#youtuUrl').attr('src' ,_vdUrl+ytid+'?autoplay=1&wmode=opaque&showinfo=0');

        return false;
    });


    $('.lb .btn_x').click(lbClose);



    /* resize
    ------------------------------------------------------------*/

    var _resize = function() {

        winW = $win.width();
        winH = $win.height();
        docH = $(document).height();
        _scroll = $(window).scrollTop();
        scrollBottom = $(window).scrollTop() + $(window).height();
        headerH = $('.myheader2').height();


        navde();

        // slickfunc();
        healthcareFunc();


        if (winW >= 768) {
            indfuncpc();
        } else {
            indfuncmobile();
        }




        // if (pagescroll || winW > 1000) scrollthispage();

        // navfix();

    }
    // $win.scroll(scrollPage);
    // _resize();
    $win.resize(function() {

        // _resize();

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
            // if (pagescroll || windowHeight > 768) scrollthispage();

        }

    });



}





$(function() {
    $('header').load('include/header.html');
    // $('header').load('include/header.php');
    $('footer').load('include/footer.html');



    $('.careboard').slick({
        arrows: true,
        dots: true,
        autoplay: true
    });

    $('.boardslide .slide').slick({
        arrows: true,
        dots: true
        // autoplay: true
    });

    setTimeout(function() {
        $('.careboard').css('opacity', '1');
    }, 500)

    var imagesLoaded = loading();
    imagesLoaded.loadfunc();
    imagesLoaded.callback = function() {

        script();

    };

    // script();


    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    // This is needed if the user scrolls down during page load and you want to make sure the page is scrolled to the top once it's fully loaded. This has Cross-browser support.
    window.scrollTo(0, 0);
});