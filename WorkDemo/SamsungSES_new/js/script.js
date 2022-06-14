var script = function () {

    var $body = $('html,body');
    var winH = $(window).height();
    var winW = $(window).width();
    // var docH  = $(document).height();
    var $win = $(window);
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var conH = $('.wrapper').height();
    var headerH = $('.myheader').height();



    $('.backtop2').click(function () {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        }, 600);
    })


    /*排隊數字切換 ---------------------------------------------------*/
    var timer = null;

    //排隊
    if ($("#queueBox").data("d") === "O") {    //開始了
        //var eventDateProvided = '2020-08-13T15:00:00';
        var eventDateProvided = $("input[name=startDate]").val();

        var cstart = $(".allnumber").data("e");

        if (cstart == 'E') { //活動等待結束
            eventDateProvided = $("input[name=queueDate]").val();
        }
        //console.log(eventDateProvided);
        startTimer(eventDateProvided, cstart, 1000);
    } else {   //結束, 暫時沒變化
        $("#endBox").removeClass("hide");
        $("#queueBox").addClass("hide");
        //$(".main-container").addClass("_mask");
        
        console.log('this is over');
    }

    //以下計數
    function startTimer(eventDateProvided, cstart, interval) {

        if (timer !== null) return;
        timer = setInterval(function () {

            var currentTime = new Date();
            var res = dateDiff(currentTime, eventDateProvided);
            console.log(res + ' --> ' + cstart);            

            if (res) { //時間到
                if (cstart == 'S') { //活動開始了
                    stopTimer();
                    //$(".btn_buy").removeClass("hide");
                    startTimer($("input[name=queueDate]").val(), 'E', 5000);

                } else {
                    
                    stopTimer();
                }
            } else {
                if (cstart == 'E') {        
                    $(".changenum").trigger('click');
                    if (interval == 1000) {
                        clearInterval(timer);
                        timer = null;
                        startTimer(eventDateProvided, cstart, 5000);
                    }
                } else {
                    console.log("活動未開始");
                }
            }

        }, interval);
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null
        $("#endBox").removeClass("hide");
        $("#queueBox").addClass("hide");
        //var str = "0000";
        //var i = str.length;
        //while (i--) {
        //    doFlip(i, str[i]);
        //}

    }

    function dateDiff(date1, date2) {
        date1 = new Date(date1.toString().replace(/-/g, "/"));
        date2 = new Date(date2.toString().replace(/-/g, "/"));
        console.log('date1-->' + date1 + ',date2-->' + date2);
        if (Date.parse(date1) - Date.parse(date2) >= 0) {
            return true;
        }
        return false;
    } 

    $('.sec3 .secbox.queue .changenum').click(function () {

        $.post("../api/online.ashx", $("#form1").serialize(), function (data) {

            if (data.status == 1) {
                console.log(data.objectz);

                if (data.objectz.soldout == true) {
                    $("input[name=soldOut").val("Y");
                 
                    stopTimer();
                } else {
                    var new_bignum = data.objectz.soldnum.toString(); //(_bignum - 1).toString();
                    //var  _bignum = new_bignum;
                    var _number = $('.sec3 .secbox.queue .allnumber .number');
                    var _allnum = new_bignum.split("");

                    _number.each(function (i) {
                        var _numdata = $(this).find('.num').attr('data-number');
                        if (_numdata != _allnum[i]) {
                            _number.eq(i).addClass("flip");

                            setTimeout(function () {
                                _number.removeClass("flip");
                            }, 500);
                        }
                    })

                    _allnum.forEach(function (val, index) {
                        _number.find('.num._' + (index + 1) + ' img').attr('src', $("input[name=hpath]").val() + val + '.png');
                        console.log($("input[name=hpath]").val() + val + '.png');
                    });

                    setTimeout(function () {
                        _allnum.forEach(function (val, index) {
                            _number.find('.num._' + (index + 1) + '').attr('data-number', val);
                        });
                    }, 500);

                }

            }
        }, "json");


    })

    /* header fix ---------------------------------------------------*/

    var _topH = $('#static_header_gnb').outerHeight(true);

    function headerfix() {
        var _scroll = $win.scrollTop();
        var _scrollmax = _scroll - winH;

        if (_scroll >= _topH) {
            $('.myheader').addClass('fixed');
        } else {
            $('.myheader').removeClass('fixed');
        }

        setTimeout(function () {
            var bgmove1 = new TimelineMax();
                // bgmove1.to($('.wrapper .bg .all'), .1, {css: {transform: "translateY(-" + _scroll + "px)",}});

            if( _scroll <=  _scrollmax){
                bgmove1.to($('.wrapper .bg .all'), .1, {css: {transform: "translateY(-" + _scroll + "px)",}});
            }else{
                bgmove1.to($('.wrapper .bg .all'), .1, {css: {transform: "translateY(-" + _scrollmax + "px)",}});
            }
        }, 200)

        // console.log(_scrollmax);
        // console.log(_scroll);
    }
    $win.scroll(headerfix);


    /* 選單
    ------------------------------------------------------------*/

    // 重設
    function navde() {
        $('.burger').attr('toggle', '0');
        $('.burger').removeClass('isclick');

        $('.mynav').css('height', '');

        $('body').css({
            'overflow-y': '',
            'position': '',
            'height': ''
        });

        $('html').removeClass('overflow');

        if (winW <= 768) {
            $('.mynav').hide();
        } else {
            $('.mynav').show();
        }
    }
    navde();

    // 主選單
    function navfunc() {
        var navopen = $('.burger').attr('toggle');
        if (navopen == 0) {

            // $('.nav').css('height','100vh');
            $('.mynav').slideDown(50);

            $('body').css({
                'height': '100%',
                'overflow': 'hidden'
            });

            $('html').addClass('overflow');

            $('.burger').attr('toggle', '1');
            $('.burger').addClass('isclick');

            $('.myheader').css({
                'background-color': '#fff',
                'height': '100%'
            });


        } else if (navopen == 1) {

            $('.mynav').css('height', '');
            $('.mynav').slideUp(0);

            $('body').css({
                'overflow-y': '',
                // 'position': '',
                'height': ''
            });

            $('html').removeClass('overflow');

            $('.burger').attr('toggle', '0');
            $('.burger').removeClass('isclick');

            $('.myheader').css({
                'background-color': 'rgba(255,255,255,0.85)',
                'height': ''
            });

        }
    }
    $('.burger').click(navfunc);




    /* page nav
    ------------------------------------------------------------*/

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
        pageName = ['kv', 'ses-sp', 'pick-up', 'login-gift', 'other-svc', 'trade-in', 'pop-up-store', 'opening', 'store-event', 'moreinfo', 'moreinfo'];



    var _thispagescroll = pageName.indexOf(hash);




    // /* nav scroll --------------------------------------------*/

    /* page scroll */
    var thispage = 0;
    var pagescroll = true;
    var pageT = [],
        $sec = $('.sec'),
        $main = $('.wrapper'),
        ah = $main.outerHeight(true);

    var hash = location.hash;

    var $navbtn = $('.navbtn');


    var pageReset = function () {
        pageT = [];
        winW = $win.width();
        ah = $main.outerHeight(true);
        $sec.each(
            function (i, obj) {
                var t = $(obj).offset().top;
                pageT.push(t);
                if (i == $sec.length - 1) {
                    pageT.push(ah);
                }
            }
        );

    }

    var menuselect = function () {
        $navbtn.removeClass('select');

        pageReset();

        $('.navbtn[data-page="' + thispage + '"]').addClass('select');


        $('.myheader').css({
            'background-color': 'rgba(255,255,255,0.85)',
            'height': ''
        });


    }

    var menuscroll = function (n) {
        var _pos;
        thispage = n;

        pageReset();

        TweenMax.to('body,html', .8, {
            scrollTop: pageT[thispage] - headerH - 50,
            ease: Quart.easeOut
        });
    }

    var scrollPage = function (wt, whelf) {
        winH = $win.height();
        winW = $win.width();
        wt = $win.scrollTop();
        whelf = winH / 3;

        for (var p = 0; p < $sec.length; p++) {
            if (wt > pageT[p] - whelf && wt < pageT[p + 1] - whelf) {
                thispage = p;
            }
        }

        menuselect();

        href = pageName[thispage];
        window.location.hash = href;
    }

    var scrollthispage = function () {
        var _pos;
        _thispagescroll = pageName.indexOf(hash.substr(1));

        pageReset();

        if (_thispagescroll != -1) {
            thispage = pageName.indexOf(hash.substr(1));

            pageReset();

            if (thispage == 0) {
                TweenMax.to('body,html', .8, {
                    scrollTop: 0,
                    ease: Quart.easeOut
                });
            } else {
                TweenMax.to('body,html', .8, {
                    scrollTop: pageT[thispage] - headerH,
                    ease: Quart.easeOut
                });
            }

            menuselect();
            href = pageName[thispage];
            window.location.hash = href;
            pagescroll = false;
        } else {

            TweenMax.to('body,html', .8, {
                scrollTop: 0,
                ease: Quart.easeOut
            });
        };

    }
    setTimeout(function () {
        scrollthispage()
    }, 300);

    $navbtn.click(
        function () {
            var n = $(this).data('page');

            menuscroll(n);

            navde();
        }
    );

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
                zIndex: 9999
            }
        })
            .to($('.lb[data-lb="' + lb_data + '"]'), .5, {
                autoAlpha: 1,
                ease: Linear.easeNone
            });

        $body.css({
            'overflow': 'hidden'
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

        $('.lb').find('.content').hide();

        $body.css({
            'overflow': ''
        })

    }

    $('.libtn').click(function () {
        var lbname = $(this).data('lb');
        var _con = $(this).data('con');

        if( lbname == 'lb3' ){
            $('.lb[data-lb="'+lbname+'"]').find('.content[data-con="'+_con+'"]').show();
        }

        lbOpen(lbname);

        return false;
    });


    $('.lb .btn_x').click(lbClose);

    $('body').click(function (e) {
        var _con = $('.lbbox'); // 设置目标区域
        if (!_con.is(e.target) && _con.has(e.target).length === 0) { // Mark 1
            lbClose();
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
        headerH = $('.myheader').height();

        navde();
        // if (pagescroll || winW > 1000) scrollthispage();

        // navfix();

    }
    $win.scroll(scrollPage);
    _resize();
    $win.resize(function () {

        // _resize();

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

        }

    });



};





$(function () {
    //$('.myheader').load('include/header.html');
    //$('.myfooter').load('include/footer.html');

    

    

    var imagesLoaded = loading();
    imagesLoaded.loadfunc();
    imagesLoaded.callback = function () {

        script();

    };

    // script();

    



});