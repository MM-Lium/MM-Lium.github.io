var script = function() {

    var $body = $('html,body');
    var winH = $(window).height();
    var winW = $(window).width();
    // var docH  = $(document).height();
    var $win = $(window);
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var conH = $('.wrapper').height();
    var headerH = $('.myheader').height();



    $('.backtop2').click(function() {
        var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
        $body.animate({
            scrollTop: 0
        }, 600);
    })





    /* header fix ---------------------------------------------------*/

    var _topH = $('#static_header_gnb').outerHeight(true);

    function headerfix() {
        var _scroll = $win.scrollTop();

        if (_scroll >= _topH) {
            $('.myheader').addClass('fixed');
        } else {
            $('.myheader').removeClass('fixed');
        }
    }
    $win.scroll(headerfix);




    /* aniplay ---------------------------------------------------*/

    function aniplay() {
        var _scroll = $win.scrollTop();
        $('.sec').each(function () {
            var _pos = $(this).offset().top;
            var _area = winH /1.5;

            if( _scroll >= _pos-_area ){
                $(this).addClass('playani');


                // if ( $('.sec2').hasClass('playani') ) {
                //     addtitle1();
                // }
                // if ( $('.sec3').hasClass('playani') ) {
                //     addtitle2();
                // }
                // if ( $('.sec5').hasClass('playani') ) {
                //     addtitle3();
                // }
    
                
            }
        })
    }

    $win.scroll(aniplay);

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
                // 'background-color': '#abddff',
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
                // 'background-color': 'transparent',
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
        pageName = ['kv', 'z3', 'tab', 'wa', 'trade-in','opening-event','lucky-draw','store-event','moreinfo', 'moreinfo'];
      


    var _thispagescroll = pageName.indexOf(hash);




    // /* nav scroll --------------------------------------------*/

    /* page scroll */
    var thispage = 0;
    var pagescroll = true;
    var pageT = [],
        $sec = $('.sec'),
        $main = $('.wrapper'),
        ah = $main.outerHeight(true);
    // var _thispagescroll = pageName.includes(hash);



    var hash = location.hash;

    var $navbtn = $('.navbtn');

    // var navRe = function() {
    //     $('.btn_nav').removeClass('isclick');
    //     $('.nav').fadeOut();
    //     $('.nav .inner').removeClass('in');
    // }

    var pageReset = function() {
        pageT = [];
        winW = $win.width();
        ah = $main.outerHeight(true);
        $sec.each(
            function(i, obj) {
                var t = $(obj).offset().top;
                pageT.push(t);
                if (i == $sec.length - 1) { pageT.push(ah); }
            }
        );

    }

    var menuselect = function() {
        $navbtn.removeClass('select');

        // console.log(thispage)

        pageReset();

        $('.navbtn[data-page="' + thispage + '"]').addClass('select');

        if (thispage == 0) {
            $('.navbtn[data-unit="0"]').removeClass('select');
        }
        // if (thispage == 1) {
        //     $('.navbtn[data-unit="1"]').addClass('select');
        // }
        if (thispage == 1 || thispage == 2 || thispage == 3 ) {
            $('.navbtn[data-unit="1"]').addClass('select');
        }
        // if (thispage == 7) {
        //     $('.navbtn[data-unit="5"]').addClass('select');
        // }

        // if (thispage == 6 || thispage == 7 || thispage == 8) {
        //     $('.navbtn[data-unit="4"]').addClass('select');
        // }
        // if (thispage == 9 ) {
        //     $('.navbtn[data-unit="5"]').addClass('select');
        // }

        $('.myheader').css({
            // 'background-color': 'transparent',
            'height': ''
        });
        

    }

    var menuscroll = function(n) {
        var _pos;
        thispage = n;
        // if(thispage!==1){sliderclose();}
        pageReset();

        // if (winW <= _media) { $headerH = 47; } else { $headerH = 50; }
        // if (n !== 0) { _pos = $headerH; } else { _pos = 0; }

        TweenMax.to('body,html', .8, { scrollTop: pageT[thispage] - headerH, ease: Quart.easeOut });

        // if(thispage == 4){ sec5Pagechange();}
        // _menuopen = true;
        // menuClick();
    }

    var scrollPage = function(wt, whelf) {
        winH = $win.height();
        winW = $win.width();
        wt = $win.scrollTop();
        whelf = winH / 3;
        // _mainTOP = $main.offset().top;

        for (var p = 0; p < $sec.length; p++) {
            if (wt > pageT[p] - whelf && wt < pageT[p + 1] - whelf) {
                thispage = p;
            }
        }

        menuselect();

        href = pageName[thispage];
        window.location.hash = href;
    }

    var scrollthispage = function() {
        var _pos;
        _thispagescroll = pageName.indexOf(hash.substr(1));

        // console.log(_thispagescroll)

        pageReset();

        if (_thispagescroll != -1) {
            thispage = pageName.indexOf(hash.substr(1));

            pageReset();

            // if (winW <= _media) { $headerH = 47; } else { $headerH = 50; }
            // if (thispage !== 0) { _pos = $headerH; } else { _pos = 0; }
            if (thispage == 0) {
                TweenMax.to('body,html', .8, { scrollTop: 0, ease: Quart.easeOut });
            } else {
                TweenMax.to('body,html', .8, { scrollTop: pageT[thispage] - headerH, ease: Quart.easeOut });
            }

            menuselect();
            href = pageName[thispage];
            window.location.hash = href;
            pagescroll = false;
        } else {

            TweenMax.to('body,html', .8, { scrollTop: 0, ease: Quart.easeOut });

            // lbhref = window.location.hash.substr(1);
            // TweenMax.to('body,html', .8, { scrollTop: 0, ease: Quart.easeOut,onComplete:function()


        };

    }
    setTimeout(function() {
        scrollthispage()
    }, 300);

    $navbtn.click(
        function() {
            var n = $(this).data('page');
            // if($(this).attr('data-sec5list')) thisS5 = $(this).data('sec5list');
            menuscroll(n);

            navde();
            // if(winW<=1024){ navRe();}

            // if(_lb)lbClose();
            // _lb = true;
        }
    );

    /* lightbox
    ------------------------------------------------------------*/

    // var lightbox = function(){

    var $lb = $('.lb'),
        $lbbox = $('.lbbox');
    var _vdUrl = 'https://www.youtube.com/embed/'

    var lb_data;

    var lbOpen = function(lb_data) {

        var lbAni = new TimelineMax();
        lbAni.to($('.lb[data-lb="' + lb_data + '"]'), .5, { css: { zIndex: 9999 } })
            .to($('.lb[data-lb="' + lb_data + '"]'), .5, { autoAlpha: 1, ease: Linear.easeNone });

        $body.css({
            'overflow': 'hidden'
        })
    }

    var lbClose = function() {

        var lbCloseAni = new TimelineMax();
        lbCloseAni.to($('.lb'), .5, { autoAlpha: 0, ease: Linear.easeNone })
            .to($('.lb'), .5, { css: { zIndex: -1 } });

        $('.lb').find('.content').hide();

        // $('#youtuUrl').attr('src' ,'');

        $body.css({
            'overflow': ''
        })

    }

    $('.libtn').click(function() {
        var lbname = $(this).data('lb');
      
        lbOpen(lbname);
      
        return false;
    });


    $('.lb .btn_x').click(lbClose);

    $('body').click(function(e) {
        var _con = $('.lbbox'); // 设置目标区域
        if (!_con.is(e.target) && _con.has(e.target).length === 0) { // Mark 1
            lbClose();
        }
    });


    // }
    // lightbox();

    // $('body').click(function(e){
    //     var _con = $('.lbbox');   // 设置目标区域
    //     if(!_con.is(e.target) && _con.has(e.target).length === 0){ // Mark 1
    //         lbClose();
    //     }
    // });













    /* resize
    ------------------------------------------------------------*/

    var _resize = function() {

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



};





$(function() {
    //$('.myheader').load('include/header.html');
    //$('.myfooter').load('include/footer.html');



    var imagesLoaded = loading();
    imagesLoaded.loadfunc();
    imagesLoaded.callback = function() {

        script();

    };

    // script();





});