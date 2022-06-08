var script = function() {

    var $body = $('html,body');
    var winH = $(window).height();
    var winW = $(window).outerWidth();
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
        pageName = ['back2020', 'listen2020', 'top2020', 'sad2020', 'ten', 'hello2021', 'power2021'];

    var _thispagescroll = pageName.indexOf(hash);


    if (winW >= 769) {
        setTimeout(function() {
            counter();
        }, 250);
        setTimeout(function() {
            // $('.first_tr').attr('src', 'images/title/title.html');
            // $('.cover_tr').attr('src', 'images/kv_bg/kv_bg2.html');
        }, 5500);

        TweenMax.to('.first .skip', 5, { autoAlpha: 1, delay: 9, ease: Linear.easeNone });
        TweenMax.to('.first .skip', 6, { css: { zIndex: 999 }, delay: 9, ease: Linear.easeNone });
    } else {

         setTimeout(function() {
            counter();
        }, 250);

          setTimeout(function() {
            // $('.first_tr').attr('src', 'images/title_m/title_m.html');
        }, 5500);

        TweenMax.to('.first .skip', 5, { autoAlpha: 1, delay: 9, ease: Linear.easeNone });
        TweenMax.to('.first .skip', 6, { css: { zIndex: 999 }, delay: 9, ease: Linear.easeNone });
    }

    function introOut() {

        $('.kv .first').fadeOut(1000).delay(500);

        var mouseani = new TimelineMax();
        mouseani.to('.mouseScroll', .5, { autoAlpha: 1, delay: 1, ease: Linear.easeNone })
            .to('.mouseScroll', .5, { autoAlpha: 0, delay: 3, ease: Linear.easeNone })
            .to('.mouseScroll', .5, { css: { zIndex: -1 }, ease: Linear.easeNone });
    }


    $('.kv .first').find('.skip').click(introOut);


    function counter() {
        TweenMax.to('.counter .load2', 1, { autoAlpha: 1, delay: 1, ease: Linear.easeNone });
        TweenMax.to('.counter .load', 1, { autoAlpha: 1, delay: 1, ease: Linear.easeNone });
        var counter = 0;
        var c = 0;
        var i = setInterval(function() {
            $('.load').css("width", c + "%");

            counter++;
            c++;

            if (counter == 101) {
                clearInterval(i);
            }

        }, 50);

        TweenMax.to('.counter', 1, { autoAlpha: 0, delay: 6, ease: Linear.easeNone });
    }


    $('.mybook .open,.mybook .ar').on('click', function() {

        var navopen = $('.pick').attr('toggle');

        if (navopen == 0) {

            $('.tabs').slideToggle();
            $('.tabs').css('z-index', '20');

            $('.sec2 .black').css({

                'z-index': '20',
                'opacity': '1'
            })

            $('.sec2 .pick').css({

                'z-index': '20',
                'opacity': '1'
            })


            $('.pick').attr('toggle', '1');

        } else {

            $('.tabs').slideToggle();
            $('.tabs').css('z-index', '1');

            $('.sec2 .black').css({

                'z-index': '-1',
                'opacity': '0'
            })

            $('.sec2 .pick').css({
                'z-index': '1',
                'opacity': '1'
            })

            $('.pick').attr('toggle', '0');

        }
    });


    $('.mybook .goto').on('click', function() {

        if ($(this).hasClass('go')) return false;

        var oldgo = $('.mybook .goto.go').data('to');

        var thisgo = $(this).data('to');

        var thistext = $(this).text();


        if (oldgo > thisgo) {
            moveback();
        } else {
            movenext();
        }

        setTimeout(function() {
            $('.mybook .goto.go').removeClass('go');

            $('.goto[data-to="' + thisgo + '"]').addClass('go');

            $('.mybook .book.go').removeClass('go');

            $('.book[data-go="' + thisgo + '"]').addClass('go');

        }, 1000);


        $('.tabs').slideToggle();


        $('.open').text(thistext);

        $('.tabs').css('z-index', '1');

        $('.sec2 .black').css({
            // 'background': 'rgba(0, 0, 0, 0.8)',
            'z-index': '-1',
            'opacity': '0'
        })

        $('.sec2 .pick').css({
            // 'background': 'rgba(0, 0, 0, 0.8)',
            'z-index': '1',
            'opacity': '1'
        })

        $('.pick').attr('toggle', '0');

    });

    $('.mybook .left').on('click', function() {

        var thisbook = $('.mybook .book.go').data('go');

        if (thisbook == 0) {
            return false;
        } else {
            var back = 0;
            back = (thisbook - 1);
        }

        var backtext = $('.goto[data-to="' + back + '"]').text();

        setTimeout(function() {
            $('.book[data-go="' + thisbook + '"]').removeClass('go');
            $('.book[data-go="' + back + '"]').addClass('go');
            // $('.booklist .icon_group').fadeOut(100);
        }, 1000);

        setTimeout(function() {
            $('.mybook .goto.go').removeClass('go');
            $('.goto[data-to="' + back + '"]').addClass('go');
            // $('.booklist .icon_group').fadeIn(1000).delay(500);
        }, 1000);

        moveback();

        $('.open').text(backtext);


    });





    $('.mybook .right').on('click', function() {

        var thisbook = $('.mybook .book.go').data('go');
        var bookl = $('.mybook .book').length;
        var next = thisbook + 1;
        var end = bookl - 1;

        var nexttext = $('.goto[data-to="' + next + '"]').text();

        if (thisbook == end) {
            return false;
        } else {
            setTimeout(function() {
                $('.book[data-go="' + thisbook + '"]').removeClass('go');
                $('.book[data-go="' + next + '"]').addClass('go');
            }, 1000);
            setTimeout(function() {
                $('.mybook .goto.go').removeClass('go');
                $('.goto[data-to="' + next + '"]').addClass('go');
                // $('.booklist .icon_group').fadeIn(1000).delay(500);
            }, 1000);
            movenext();
        }

        $('.open').text(nexttext);
    });

    var movenext = function() {

        if (winW <= 768) {
            $('.move_n').attr('src', '');
            $('.move_n').attr('src', 'images/backward_m/backward_m.gif');
            $('.page_move').fadeIn(1000).delay(500).fadeOut(1000);

        } else {
            $('.move_n').attr('src', '');
            $('.move_n').attr('src', 'images/backward/backward.gif');
            $('.page_move').fadeIn(1000).delay(500).fadeOut(1000);
            $('.booklist .icon_group').fadeOut(1000).delay(500).fadeIn(1000);
            $('.booklist .more').fadeOut(1000).delay(500).fadeIn(1000);
        }

    }


    var moveback = function() {
        if (winW <= 768) {
            $('.move_b').attr('src', '');
            $('.move_b').attr('src', 'images/forward_m/forward_m.gif');
            $('.page_move2').fadeIn(1000).delay(500).fadeOut(1000);

        } else {
            $('.move_b').attr('src', '');
            $('.move_b').attr('src', 'images/forward/forward.gif');
            $('.page_move2').fadeIn(1000).delay(500).fadeOut(1000);
            $('.booklist .icon_group').fadeOut(1000).delay(500).fadeIn(1000);
            $('.booklist .more').fadeOut(1000).delay(500).fadeIn(1000);
        }
    }

    // $('#newslistWrap').scroll(function() {
    //     var now = $('#news li.top').data('go');
    //     var height = $('#news li.top').height();
    //     var thisoffset = $('.new_li[data-go="' + now + '"]').position().top;

    //     if (winW > 768) {
    //         if (thisoffset < 50) {
    //             if ((-thisoffset) >= height) {
    //                 next = now + 1;
    //                 $('#news li.top').removeClass('top');
    //                 $('.new_li[data-go="' + next + '"]').addClass('top');
    //                 $('#month li.selected').removeClass('selected');
    //                 $('#month li[data-id="' + next + '"]').addClass('selected');
    //                 var _height2 = $('#month').scrollTop();

    //                 if (next > 3) {
    //                     $('#month').animate({
    //                         scrollTop: _height2 + 150
    //                     }, 600);
    //                 }
    //             }
    //         } else {
    //             next = now - 1;
    //             $('#news li.top').removeClass('top');
    //             $('.new_li[data-go="' + next + '"]').addClass('top');
    //             $('#month li.selected').removeClass('selected');
    //             $('#month li[data-id="' + next + '"]').addClass('selected');

    //             var _height2 = $('#month').scrollTop();

    //             if (next >= 3) {

    //                 $('#month').animate({
    //                     scrollTop: _height2 - 200
    //                 }, 600);
    //             }
    //         }
    //     } else {

    //         if (thisoffset < 50) {

    //             if ((-thisoffset) >= height - 100) {

    //                 next = now + 1;

    //                 $('#news li.top').removeClass('top');
    //                 $('.new_li[data-go="' + next + '"]').addClass('top');

    //                 $('#month li.selected').removeClass('selected');
    //                 $('#month li[data-id="' + next + '"]').addClass('selected');

    //                 var _height2 = $('#month').scrollTop();

    //                 if (next > 3) {
    //                     $('#month').animate({
    //                         scrollTop: _height2 + 100
    //                     }, 600);
    //                 }
    //             }

    //         } else {

    //             next = now - 1;

    //             $('#news li.top').removeClass('top');
    //             $('.new_li[data-go="' + next + '"]').addClass('top');

    //             $('#month li.selected').removeClass('selected');
    //             $('#month li[data-id="' + next + '"]').addClass('selected');

    //             var _height2 = $('#month').scrollTop();

    //             if (next > 3) {
    //                 $('#month').animate({
    //                     scrollTop: _height2 - 100
    //                 }, 600);
    //             }
    //         }
    //     }
    // });


    $('#newslistWrap').scroll(function() {

        // _height = $('#newslistWrap').scrollTop();

        var now = $('#news li.top').data('go');

        var height = $('#news li.top').height();
        var thisoffset = $('.new_li[data-go="' + now + '"]').position().top;

        if (thisoffset < 60) {

            if ((-thisoffset) >= height) {

                next = now + 1;

                $('#news li.top').removeClass('top');
                $('.new_li[data-go="' + next + '"]').addClass('top');

                $('#month li.selected').removeClass('selected');
                $('#month li[data-id="' + next + '"]').addClass('selected');

                var _height2 = $('#month').scrollTop();

                if (winW > 768) {

                    $('#month').animate({
                        scrollTop: _height2 + 150
                    }, 600);

                } else {

                    $('#month').animate({
                        scrollTop: _height2 + 50
                    }, 600);

                }
            }

        } else {

            next = now - 1;

            $('#news li.top').removeClass('top');
            $('.new_li[data-go="' + next + '"]').addClass('top');

            $('#month li.selected').removeClass('selected');
            $('#month li[data-id="' + next + '"]').addClass('selected');

            var _height2 = $('#month').scrollTop();

            if (winW > 768) {

                $('#month').animate({
                    scrollTop: _height2 - 150
                }, 600);

            } else {

                $('#month').animate({
                    scrollTop: _height2 - 50
                }, 600);

            }

        }

    });


    $('#month li').on('click', function() {

        if ($(this).hasClass('selected')) return false;
        $('#month li.selected').removeClass('selected');
        var oldmonth = $('#month li.selected').data('id');
        var thisgo = $(this).data('id');
        var thisoffset = $('.new_li[data-go="' + thisgo + '"]').offset().top;
        var _height = $('#newslistWrap').scrollTop();

        var nextoffset = _height + thisoffset;

        $('#month li[data-id="' + thisgo + '"]').addClass('selected');

        // monthscroll();

        if (winW > 768) {

            $('#newslistWrap').animate({
                scrollTop: nextoffset - 50
            }, 600);

        } else {
            $('#newslistWrap').animate({
                scrollTop: nextoffset - 50
            }, 600);

        }

    });



    // function monthscroll() {
    //     var _height2 = $('#month').scrollTop();

    //     var monthgo = $(this).height();

    //     var monthoffset = $('#month').offset().top;
    //     var thismonth = $(this).data('id');
    //     var nextoffset2 = _height2 + monthgo;

    //     if (thismonth > 3) {

    //         $('#month').animate({
    //             scrollTop: _height2 + 150
    //         }, 600);
    //     }
    // }


    if (winW > 768) {
        // PC版
        $('#timeline').timelinr({
            containerDiv: '#timeline',
            datesDiv: '#year',
            issuesDiv: '#people',
            orientation: 'vertical',
            issuesSpeed: 300,
            datesSpeed: 100,
            arrowKeys: 'false',
            autoPlay: 'false',
            mousewheel: 'true',
            swipe: 'true',
            issuesTransparency: 0.2,
            startAt: 4
        });

        $('#timeline').on('wheel', (function(e) {

            e.preventDefault();
            sec2 = $('.sec2').offset().top;
            sec3 = $('.sec3').offset().top;
            sec6 = $('.sec6').offset().top;
            var newT = $('#people').offset().top;
            var timeline = $('#timeline').offset().top;
            var length = $('#people li').length;
            var height = $('#people li').height();
            var end = (length - 1) * height;
            var down = timeline - end;


            if (e.originalEvent.deltaY < 0) {
                if (newT == timeline) {
                    $('html,body').animate({ scrollTop: sec2 - headerH }, 100);
                } else {
                    $('#prev').click();
                    $('html,body').animate({ scrollTop: sec3 - headerH }, 100);
                }
            } else {
                if (newT <= down) {
                    $('html,body').animate({ scrollTop: sec6 - headerH }, 100);
                } else {
                    $('#next').click();
                    $('html,body').animate({ scrollTop: sec3 - headerH }, 100);
                }
            }
        }));

    } else {
        // 手機版
        $('#year').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            verticalSwiping: true,
            vertical: true,
            centerMode: true,
            draggable: false,
            focusOnSelect: true,
            infinite: true,
            touchMove: true,
            swipeToSlide: true,
            asNavFor: '#people'
        });

        $('#people').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            verticalSwiping: true,
            touchMove: true,
            draggable: true,
            vertical: true,
            swipeToSlide: true,
            focusOnSelect: true,
            infinite: true,
            asNavFor: '#year'
        });
    }


    $('.audio .play').on('click', function() {

        var audio = $(this).data('play');
        var spanall = $(this).parents('.audio').find('span').text();

        if (audio == "audio1") {
            var audio = document.getElementById('myaudio1');
            var span = $('.a_1 span').text();

            if (span == "立即播放") {
                audio.play();
                $(this).addClass('onplay');
                $('.a_1 span').text("暫停");

            } else if (span == "暫停") {
                $('.a_1 span').text("繼續播放");
                $(this).removeClass('onplay');
                audio.pause();
            } else {
                $('.a_1 span').text("暫停");
                $(this).addClass('onplay');
                audio.play();
            }

        } else if (audio == "audio2") {
            var audio = document.getElementById('myaudio2');
            var span = $('.a_2 span').text();

            if (span == "立即播放") {
                audio.play();
                $(this).addClass('onplay');
                $('.a_2 span').text("暫停");

            } else if (span == "暫停") {
                $('.a_2 span').text("繼續播放");
                $(this).removeClass('onplay');
                audio.pause();
            } else {
                $('.a_2 span').text("暫停");
                $(this).addClass('onplay');
                audio.play();
            }

        } else {
            var audio = document.getElementById('myaudio3');
            var span = $('.a_3 span').text();

            if (span == "立即播放") {
                audio.play();
                $(this).addClass('onplay');
                $('.a_3 span').text("暫停");

            } else if (span == "暫停") {
                $('.a_3 span').text("繼續播放");
                $(this).removeClass('onplay');
                audio.pause();
            } else {
                $('.a_3 span').text("暫停");
                $(this).addClass('onplay');
                audio.play();
            }

        }
    });


    var _sec2pos = $('.kv').offset().top;

    function headerfix() {
        var _scroll = $win.scrollTop();

        if (_scroll >= _sec2pos / 2) {
            $('.myheader2').fadeIn('fast');
            $('.sec1 .sectitle').css('opacity', 1);
        } else {
            $('.myheader2').fadeOut('fast');
        }

    }
    $win.scroll(headerfix);


    $(window).scroll(function() {
        //最後一頁scrollTop=body-window，50是預留空間
        last = $('body').height() - $(window).height() - 400;

        if ($(window).scrollTop() >= last) {
            $('.down').addClass('turn');
        } else {
            $('.down').removeClass('turn');
        }
    })

    $('.down').on('click', function() {

        var nextpage = thispage + 1;

        if (thispage == 6) {
            $('html,body').animate({ scrollTop: 0 }, 333);
            $('.down.turn').removeClass('turn');
        } else {

            $body.animate({
                scrollTop: pageT[nextpage] - headerH
            }, 600);
        }

    });


    $('.sec5 .go').click(formspin);


    function formspin() {

        var lbAni = new TimelineMax();
        lbAni.to($('.draw'), .5, { css: { zIndex: 10 } }, '-=.5')
            .to($('.draw'), .5, { autoAlpha: 1, ease: Linear.easeInOut });

        $body.css({
            'overflow': 'hidden'
        })

        setTimeout(function() {

            var lbCloseAni = new TimelineMax();
            lbCloseAni.to($('.draw'), .3, { opacity: 0, ease: Linear.easeNone })
                .to($('.draw'), .3, { css: { zIndex: -1 } });

            $body.css({
                'overflow': ''
            })

            $('.end_bg').attr('src', '');
            $('.end_bg').attr('src', 'images/mom/fortune.gif');
            $('.fortune').fadeIn(1000).delay(500).fadeOut(1000);

        }, 3000)

        setTimeout(function() {

            lbOpen('lucky');

        }, 4000)

    }


    // 主選單

    function navde() {

        // $('.subnav').hide();

        $('.burger').attr('toggle', '0');
        $('.burger').removeClass('isclick');



        $('.myheader .box2').css('height', '');
        TweenMax.to('.myheader', .1, { backgroundColor: '', ease: Quart.easeOut });

        // TweenMax.to($('.myheader').find('.logo').find('a'), .1, { autoAlpha: 1, ease: Linear.easeNone });
        // $('.logonav').hide();

        $('body').css({
            'overflow-y': '',
            'position': '',
            'height': ''
        });

        $('.logo1').css({
            'display': 'block'
        });

        // $('.mainnav').css('display','flex');

        if (winW <= 768) {
            $('.box2').hide();
        } else {
            $('.box2').show();
        }
    }
    navde();

    // 主選單
    function navfunc() {
        var navopen = $('.burger').attr('toggle');
        if (navopen == 0) {

            $('.myheader').css({
                'height': '',
                'overflow-y': 'scroll'
            });
            // $('.mainnav ul').css('overflow-y','scroll');

            TweenMax.to('.myheader', .1, { backgroundColor: '#000', ease: Quart.easeOut });
            $('.box2').slideDown();


            $('body').css({
                'overflow-y': 'hidden',
                'position': 'fixed',
                'height': '100%'
            });

            $('.logo1').css({
                'display': 'none'
            });

            $('.burger').attr('toggle', '1');
            $('.burger').addClass('isclick');

        } else if (navopen == 1) {

            $('.box2').css('height', '');
            TweenMax.to('.myheader', .1, { backgroundColor: 'transparent', delay: .3, ease: Quart.easeOut });
            $('.box2').slideUp();


            $('body').css({
                'overflow-y': '',
                'position': '',
                'height': ''
            });

            $('.logo1').css({
                'display': 'block'
            });

            $('.burger').attr('toggle', '0');
            $('.burger').removeClass('isclick');
        }
    }
    $('.burger').click(navfunc);

    /* nav scroll --------------------------------------------*/

    /* page scroll */
    var thispage = 0;
    var pagescroll = true;
    var pageT = [],
        $sec = $('.sec'),
        $main = $('.wrapper'),
        ah = $main.outerHeight(true);
    // var _thispagescroll = pageName.includes(hash);

    // var hash = location.hash;

    var $navbtn = $('.navbtn');

    var pageReset = function() {
        pageT = [];
        winW = $win.outerWidth();
        ah = $main.outerHeight(true);
        $sec.each(
            function(i, obj) {
                var t = $(obj).offset().top;
                pageT.push(t);
                if (i == $sec.length - 1) { pageT.push(ah); }
            }
        );

        // console.log(pageT);
    }

    var menuselect = function() {
        $navbtn.removeClass('select');

        // console.log(thispage)

        pageReset();
        // if (winW>=1024){
        //     $('.navbtn[data-page="' + thispage + '"]').addClass('select');
        // }
        $('.navbtn[data-page="' + thispage + '"]').addClass('select');
    }

    var menuscroll = function(n) {
        var _pos;
        thispage = n;
        // if(thispage!==1){sliderclose();}
        pageReset();

        // if (winW <= _media) { $headerH = 47; } else { $headerH = 50; }
        // if (n !== 0) { _pos = $headerH; } else { _pos = 0; }

        // TweenMax.to('body,html', .8, { scrollTop: pageT[thispage] - headerH , ease: Quart.easeOut });
        $body.animate({
            scrollTop: pageT[thispage] - headerH
        }, 600);

        console.log(pageT[thispage]);
        console.log(headerH);


        // if(thispage == 4){ sec5Pagechange();}
        // _menuopen = true;
        // menuClick();
    }

    var scrollPage = function(wt, whelf) {
        winH = $win.height();
        winW = $win.outerWidth();
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

        var topH = $('.myheader2').height();

        if (_thispagescroll != -1) {
            thispage = pageName.indexOf(hash.substr(1));

            pageReset();

            // if (winW <= _media) { $headerH = 47; } else { $headerH = 50; }
            // if (thispage !== 0) { _pos = $headerH; } else { _pos = 0; }
            if (thispage == 0) {
                TweenMax.to('body,html', .8, { scrollTop: 0, ease: Quart.easeOut });
            } else {
                TweenMax.to('body,html', .8, { scrollTop: pageT[thispage] - topH, ease: Quart.easeOut });
                // $body.animate({
                //     scrollTop: pageT[thispage] 
                // }, 600);
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
    }, 600);

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
    // lbname = 'announcement';

    // TweenMax.set($('.lb'),{autoAlpha:0});
    // TweenMax.set($('.lb') ,{css:{zIndex:-1}});

    var lbOpen = function(lb_data) {

        var lbAni = new TimelineMax();
        lbAni.to($('.lb[data-lb="' + lb_data + '"]'), .5, { css: { zIndex: 999 } }, '-=.5')
            .to($('.lb[data-lb="' + lb_data + '"]'), .5, { autoAlpha: 1, ease: Linear.easeNone });

        $body.css({
            'overflow': 'hidden'
            // 'position': 'fixed'
        })
    }

    var lbClose = function() {

        var lbCloseAni = new TimelineMax();
        lbCloseAni.to($('.lb'), .5, { autoAlpha: 0, ease: Linear.easeNone })
            .to($('.lb'), .5, { css: { zIndex: -1 } });

        // $('#youtuUrl').attr('src' ,'');

        $body.css({
            'overflow': ''
            // 'position': 'fixed'
        })

    }


    $('.lb').click(function(e) {
        var _con = $('.lbbox'); // 设置目标区域
        if (!_con.is(e.target) && _con.has(e.target).length === 0) { // Mark 1
            lbClose();
        }
    });


    // $('.lb .btn_x').click(lbClose);

    $('.article.p1').click(function() {
        var lbname = $(this).data('hello_1');
        lbOpen('hello_1');

    });

    $('.article.p2').click(function() {
        var lbname = $(this).data('hello_2');
        lbOpen('hello_2');

    });

    $('.more').click(function() {
        var lbname = $(this).data('article_1');
        lbOpen('article_1');
        // $('#youtuUrl').attr('src' ,_vdUrl+ytid+'?autoplay=1&wmode=opaque&showinfo=0');

    });

    $('.Compared').click(function() {
        var lbname = $(this).data('compared');
        lbOpen('compared');
        // $('#youtuUrl').attr('src' ,_vdUrl+ytid+'?autoplay=1&wmode=opaque&showinfo=0');

    });



    $('.lb .btn_x').click(lbClose);

    $('#people  .play').on('click', playThis);

    $('#news .play').on('click', playThis);

    function playThis() {
        var lbname = $(this).data('article_2');
        lbOpen('article_2');
    }




    /* resize
    ------------------------------------------------------------*/
    /* resize
     ------------------------------------------------------------*/

    var _resize = function() {

        winW = $win.width();
        winH = $win.height();
        docH = $(document).height();
        _scroll = $(window).scrollTop();
        scrollBottom = $(window).scrollTop() + $(window).height();
        headerH = $('.myheader2').height();


        // _sec1pos = $('.sec1').offset().top;

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