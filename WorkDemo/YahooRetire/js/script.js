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

    $('.retirebuy').find('.slide').not('.slick-initialized').slick({
        dots: true
    });


    $('.handpicked2').find('.list').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });


    $('.retirement').find('.group').slick({
        arrows: true,
        dots: true,
        // autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    $('.relatedvid').find('.vidslide').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2
    });

    if (winW <= 768) {
        $('.healthnews .sectitle p').text("更多退休新聞");
    }


    /* 白皮書 iframe-------------------------------------*/


    var $book = $('.wrapper.space1.book_page');

    var on = location.href.split("/", 9);

    console.log(on[3]);

    if (on[3] == "book.html") {
        $body.css({
            'overflow-y': 'hidden'
        });

        // $book.height("90vh");
    }



    /* 解釋懶人包 / 糖糖危機  /  減糖大作戰  MB按鈕切換-------------------------------------*/

    function healthcareFunc() {

        if (winW <= 768) {

            $('.healthcare').find('.topic').eq(0).show();
            $('.healthcare').find('.tabbox').find('.tab').eq(0).addClass('select');

            $('.healthcare').find('.tabbox').find('.tab').click(function() {
                var ind = $(this).index();

                $('.healthcare').find('.topic').hide();
                $('.healthcare').find('.tabbox').find('.tab').removeClass('select');

                $('.healthcare').find('.topic').eq(ind).show();
                $('.healthcare').find('.tabbox').find('.tab').eq(ind).addClass('select');
            })

        } else {
            $('.healthcare').find('.topic').show();
        }

    }
    healthcareFunc();




    healthcareFunc2();


    function healthcareFunc2() {

        if (winW <= 768) {

            $('.healthcare3').find('.topic').eq(0).show();
            $('.healthcare3').find('.tabbox').find('.tab').eq(0).addClass('select');

            $('.healthcare3').find('.tabbox').find('.tab').click(function() {
                var ind = $(this).index();

                $('.healthcare3').find('.topic').hide();
                $('.healthcare3').find('.tabbox').find('.tab').removeClass('select');

                $('.healthcare3').find('.topic').eq(ind).show();
                $('.healthcare3').find('.tabbox').find('.tab').eq(ind).addClass('select');
            })

        } else {
            $('.healthcare3').find('.topic').show();
        }

    }
    healthcareFunc2();

    /* 退休計算機 ----下拉選單---------------------------------*/

    var $cal_form = $('.calculate.count').find('.worklist');

    $cal_form.on('click', function() {

        var $toggle = $(this).find('ul').attr('toggle');

        if ($toggle == 0) {

            $(this).find('ul').slideDown();
            $(this).find('ul').attr('toggle', '1');

        } else {
            $(this).find('ul').slideUp();
            $(this).find('ul').attr('toggle', '0');
        }

    });

    $cal_form.find('ul li').on('click', function() {

        var $work = $(this).text();
        var $now = $(this).parent().parent();
        $now.find('summary').text($work);
        $cal_form.find('ul').slideUp();
        $cal_form.find('ul').attr('toggle', '0');
        return false;

    });

    /* 100種退休長相_tab按鈕 -------------------------------------*/

    var $healthcare2 = $('.healthcare2');
    var $tab = $('.healthcare2 .tabbox .tab');


    $tab.on('click', function() {

        var list = $(this).data('list');

        $tab.removeClass('select');
        $(this).addClass('select');

        $healthcare2.find('.topic').removeClass('on');

        $healthcare2.find('.topic.' + list + '').addClass('on');

    });


    /* 退休壓力指數大調查----------------------------------*/

    var $qa_group = $('.pressure .start .qa_group');
    var $option = $qa_group.find('.question').find('.option');
    var $next_btn = $qa_group.find('.next').find('.btn');
    var $finish = $qa_group.find('.finish');


    /* 退休壓力指數大調查 ---點選下一頁  完成  頁面滑動----------------------------------*/

    function next_top($next_t) {

        if (winW <= 768) {
            $body.animate({
                scrollTop: $next_t - 90
            }, 600);
        } else {

            $body.animate({
                scrollTop: $next_t - 120
            }, 600);
        }
    }

    /* 退休壓力指數大調查 ---下一頁按鈕----------------------------------*/

    $next_btn.on('click', function() {

        var $next = $(this).closest($qa_group).next().offset().top;
        var _scroll = $win.scrollTop();

        next_top($next);

    });

    /* 退休壓力指數大調查 ---別人怎麼選進度條----------------------------------*/

    function change($go) {
        var pWidth = [];
        var $option_per = $go.find('label').data('ans');
        var $now_option = $go.closest($qa_group).find('.next').find('.option');
        $go.closest($qa_group).find('.next').find('.option:eq(' + $option_per + ')').addClass('on');
        var $percent = $now_option.find('span');
        var $color_width = $now_option.find('.color');

        $percent.each(
            function(i, obj) {
                var t = $(obj).text();
                pWidth.push(t);
            }
        );
        $color_width.each(
            function(i, obj) {
                $(this).width(pWidth[i]);
            }
        );
    }

    /* 退休壓力指數大調查 ---選擇後跳出說明----------------------------------*/

    $option.on('click', function() {

        var manyck = [];
        var $choose = $(this).parent().data('choose');
        var $large = $(this).parent().data('large');
        var $option_per = $(this).find('label').data('ans');
        var $toggle = $(this).parent().attr('toggle');
        var $checked = $(this).find('input').prop('checked');

        if ($choose == "only") { //單選區塊

            if ($toggle == "0") {

                $(this).closest($qa_group).find('.next').show();
                var $next_top = $(this).closest($qa_group).find('.next').offset().top;
                var $this = $(this);
                change($this);

                $(this).parent().attr('toggle', '1');
                next_top($next_top);

            } else {
                $(this).parent().find('input').attr('disabled', 'disabled');
            }

        } else if ($choose == "all") { //複選區塊

            if ($toggle == "0") {

                if ($checked == true) {

                    $(this).find('input').prop('checked', false);
                    $(this).closest($qa_group).find('.next').find('.option:eq(' + $option_per + ')').removeClass('on');
                    return false;

                } else {

                    $(this).find('input').prop('checked', true);

                    var $this = $(this);
                    change($this);

                    //複選 最多選取幾項
                    $(this).parent().find('.option').each(
                        function(i, obj) {
                            var c = $(obj).find('input').prop('checked');
                            manyck.push(c);
                        }
                    );

                    var $input = manyck.filter(function(item, index, array) {
                        return item == true;
                    });

                    var $length = $input.length;

                    if ($large < $length) {

                        $(this).find('input').prop('checked', false);
                        $(this).closest($qa_group).find('.next').find('.option:eq(' + $option_per + ')').removeClass('on');
                    }

                    return false;
                }
            }
        }
    });

    /* 退休壓力指數大調查 ---完成按鈕----------------------------------*/

    $finish.on('click', function() {
        var $next_top2 = $(this).offset().top;
        $(this).prev().find('.optionguoup').attr('toggle', '1');
        $(this).prev().find('input').attr('disabled', 'disabled');
        $(this).next().show();
        $(this).hide();

        next_top($next_top2);
    });

    /* 退休壓力指數大調查 ---目前頁數進度條----------------------------------*/

    nowpage();

    function nowpage() {

        var pnumber = [];
        var $page = $('.pressure .start .main');

        if (winW <= 768) {
            var $color = $('.pressure .start .now_page .page._m .color');
        } else {
            var $color = $('.pressure .start .now_page .page._pc .color');
        }

        $page.each(
            function(i, obj) {
                var p = $(obj).data('page');
                pnumber.push(p);
            }
        );

        $color.each(
            function(i, obj) {
                var $long = (100 / 4) * pnumber[i] + '%';
                $(this).width($long);
            }
        );
    }

    /* 退休壓力指數大調查 ---結果_退休型態分數----------------------------------*/

    var $score_pic = $('.pressure .select_pic input');
    var $end_pic = $('.pressure .end .left .end_pic');


    $score_pic.click(function() {
        getscore_pic();
    });


    function getscore_pic() {

        var method1 = $("input[name='confidence1']:checked").attr('value');
        var method2 = $("input[name='confidence2']:checked").attr('value');
        var method3 = $("input[name='confidence3']:checked").attr('value');

        if (method1 == "3") {
            if (winW <= 768) {
                $end_pic.attr('src', 'images/m/pressure_end3.png');
            } else {
                $end_pic.attr('src', 'images/pressure_end3.png');
            }

            console.log("3");

        } else {

            if (method2 == "3") {

                if (method3 == "3") {

                    if (winW <= 768) {
                        $end_pic.attr('src', 'images/m/pressure_end2.png');
                    } else {
                        $end_pic.attr('src', 'images/pressure_end2.png');
                    }
                    console.log("2");
                } else {

                    if (winW <= 768) {
                        $end_pic.attr('src', 'images/m/pressure_end1.png');
                    } else {
                        $end_pic.attr('src', 'images/pressure_end1.png');
                    }
                    console.log("1");

                }

            } else {

                if (method3 == "3") {

                    if (winW <= 768) {
                        $end_pic.attr('src', 'images/m/pressure_end2.png');
                    } else {
                        $end_pic.attr('src', 'images/pressure_end2.png');
                    }
                    console.log("2");

                } else {

                    if (winW <= 768) {
                        $end_pic.attr('src', 'images/m/pressure_end4.png');
                    } else {
                        $end_pic.attr('src', 'images/pressure_end4.png');
                    }

                    console.log("4");

                }

            }

        }

    }


    // var $score = $font.text();


    // if ($score >= 80) {
    //     if (winW <= 768) {
    //         $end_pic.attr('src', 'images/m/pressure_end2.png');
    //     } else {
    //         $end_pic.attr('src', 'images/pressure_end2.png');
    //     }
    // }
    // if ($score <= 60) {
    //     if (winW <= 768) {
    //         $end_pic.attr('src', 'images/m/pressure_end3.png');
    //     } else {
    //         $end_pic.attr('src', 'images/pressure_end3.png');
    //     }

    //     $font.css('color', '#ff3140');

    // } else {
    //     if (winW <= 768) {
    //         $end_pic.attr('src', 'images/m/pressure_end1.png');
    //     } else {
    //         $end_pic.attr('src', 'images/pressure_end1.png');
    //     }
    // }


    /* 退休壓力指數大調查 ---網頁截圖----------------------------------*/

    var $print = $('.pressure .end .down .btn.print');

    $print.on('click', function() {

        $('html,body').animate({ 'scrollTop': 0 });

        setTimeout(function() {
            html2canvas(document.getElementById("testpressure"), {
                onrendered: function(canvas) {
                    // var tempcanvas = document.createElement('canvas');
                    // tempcanvas.width = 883;
                    // tempcanvas.height = 863;
                    // var context = tempcanvas.getContext('2d');
                    // context.drawImage(canvas, 883, 0, 883, 863, 0, 0, 883, 863);
                    // context.drawImage(canvas,465,40,465,524,0,0,465,524);
                    document.body.appendChild(canvas);
                    var link = document.createElement("a");
                    link.href = canvas.toDataURL('image/png');
                    link.download = '我的退休壓力指數.png';
                    link.click();
                }
            });
        }, 600)
    });


    /* 檢測你的壓力指數 ----出槌後動態---------------------------------*/

    var $right = $('.detect .right');
    var $left = $('.detect .left');
    var $down = $('.detect .down');
    var $hammer = $('.detect .hammer');
    var $hammer_btn = $('.detect .begin .go_btn');
    var $hammer_bg = $hammer.find('.light');
    var $play = $('.detect #play');
    var $point = $('.detect .point span').text();
    var $light_height = (100 - $point) + "%";

    $hammer_btn.on('click', function() {

        var point = Math.round(Math.random() * 100);
        var txt = '工作繁忙的你，該多注意心理健康！<br>忙碌之餘也要記得與生活休閒取得平衡喔！';
        $('.detect .point').html('<span>' + point + '</span><img src="images/pressure_number.png" alt=""><br>' + txt + '</p>');


        $light_height = (100 - point) + "%";

        $hammer.find('.peo').attr('src', 'images/hammer/peo_hit.png');
        $hammer_bg.attr('src', 'images/hammer/arcade_hit2.png');

        setTimeout(function() {
            $hammer_bg.attr('src', 'images/hammer/arcade.png');
            $hammer.find('.before').css('height', '100%');
        }, 500);

        if ($light_height >= '70%') {
            speed(1000);
        } else if ($light_height <= '35%') {
            speed(2000);
        } else {
            speed(1500);
        }

    });

    $play.on('click', function() {
        next_time();
    });

    /* 檢測你的壓力指數 ----分數表高度/變換右邊分數背景---------------------------------*/

    function speed(run) {

        $hammer.find('.before').animate({ height: $light_height }, {
            duration: run,
            step: function(now, fx) {
                $(this).css('height', now);
            }
        }, 10);

        setTimeout(function() {

            $right.find('.tit.before.on').removeClass('on');
            $right.find('.tit.after').addClass('on');
            $hammer_btn.hide();
            $down.show();
            if (winW <= 768) {
                $hammer.find('.peo').attr('src', 'images/hammer/peo.png');
                $left.addClass('small');
            }
        }, 1600);

    }

    function next_time() {

        var $btn_m = $('.detect .begin .go_btn._m');

        setTimeout(function() {

            $hammer_bg.attr('src', 'images/hammer/arcade2.gif');

            $right.find('.tit.before').addClass('on');
            $right.find('.tit.after.on').removeClass('on');
            $hammer_btn.show();
            $hammer.find('.before').css('height', '100%');
            $btn_m.hide();
            $down.hide();
            $hammer.find('.peo').attr('src', 'images/hammer/peo.gif');
            if (winW <= 768) {
                $hammer_btn.hide();
                $btn_m.show();
                $left.removeClass('small');
            }
        }, 600);

    }


    /* 精選內容 ----字數控制---------------------------------*/

    var len = 20; // 超過20個字以"..."取代
    var len2 = 22; // 超過25個字以"..."取代


    $('.handpicked li').each(function(i) {
        if ($(this).find('.txt').text().length > len) {
            var text = $(this).find('.txt').text().substring(0, len - 1) + "...";
            $(this).find('.txt').text(text);
        }
    });        // $(this).find('.txt').text($(this).text());
    

    $('.healthcare  li').each(function(i) {
        if (winW <= 768) {
            if ($(this).find('p').text().length > len) {
                // $(this).find('.txt').text($(this).text());
                var text = $(this).find('p').text().substring(0, len - 1) + "...";
                $(this).find('p').text(text);
            }
        }
    });


    $('.tvnews li').each(function(i) {
        if ($(this).find('.txt').text().length > len2) {
            var text = $(this).find('.txt').text().substring(0, len2 - 1) + "...";
            $(this).find('.txt').text(text);
        }
    });   



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


    var lbOpen = function(lb_data) {

        var lbAni = new TimelineMax();
        lbAni.to($('.lb[data-lb="' + lb_data + '"]'), .5, { css: { zIndex: 10 } }, '-=.5')
            .to($('.lb[data-lb="' + lb_data + '"]'), .5, { autoAlpha: 1, ease: Linear.easeNone });
    }

    var lbClose = function() {

        var lbCloseAni = new TimelineMax();
        lbCloseAni.to($('.lb'), .5, { autoAlpha: 0, ease: Linear.easeNone })
            .to($('.lb'), .5, { css: { zIndex: -1 } });
    }

    // lbOpen(lbname);
    $('.libtn').click(function() {
        var lbname = $(this).data('lb');

        lbOpen(lbname);

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

            // iframe_resize();

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
        speed: 3000,
        autoplay: true,
        responsive: [{
            breakpoint: 768,
            settings: {

                // centerPadding: '40px'
                arrows: false,
                centerMode: true,
                // centerPadding: '40px',

            }
        }]

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