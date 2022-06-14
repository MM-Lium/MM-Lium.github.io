/* Safari 『強制』禁止縮放
==================================================*/
document.documentElement.addEventListener('touchstart', function (e) {
    if (e.touches.length > 1)
        e.preventDefault();
}, false);
var lastTouchEnd = 0;
document.documentElement.addEventListener('touchend', function (e) {
    var now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300)
        e.preventDefault();
    lastTouchEnd = now;
}, false);

var script = function () {

    var $body = $('html,body');
    var winH = $(window).height();
    var winW = $(window).width();
    var $win = $(window);
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var conH = $('.container').height();
    var headerH = $('header').height();

    $('.g-footer-2019__btn-top').click(function () {
        $body.animate({
            scrollTop: 0
        }, 600);
    })



    /* 配件刪除
   ------------------------------------------------------------*/




    /* 選單
   ------------------------------------------------------------*/

    function navde() {
        $('.burger').attr('toggle', '0');
        $('.burger').removeClass('isclick');
        TweenMax.to('.navbox', .4, {
            autoAlpha: 0,
            zIndex: -1
        });

        $('.mainnav').css('height','');
        if(winW <= 1024){
            $('.mainnav').hide();
        }else{
            $('.mainnav').show();
        }

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
            // $('#myheader').find('.container').css({
            //     'background': '#000'
            // })
        }
    }
    navde();

    $('.burger').click(function () {

        var menuOpen = $('.burger').attr('toggle');

        if (menuOpen == 0) {

            $('.nav').slideDown();
            $('.mainnav').slideDown();

            $('.burger').attr('toggle', '1');
            $('.burger').addClass('isclick');

            $('body,html').css({
                'overflow': 'hidden',
                'height': '100vh'
            })

            // if (winW <= 1024) {
            //     TweenMax.to($('#myheader').find('.container'), .1, {
            //         backgroundColor: '#262626',
            //         ease: Linear.easeNone
            //     });
            // }
        } else if (menuOpen == 1) {

            $('.nav').slideUp();
            $('.mainnav').css('height','');
            $('.mainnav').slideUp();

            $('.burger').attr('toggle', '0');
            $('.burger').removeClass('isclick');

            $('body,html').css({
                'overflow': '',
                'height': ''
            })

            // if (winW <= 1024) {
            //     TweenMax.to($('#myheader').find('.container'), 1, {
            //         backgroundColor: '#000',
            //         ease: Linear.easeNone
            //     });
            // }
        }

    });

    // 內頁選單select
    var thispage = $('body').data('p');
    function navselect(){
        $('#myheader').find('.nav').find('li[data-p="' + thispage + '"]').addClass('select');
    } 
    navselect()


    //選單改變顏色

    if ($('.rule-how').length) {

        $('._Note20ultra .capacities label').on('click', function () {
            $('._Note20ultra #note20ultracolor2').prop("checked", true);
        })

        $('._Note20 .capacities label').on('click', function () {
            $('._Note20 #note20color3').prop("checked", true);
        })

        $('._Galaxys22 .capacities label').on('click', function () {
            $('._Galaxys22 #galaxys22color3').prop("checked", true);
        })
    }


    /* 訂單選項
   ------------------------------------------------------------*/

    $('.shoplist').find('li').removeClass('select');
    $('.shoplist').find('li').click(function () {
        $('.shoplist').find('li').removeClass('select');
        $(this).addClass('select');
    })


    /* step1 選擇產品規格
    ------------------------------------------------------------*/
    // 顏色
    var imgpath = 'cdn/images/phone/';
    $s22ultra_512g = ['black', 'white', 'red', 'green'];
    $s22ultra_256g = ['black', 'white', 'red', 'green'];
    $s22plus_256g = ['black2', 'white2', 'pink2', 'green2'];
    $s22plus_128g = ['white2', 'pink2', 'green2'];
    $s22_256g = ['black3', 'white3', 'pink3', 'green3'];
    $s22_128g = ['white3', 'pink3', 'green3']
    $tab_s8ultra_512g = ['black3', 'silver3'];
    $tab_s8ultra_256g = ['black3', 'silver3'];
    $tab_s8plus_512g = ['black4', 'silver4'];
    $tab_s8plus_256g = ['black4', 'silver4'];


    $('.step1').find('.choose').each(function () {

        var ptName = 1;
        reloadDataimg()

        function reloadDataimg() {
            if (ptName == 1) {
                $(".pcolor").each(function () {
                    $(this).attr('data-img', $(this).data('pt1img'))
                });
            } else if (ptName == 2) {
                $(".pcolor").each(function () {
                    $(this).attr('data-img', $(this).data('pt2img'))
                });
            } else if (ptName == 3) {
                $(".pcolor").each(function () {
                    $(this).attr('data-img', $(this).data('pt3img'))
                });
            } else if (ptName == 4) {
                $(".pcolor").each(function () {
                    $(this).attr('data-img', $(this).data('pt4img'))
                });
            } else if (ptName == 5) {
                $(".pcolor").each(function () {
                    $(this).attr('data-img', $(this).data('pt5img'))
                });
            }
        }

        $(this).find('dt,dd').click(function () {
            var phoneimg = $(this).data('img');
            var phoneId = $(this).data('pdname');
            var phoneCapa;

            $('.phoneimg').attr('src', imgpath + phoneimg + ".png");
            $('.phoneimg').parent('.main_phone').css({
                "width": "90%",
                "transform": "translateX(0)",
                "padding-left": "10%"
            });

            // 類型
            if ($(this).hasClass('product')) {

                pageName = $(this).data('page')

                if (pageName == "phonetype") {
                    $('.phonetype').fadeIn().eq(0).trigger('click');
                    $('.tabtype').hide();

                } else {
                    $('.phonetype').hide();
                    $('.tabtype').fadeIn().eq(0).trigger('click');
                }
                reloadDataimg()
            }

            // 型號
            if ($(this).hasClass('phonetype') || $(this).hasClass('tabtype')) {
                ptName = $(this).data('pt')
                $('.pcapa').hide().removeClass('select');
                $('.capa-' + phoneId).removeClass('hide').fadeIn().eq(0).trigger('click');

                reloadDataimg()
            }

            // 容量&顏色
            if ($(this).hasClass('pcapa')) {
                ptName = $(this).data('pt')
                phoneCapa = $(this).data('capa');
                $('.pcolor').hide().removeClass('select');

                reloadDataimg()

                switch (phoneCapa) {
                    case 's22ultra_512g':
                        $.each($s22ultra_512g, function (i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s22ultra_512g[0]).addClass('select')
                        break;
                    case 's22ultra_256g':
                        $.each($s22ultra_256g, function (i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s22ultra_256g[0]).addClass('select')
                        break;
                    case 's22plus_256g':
                        $.each($s22plus_256g, function (i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s22plus_256g[0]).addClass('select')
                        break;
                    case 's22plus_128g':
                        $.each($s22plus_128g, function (i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s22plus_128g[0]).addClass('select')
                        break;
                    case 's22_256g':
                        $.each($s22_256g, function (i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s22_256g[0]).addClass('select')
                        break;
                    case 's22_128g':
                        $.each($s22_128g, function (i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $s22_128g[0]).addClass('select')
                        break;
                    case 'tab_s8ultra_512g':
                        $.each($tab_s8ultra_512g, function (i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $tab_s8ultra_512g[0]).addClass('select')
                        break;
                    case 'tab_s8ultra_256g':
                        $.each($tab_s8ultra_256g, function (i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $tab_s8ultra_256g[0]).addClass('select')
                        break;
                    case 'tab_s8plus_512g':
                        $.each($tab_s8plus_512g, function (i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $tab_s8plus_512g[0]).addClass('select')
                        break;
                    case 'tab_s8plus_256g':
                        $.each($tab_s8plus_256g, function (i, item) {
                            $('.' + item).removeClass('hide').fadeIn();
                        });
                        $('.' + $tab_s8plus_256g[0]).addClass('select')
                        break;
                }
            }


            if (!$(this).hasClass('disabled')) {
                $(this).parent().find('dt,dd').removeClass('select');
                $(this).addClass('select');
            }

        })
    })

    /* step3 確認填寫資料
    ------------------------------------------------------------*/

    // 活動辦法
    $('.step3 input').click(function () {
        $(this).attr("checked", true);
    })

    $('.step3 .allfinish').click(function () {

        // mail錯誤
        var my_mail = $('.step3 .mail dd').text();
        var emailRegxp = /^([\w]+)(.[\w]+)*@([\w]+)(.[\w]{2,3}){1,2}$/;

        // 身分證錯誤
        var my_id = $('.step3 .id dd').text();
        var countyCode = my_id.charCodeAt(0);

        // 未勾選活動辦法
        var my_check = $('.step3 .checkall input[name=check]');
        var all_check = [];
        my_check.each(function () {
            all_check.push($(this).attr('checked'));
        })


        if (emailRegxp.test(my_mail) != true) {
            lbOpen('error');
            $('.lb-error .txt').html('您輸入的E-mail格式有誤！<br>請重新輸入！')
            return false;

        } else if (my_id.length != 10) {
            lbOpen('error');
            $('.lb-error .txt').html('您輸入的身分證字號有誤！<br>請重新輸入！')
            return false;
        } else if (countyCode < 65 | countyCode > 90) {
            lbOpen('error');
            $('.lb-error .txt').html('您輸入的身分證字號有誤！<br>請重新輸入！')
            return false;
        } else if (all_check.length == "3") {
            var che_ = $.inArray(undefined, all_check);
            if (che_ == "-1") {

            } else {
                lbOpen('error');
                $('.lb-error .txt').html('請勾選同意本活動辦法！')
                return false;
            }
        }

        lbOpen('remind');

    });

    /* step5 首日提醒
    ------------------------------------------------------------*/

    $('.lb-reserve .chooseday select').click(function () {

        var my_choos = $(this).val();
        if (my_choos == "2") {
            $(this).closest('.chooseday').nextUntil('.no_open').addClass('hide');
            $('.lb-reserve .no_open').removeClass('hide');
            $('.lb-reserve .btnbox ').addClass('hide');
        } else {
            $(this).closest('.chooseday').nextUntil('.no_open').removeClass('hide');
            $('.no_open').addClass('hide');
            $('.lb-reserve .btnbox ').removeClass('hide');
        }
    })

    /* step5 確認送出
    ------------------------------------------------------------*/

    $('.lb-reserve .choosefinish').click(function () {
        $(this).closest('.form').addClass('hide');
        $(this).closest('.form').next().removeClass('hide');
    })

    /* step5 重新預約
    ------------------------------------------------------------*/

    $('.lb-reserve .reserve_reset').click(function () {
        $(this).closest('.reserve_finish').addClass('hide');
        $(this).closest('.reserve_finish').prev().removeClass('hide');
    })

    /* result 重新預約
    ------------------------------------------------------------*/
    $('#rebooking').click(function () {
        $(this).closest('.inner').addClass('hide');
        $(this).closest('.inner').next().removeClass('hide');
    })

     /* result 確認送出
    ------------------------------------------------------------*/

    $('.lb-done .choosefinish').click(function () {
        $(this).closest('.form').addClass('hide');
        $(this).closest('.form').prev().removeClass('hide');
    })

    /* result 首日提醒
    ------------------------------------------------------------*/

    $('.lb-done .form select').click(function () {

        var my_choos = $(this).val();
        if (my_choos == "2") {
            $(this).closest('.chooseday').nextUntil('.no_open').addClass('hide');
            $('.lb-done .no_open').removeClass('hide');
            $('.lb-done .btnbox ').addClass('hide');
        } else {
            $(this).closest('.chooseday').nextUntil('.no_open').removeClass('hide');
            $('.no_open').addClass('hide');
            $('.lb-done .btnbox ').removeClass('hide');
        }
    })

   

    /* QA
    ------------------------------------------------------------*/

    $('.qna').find('.box').each(function () {
        $(this).click(function () {
            $(this).toggleClass('isopen');
            if ($(this).hasClass('isopen')) {
                $(this).find('.txt').slideDown();
            } else {
                $(this).find('.txt').slideUp();
            }
        })
    })

    
    /* 活動辦法切換 -----------------------------------------------------*/

    $('.storebuy .maintab .bt').eq(0).addClass('select');
    $('.storebuy .inner').eq(0).show();

     $('.storebuy .maintab .bt').click(function () {
          var _ind = $(this).data('tab');

          $('.storebuy .maintab .bt').removeClass('select');
          $('.storebuy .maintab .bt[data-tab="' + _ind + '"]').addClass('select');

          $('.storebuy .inner').fadeOut('fast');
          $('.storebuy .inner[data-inner="' + _ind + '"]').fadeIn('fast',function () {
            

              var pos = [];
              $(this).find('.listing').find('.one').each(function (i, obj) {
                    var t = $(obj).offset().top;
                    pos.push(t);
              })

              // console.log(pos);

              $(this).find('.subtab').find('li').click(function () {
                  var cur = $(this).index();
                  TweenMax.to('body,html', .8, { scrollTop: pos[cur] , ease: Quart.easeOut });
              })


          });

          
     })

     function promoSubscroll() {
          
         $('.storebuy .inner').each(function () {
            var pos = [];
            $(this).find('.listing').find('.one').each(function (i, obj) {
                  var t = $(obj).offset().top;
                  pos.push(t);
            })

            // console.log(pos);

            $(this).find('.subtab').find('li').click(function () {
                var cur = $(this).index();
                TweenMax.to('body,html', .8, { scrollTop: pos[cur] , ease: Quart.easeOut });
            })
         })

    }
    promoSubscroll();


    /* 取消原因
    ------------------------------------------------------------*/

    $('.lb-reason .selectbox select').click(function () {

        $('.lb-reason  .main').addClass('open');

    });


    /* 熱銷通路切換 -----------------------------------------------------*/

    var thisPath = 1,
        prevPath = '',
        $btn_tab = $('.soldout .tabbox .tab');

    var pathPagechange = function () {
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
        pathAni.to($('.soldout .btnlist[data-list ="' + thisPath + '"]'), .3, {
            css: {
                opacity: 1,
                height: 'auto'
            },
            ease: Linear.easeNone
        });

        $btn_tab.removeClass('select');
        $btn_tab.eq(thisPath - 1).addClass('select');
        prevPath = thisPath;
    }
    pathPagechange(thisPath);

    $btn_tab.click(function () {
        var $this = $(this);

        if ($this.hasClass('js-justLink')) return;

        thisPath = $this.index();
        pathPagechange();
    });


    // tab切換效果 

    $btn_tab.click(function () {
        var _ind = $(this).index() - 1,
            _w = $(this).outerWidth(true);

        if (_ind === 2) return;

        TweenMax.to($(this).parent().find('.ovr'), .3, {
            left: _ind * _w,
            ease: Quart.easeInOut
        });
    })


    /* promo ------------------------------------------------------------*/

    // 主選切換
    var thisS4 = 0,
        prevS4 = '',
        $btn_sec4 = $('.promobox .tabbox .tab');

    var sec4Pagechange = function () {
        if (thisS4 !== prevS4) $('.promobox .inner').fadeOut(0);
        $('.promobox .inner[data-inner ="' + thisS4 + '"]').fadeIn(500);
        $btn_sec4.removeClass('select');
        $btn_sec4.eq(thisS4).addClass('select');
        prevS4 = thisS4;
    }
    sec4Pagechange(thisS4);
    $btn_sec4.click(function () {
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
            TweenMax.to('body,html', .8, {
                scrollTop: promoPos,
                ease: Quart.easeOut
            });
        }
        if (hash != '' && hash == '#promo_1') {
            TweenMax.to('body,html', .8, {
                scrollTop: promoPos,
                ease: Quart.easeOut
            });
            thisS4 = 0;
            sec4Pagechange(thisS4);
        }
        if (hash != '' && hash == '#promo_2') {
            TweenMax.to('body,html', .8, {
                scrollTop: promoPos,
                ease: Quart.easeOut
            });
            thisS4 = 1;
            sec4Pagechange(thisS4);
        }
        if (hash != '' && hash == '#promo_3') {
            TweenMax.to('body,html', .8, {
                scrollTop: promoPos,
                ease: Quart.easeOut
            });
            thisS4 = 2;
            sec4Pagechange(thisS4);
        }
    }
    promoscroll();



    /* 配件頁
    ------------------------------------------------------------*/

    // 金額試算區塊
    $('.aps').find('.detail').find('.listline').each(function(){
        $(this).find('.del').click(function(){
            $(this).closest('.listline').hide();
        })
    })
    $('.aps').find('.detail').find('.listline.group').each(function(){
        $(this).find('.del').click(function(){
            $(this).closest('.box1').find('.listline.group').hide();
        })
    })
    //購物車disable
    $('.aps').find('.btn_cart').each(function(){
        if( $(this).hasClass('checked') ){
            $(this).removeClass('libtn');
            $(this).attr('data-lb','');
        }
    })

    // 選擇顏色
    $('.aps').find('.allcolor').find('p').removeClass('select');
    if( !$('.aps#disable').length ){

        $('.aps').find('.allcolor').each(function () {
           $(this).find('p').click(function () {

                $(this).siblings().removeClass('select'); 
                $(this).toggleClass('select');
                // $(this).parent('.allcolor').find('p').removeClass('select'); 
                // $(this).addClass('select');
           })
        })

    }

   // 回選購
   $('.aps').find('.bottomarea').find('.btn_back').click(function () {
        var _pos = $('.apsCon').offset().top;
        $body.animate({
            scrollTop: _pos
        }, 600);
   })

   // 到試算
   $('.aps').find('.fixbtn').click(function () {
        var _pos = $('.bottomarea').offset().top;
        $body.animate({
            scrollTop: _pos
        }, 600);
   })




    /* lightbox
    ------------------------------------------------------------*/

    var $lb = $('.lb'),
        $lbbox = $('.lbbox');

    var lb_data,
        lb_data2,
        lbname,
        lbname2;

    TweenMax.set($('.lb'), {
        opacity: 0,
        zIndex: -1
    });

    var lbOpen = function (lb_data) {

        var lbAni = new TimelineMax();
        lbAni.to($('.lb[data-lb="' + lb_data + '"]'), .3, {
                css: {
                    zIndex: 9999
                }
            }, '-=.3')
            .to($('.lb[data-lb="' + lb_data + '"]'), .3, {
                opacity: 1,
                ease: Linear.easeNone
            });

        if ($('.restart').length) {
            $('.restart').click(lbClose);
        }

        $body.css({
            'overflow': 'hidden',
            'position': ''
        })
    }


    var lbOpen2 = function (lb_data) {

        var lbAni = new TimelineMax();
        lbAni.to($('.lb2[data-lb2="' + lb_data + '"]'), .3, {
                css: {
                    zIndex: 9999
                }
            }, '-=.3')
            .to($('.lb2[data-lb2="' + lb_data + '"]'), .3, {
                opacity: 1,
                ease: Linear.easeNone
            });

        if ($('.restart').length) {
            $('.restart').click(lbClose);
        }

        $body.css({
            'overflow': 'hidden',
            'position': 'fixed'
        })
    }

    var lbClose = function (lb_data2) {
        var lbCloseAni = new TimelineMax();
        lbCloseAni.to($('.lb'), .3, {
                opacity: 0,
                ease: Linear.easeNone
            })
            .to($('.lb'), .3, {
                css: {
                    zIndex: -1
                }
            });
        $body.css({
            'overflow': '',
            'position': ''
        })
    }

    var lbClose2 = function (lb_data2) {
        var lbCloseAni = new TimelineMax();
        lbCloseAni.to($('.lb2'), .3, {
                opacity: 0,
                ease: Linear.easeNone
            })
            .to($('.lb2'), .3, {
                css: {
                    zIndex: -1
                }
            });


        $body.css({
            'overflow': '',
            'position': ''
        })
    }

    // lbOpen('complete');
    $('.libtn').click(function () {
        var lbname = $(this).data('lb');

        lbOpen(lbname);

        return false;
    });

    $('.libtn2').click(function () {
        var lbname = $(this).data('lb2');

        lbOpen2(lbname);

        return false;
    });


    $('.lb .btn_x,.lb .btnClose').click(function () {
        lbClose();
    });

    $('.lb .btn_ok').click(function () {
        lbClose();
    });


    // 配件刪除
    $('.lb-detail').find('.listline').each(function(){
        $(this).find('.del').click(function(){
            $(this).closest('.listline').hide();
        })
    })
    $('.lb-detail').find('.listline.group').each(function(){
        $(this).find('.del').click(function(){
            $(this).closest('.box1').find('.listline.group').hide();
        })
    })


    





    /* resize
    ------------------------------------------------------------*/

    var _resize = function () {

        winW = $win.width();
        winH = $win.height();
        docH = $(document).height();
        _scroll = $(window).scrollTop();
        scrollBottom = $(window).scrollTop() + $(window).height();
        headerH = $('header').height();

        // promoPos = $('#promo').offset().top;
        promoscroll();

        navde();

    }
    _resize();
    $win.resize(function () {

        _resize();

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

        }

    });



};


$(function () {
    //$('#myheader').load('include/header.html', function() {

    //    if ($('.wrapper').hasClass('com')) {
    //        $('#myheader').find('.nav').find('ul').find('li:nth-child(2)').hide();
    //        $('#myheader').find('.nav').find('ul').find('li:nth-child(3)').hide();
    //        $('#myheader').find('.nav').find('ul').find('li:nth-child(6)').hide();
    //    }

    //});
    $('#myheader').load('cdn/include/header.html');
    $('#myfooter').load('cdn/include/footer.html');

    // script();

    var imagesLoaded = loading();
    imagesLoaded.loadfunc();
    imagesLoaded.callback = function () {

        script();


    };
});