var script = function () {
    var $body = $('html,body');
    // var winH = $(window).height();
    var winW = $(window).width();
    var $win = $(window);
    var scrollBottom = $(window).scrollTop() + $(window).height();
    var headerH = $('header').outerHeight(true);



    /* header fix ---------------------------------------------------*/

    var _topH = $('.navbar').outerHeight(true);

    function headerfix() {
        var _scroll = $win.scrollTop();

        if( winW >=768.5 ){

        }else{
            $('.kv').css('marginTop', _topH +'px');

            if (_scroll >= _topH) {
                $('header .logo').slideUp(300);
            } else {
                $('header .logo').slideDown(300);
            }
        }

    }
    headerfix();
    $win.scroll(headerfix);



    /* AOS ------------------------------------------------------------*/

    AOS.init({
        offset: 100,
        duration: 350,
        once: true,
    });

    // 通知AOS刷新元素，應用新的設置
    // AOS.refresh();

    let scrollRef = 0;
    $(window).on("resize scroll", function () {
        // increase value up to 10, then refresh AOS
        scrollRef <= 10 ? scrollRef++ : AOS.refresh();
    });

    AOS.refresh();




    /* slick ------------------------------------------------------------*/

    $('.sec').each(function(){
        var $this = $(this);
        var $sectab = $this.find('.sectab');
        var $inner = $this.find('.inner');

        // 確保 sectab 有 class 屬性
        if ($sectab.length > 0 && $sectab.attr('class')) {
            // 提取 `split` 類名中的數字
            var splitClass = $sectab.attr('class').match(/split(\d+)/);
            var slidesToShow = splitClass ? parseInt(splitClass[1]) : 2; // 默認值為 2
        } else {
            var slidesToShow = 2; // 默認值為 2
        }

        $inner.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            adaptiveHeight: true,
            // asNavFor: $sectab
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    dots: true
                  }
                }
            ]
        });

        $sectab.slick({
            slidesToShow: slidesToShow,
            slidesToScroll: 1,
            asNavFor: $inner,
            dots: false,
            centerMode: false,
            focusOnSelect: false
        });

        // 確保每個 li 元素有正確的 data-slickIndex
        $sectab.find('.slick-slide').each(function(index) {
            $(this).attr('data-slickIndex', index);
        });

        $sectab.on('click', '.slick-slide', function (event) {
            var index = $(this).data('slickIndex');
            $sectab.find('.slick-slide').removeClass('select');
            $(this).addClass('select');
            $inner.slick('slickGoTo', index);
        });

        $inner.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            $sectab.find('.slick-slide').removeClass('select');
            $sectab.find('.slick-slide').eq(nextSlide).addClass('select');
        });

        // // 使用 afterChange 確保在切換後正確同步
        // $inner.on('afterChange', function(event, slick, currentSlide){
        //     $sectab.find('.slick-slide').removeClass('select');
        //     $sectab.find('.slick-slide').eq(currentSlide).addClass('select');
        // });

        $sectab.find('.slick-slide').first().addClass('select');
    });


    // $('.sec .inner').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     dots: true
    //     // asNavFor: '.slider-nav'
    // })

    // $('.sectab').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: false,
    //     centerMode: false,
    //     focusOnSelect: false
    // });

    // $('.sectab .slick-slide').on('click', function (event) {
    //     $('.sectab .slick-slide').removeClass('select');
    //     $(this).addClass('select');
    //     $('.sec .inner').slick('slickGoTo', $(this).data('slickIndex'));
    // });

    // $('.sec .inner').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    //     $('.sectab .slick-slide').removeClass('select');
    //     $('.sectab .slick-slide').eq(nextSlide).addClass('select')
    // });





    /* 選單 ------------------------------------------------------------*/

    function navde() {
        $('.burger').attr('toggle', '0');
        $('.burger').removeClass('isclick');

        $('body,html').css({
            'overflow': '',
            'height': ''
        })

        if (winW > 768) {
            $('.nav').show();
            $('.nav').css('display', 'flex');
        } else {
            // $('.nav').slideUp(0);
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

        } else if (menuOpen == 1) {

            $('.nav').slideUp();

            $('.burger').attr('toggle', '0');
            $('.burger').removeClass('isclick');

            $('body,html').css({
                'overflow': '',
                'height': ''
            })

            if (winW <= 1024) {
                TweenMax.to($('#myheader').find('.container'), 1, {
                    backgroundColor: '#000',
                    ease: Linear.easeNone
                });
            }
        }

    });




    /* page nav
    ------------------------------------------------------------*/

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
        pageName = ['kv', 's1', 's2','s3', 's4','s5','s6','s7'];

    var _thispagescroll = pageName.indexOf(hash);

    var navbarH = $('.navbar').outerHeight(true);

    // var hash = location.hash;

    var $navbtn = $('.navbtn');



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

        // console.log($('.kv'))
    }

    var menuselect = function() {
        $navbtn.removeClass('select');

        pageReset();

        $('.navbtn[data-page="' + thispage + '"]').addClass('select');
    }

    var menuscroll = function(n) {
        var _pos;
        thispage = n;
        pageReset();

        // TweenMax.to('body,html', .8, { scrollTop: pageT[thispage] - headerH, ease: Quart.easeOut });
        // TweenMax.to('body,html', .8, { scrollTop: pageT[thispage]  , ease: Quart.easeOut });

        if( winW > 768 ){
            TweenMax.to('body,html', .8, { scrollTop: pageT[thispage] - navbarH , ease: Quart.easeOut });
        }else{
            TweenMax.to('body,html', .8, { scrollTop: pageT[thispage] - navbarH /2  , ease: Quart.easeOut });
        }

    }


    var scrollPage = function(wt, whelf) {
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


    var scrollthispage = function() {
        var _pos;
        _thispagescroll = pageName.indexOf(hash.substr(1));

        pageReset();

        if (_thispagescroll != -1) {
            thispage = pageName.indexOf(hash.substr(1));

            pageReset();

            if (thispage == 0) {

                TweenMax.to('body,html', .8, { scrollTop: 0, ease: Quart.easeOut });

                // $('body,html').stop().animate({
                //     scrollTop: 0
                // }, 100);

            } else {

                // TweenMax.to('body,html', .8, { scrollTop: pageT[thispage] , ease: Quart.easeOut });

                if( winW > 768 ){
                    TweenMax.to('body,html', .8, { scrollTop: pageT[thispage] - navbarH , ease: Quart.easeOut });
                }else{
                    TweenMax.to('body,html', .8, { scrollTop: pageT[thispage]  - headerH , ease: Quart.easeOut });
                }

                // $('body,html').stop().animate({
                //     scrollTop: pageT[thispage]
                // }, 500);

            }

            menuselect();
            href = pageName[thispage];
            window.location.hash = href;
            pagescroll = false;

        } else {

            TweenMax.to('body,html', .8, { scrollTop: 0, ease: Quart.easeOut });

        };

    }
    scrollthispage();
    // setTimeout(function() {
    //     scrollthispage()
    // }, 1000);

    $navbtn.click(
        function() {
            var n = $(this).data('page');

            menuscroll(n);

            navde();
        }
    );




    /* tab切換 ------------------------------------------------------------*/

    // var $sec = $('.sec');
    // var $seccon = $sec.find('.con');

    // $sec.find('.con[data-con="0"]').fadeIn();

    // $sec.each(function(){
    //     $(this).find('.sectab').find('li').click(function(){
    //         var cur = $(this).index();

    //         $(this).parent().find('li').removeClass('select');
    //         $(this).addClass('select');

    //         $(this).closest('.container').find('.con').hide();
    //         $(this).closest('.container').find('.con[data-con="' + cur + '"]').fadeIn(500);
    //     })
    // })





    /* lightbox ------------------------------------------------------------*/

    TweenMax.set($('.lb'), {
        opacity: 0,
        zIndex: -1,
    });

    var lbOpen = function (lb_data) {
        var lbAni = new TimelineMax();
        lbAni
            .to(
                $('.lb[data-lb="' + lb_data + '"]'),
                0.3,
                {
                    css: {
                        zIndex: 9999,
                    },
                },
                '-=.3'
            )
            .to($('.lb[data-lb="' + lb_data + '"]'), 0.3, {
                opacity: 1,
                ease: Linear.easeNone,
            });

        $('body,html').css({
            overflow: 'hidden',
            position: '',
        });
    };

    var lbClose = function (lb_data2) {
        var lbCloseAni = new TimelineMax();
        lbCloseAni
            .to($('.lb'), 0.3, {
                opacity: 0,
                ease: Linear.easeNone,
            })
            .to($('.lb'), 0.3, {
                css: {
                    zIndex: -1,
                },
            });
        $('body,html').css({
            overflow: '',
            position: '',
        });
    };

    lbOpen('alert');
    $('.libtn').click(function () {
        var lbname = $(this).data('lb');

        lbOpen(lbname);
        lb_Scrollbar(lbname);
        return false;
    });

    $('.lb .btn_x,.lb .btnClose').click(function () {
        lbClose();
    });



    /* resize
    ------------------------------------------------------------*/

    var _resize = function () {
        winW = $win.width();
        // winH = $win.height();
        docH = $(document).height();
        _scroll = $(window).scrollTop();
        scrollBottom = $(window).scrollTop() + $(window).height();
        headerH = $('header').outerHeight(true);
        // conH = $('.wrapper').height();

        navde();

    };
    $win.scroll(scrollPage);
    _resize();

    // $win.resize(function () {

    //     _resize();

    // });

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


    /* GET JSON ------------------------------------------------------------*/

    // const apiUrl = "json/json.json"; // 本地 JSON 檔案的路徑
    // const apiUrl = "https://www.uobam.com.tw/json/reply/WebSiteFrontRequest?r=%2Fpopup";
    const apiUrl = "https://www.uobam.com.tw/json/reply/WebSiteFrontRequest?r=%2Fpopup";

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {

            console.log("Fetched data:", data);


            const pageId = "00959B";
            const targetData = data.result.find(item => item.value03 === pageId);


            if (targetData) {
                document.querySelector('.lb').style.display = 'block';

                const contentHTML = targetData.contents;

                if (contentHTML) {

                    const parser = new DOMParser();
                    const contentDoc = parser.parseFromString(contentHTML, "text/html");


                    const newLink = contentDoc.querySelector("a");
                    const newImg = contentDoc.querySelector("img");


                    console.log("Extracted <a>:", newLink);
                    console.log("Extracted <img>:", newImg);

                    if (newLink) {

                        const accessLink = document.getElementById("accessLink");
                        accessLink.href = newLink.href;
                        accessLink.target = newLink.target || "_blank";
                        console.log("Link href:", newLink.href);
                        console.log("Link target:", accessLink.target);
                    }

                    if (newImg) {

                        const accessImg = document.getElementById("accessImg");
                        accessImg.src = newImg.src;
                        accessImg.alt = newImg.alt;
                        console.log("Image src:", newImg.src);
                        console.log("Image alt:", newImg.alt);
                    }
                } else {
                    console.warn("No contentHTML found in target data.");
                }
            } else {
                document.querySelector('.lb').style.display = 'none';
                console.warn("No data found with value03 equal to '00959B'.");
            }
        })
        .catch(error => {
            console.error("Error fetching or parsing JSON:", error);
        });



};


$(function () {
    // $('.header').load('include/header.html');
    // $('.footer').load('include/footer.html');

    var imagesLoaded = loading();
    imagesLoaded.loadfunc();
    imagesLoaded.callback = function () {
        script();
    };
});
