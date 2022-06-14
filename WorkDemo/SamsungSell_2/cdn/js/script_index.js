var $body = $('html,body');
var winH = $(window).height();
var winW = $(window).width();
var $win = $(window);
var scrollBottom = $(window).scrollTop() + $(window).height();
var conH = $('.container').height();
var headerH = $('header').height();
var currentSlide = $('.slick-current').attr('data-slick-index');



// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player = new Array();
var player2 = new Array();

function onYouTubeIframeAPIReady() {
    // s22
    player[0] = new YT.Player('player1', {
        videoId: 'eHHpVwUl5WQ',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player[1] = new YT.Player('player2', {
        videoId: '1XBvKNHBgWo',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player[2] = new YT.Player('player3', {
        videoId: '8ZMPhyIVigM',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player[3] = new YT.Player('player4', {
        videoId: '1XBvKNHBgWo',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player[4] = new YT.Player('player5', {
        videoId: '8ZMPhyIVigM',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player[5] = new YT.Player('player6', {
        videoId: '1XBvKNHBgWo',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player[6] = new YT.Player('player7', {
        videoId: 'eHHpVwUl5WQ',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player[7] = new YT.Player('player8', {
        videoId: 'eHHpVwUl5WQ',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

    // tab8
    player2[0] = new YT.Player('player01', {
        videoId: 'Q85K9W6xizY',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player2[1] = new YT.Player('player02', {
        videoId: 'bBDOS0Cuxa0',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player2[2] = new YT.Player('player03', {
        videoId: '8ZMPhyIVigM',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player2[3] = new YT.Player('player04', {
        videoId: '1XBvKNHBgWo',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player2[4] = new YT.Player('player05', {
        videoId: '8ZMPhyIVigM',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
    player2[5] = new YT.Player('player06', {
        videoId: '1XBvKNHBgWo',
        playerVars: { 'autoplay': 0, 'rel': 0, 'modestbranding': 1 },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}



// 4. The API will call this function when the video player is ready.3
function onPlayerReady(event) {
    // $('.sec2 .vidbox').click(function() {
    //     $(this).find('.cover').fadeOut();
    //     $(this).find('.btn_play').fadeOut();
    //     event.target.playVideo();
    // })
}


// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        // setTimeout(stopVideo, 6000);

        $('.lb-prodintro._s22 .slick-arrow , .lb-prodintro._s22 .btn_x , .lb-prodintro._s22 .vidlist .one').click( function() {
            //loop players array to stop them all
            $(player).each(function(i){
                this.stopVideo();
            });
        });

        $('.lb-prodintro._tab .slick-arrow , .lb-prodintro._tab .btn_x , .lb-prodintro._tab .vidlist .one').click( function() {
            //loop players array to stop them all
            $(player2).each(function(i){
                this.stopVideo();
            });
        });

        done = true;
    }
}






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

    // console.log('location.href: ' + location.href);
    // console.log('location.protocol: ' + location.protocol);
    // console.log('location.hostname: ' + location.hostname);
    // console.log('location.host: ' + location.host);
    // console.log('location.pathname: ' + location.pathname);

    $('.backtop a').click(function() {
        $('html, body').stop().animate({
            scrollTop: true
        }, 400)
    })

    /* slick
   ------------------------------------------------------------*/

    $('.wrapper ._slick').slick({
        infinite: true,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        speed: 800,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                adaptiveHeight: true
              }
            }
          ]
    })

    $('.wrapper ._slick').on('afterChange', function(event,slick, currentSlide, nextSlide){
        var currentSlide = $('.slick-current').attr('data-slick-index')
        if(currentSlide == 0){
            window.location.hash = "s22";
        }
        if(currentSlide == 1){
            window.location.hash = "tabs8";
        }
    });

    if($('.detectDiff').length >0 && winW <=1024){
        console.log('deff');
        var currentSlide = $('.slick-current').attr('data-slick-index');
        if(currentSlide == 0){
            $('.detectDiff').addClass('_diff')
        }else{
            $('.detectDiff').removeClass('_diff')
        }
        $('.wrapper ._slick').on('beforeChange', function(event,slick, currentSlide, nextSlide){
            var currentSlide = $('.slick-current').attr('data-slick-index');
            if(currentSlide == 0){
                $('.detectDiff').removeClass('_diff')
            }
            if(currentSlide == 1){
                $('.detectDiff').addClass('_diff')
            }
        });
    }


    //ticking bar
    var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;
    var isPaused = false;

    $('.progressBarContainer .progressBar').each(function (index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 15);
    }

    function interval() {
        if (($('._slick .slick-track div[data-slick-index="' + progressBarIndex + '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('._slick .slick-track div[aria-hidden="false"]').data("slickIndex");
            startProgressbar();
        } else {
            if (!isPaused) {
                percentTime += 1 / (time + 5);
                $('.inProgress' + progressBarIndex).css({
                    width: percentTime + "%"
                });
                if (percentTime >= 100) {
                    $('._slick').slick('slickNext');
                    progressBarIndex++;
                    if (progressBarIndex > 1) {
                        progressBarIndex = 0;
                    }
                    startProgressbar();
                }
            }
        }
    }

    function resetProgressbar() {
        $('.inProgress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    startProgressbar();
    // End ticking machine

    $('.progressBarContainer div').click(function () {
        clearInterval(tick);
        var goToThisIndex = $(this).find("span").data("slickIndex");
        $('._slick').slick('slickGoTo', goToThisIndex, false);
        startProgressbar();
    });

    $('.sliderController').on('click', function (e) {
        if ($(this).hasClass('pause')) {
            $(this).find('i').removeClass('bi-pause-fill');
            $(this).find('i').addClass('bi-play-fill');
            $(this).removeClass('pause');
            $(this).addClass('play');
            e.preventDefault();
            isPaused = true;
        } else if ($(this).hasClass('play')) {
            $(this).find('i').removeClass('bi-play-fill');
            $(this).find('i').addClass('bi-pause-fill');
            $(this).removeClass('play');
            $(this).addClass('pause');
            e.preventDefault();
            isPaused = false;
        }
    });

    if(window.location.hash) {
        
        var hash = window.location.hash.substring(1); 
        switch (hash) {
            case 's22':
                $('._slick').slick('slickGoTo', 0);
                break;
            case 'tabs8':
                $('._slick').slick('slickGoTo', 1);
                break;
            default:
                $('._slick').slick('slickGoTo', 0);
            
        }

    }



    // s22
    $('.lb-prodintro._s22 .videobox .vidlist').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        // centerPadding: '0',
        asNavFor: '.lb-prodintro._s22 .videobox .mainid',
        // infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        }]
    })
    $('.lb-prodintro._s22 .videobox .mainid').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.lb-prodintro._s22 .videobox .vidlist'
        // centerMode: true,
        // centerPadding: '0'
    })
    // $('.lb-prodintro._s22 .videobox .vidlist').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     var _cur = nextSlide + 1;

    //     $('.lb-prodintro._s22 .videobox .vidlist .slick-slide').click(function () {
    //         $('.lb-prodintro._s22 .videobox .vidlist').slick('slickGoTo', currentSlide);
    //     });

    // });


    // tab8
    $('.lb-prodintro._tab .videobox .vidlist').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        // centerMode: true,
        focusOnSelect: true,
        // centerPadding: '0',
        asNavFor: '.lb-prodintro._tab .videobox .mainid',
        // infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 4
            }
        }]
    })
    $('.lb-prodintro._tab .videobox .mainid').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        asNavFor: '.lb-prodintro._tab .videobox .vidlist'
        // centerMode: true,
        // centerPadding: '0'
    })
    // $('.lb-prodintro._tab .videobox .vidlist').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //     var _cur = nextSlide + 1;

    //     $('.lb-prodintro._tab .videobox .vidlist .slick-slide').click(function () {
    //         $('.lb-prodintro._tab .videobox .vidlist').slick('slickGoTo', currentSlide);
    //     });

    // });

    // $('.lb-prodintro._tab .slick-slider .slick-track').css('transform','translate3d(0, 0, 0)');


    

    $('.flipCorner >a').click(function(){
        $('._slick').slick('slickNext');
    })

    /* 選單
    ------------------------------------------------------------*/

    function navde() {
        $('.mainnav').find('li').removeClass('open');

        $('.burger').attr('toggle', '0');
        $('.burger').removeClass('isclick');

        $('.mainnav').css('height','');

        $('body').css({
            'overflow-y':'',
            'position': '',
            'height':''
        });


        if(winW <= 1024){
            $('.mainnav').hide();
        }else{
            $('.mainnav').show();
        }
    }
    navde();

    var $navbtn = $('.navbtn');

    // $navbtn.click(function() {
    //     navde();
    // });

    $('.flex').click(function(){
        navde();
    });

    function navfunc() {
        var navopen = $('.burger').attr('toggle');
        if( navopen == 0 ){

            $('.mainnav').slideDown();

            $('body').css({
                'overflow-y': 'hidden',
                'position': 'fixed',
                'height':'100%'
            });

            $('.sidebtn').hide();
            $('.slickArrow').hide();

            $('.burger').attr('toggle', '1');
            $('.burger').addClass('isclick');
        }
        else if( navopen == 1 ){

            $('.mainnav').css('height','');
            $('.mainnav').slideUp();

            $('.sidebtn').show();
            $('.slickArrow').show();

            $('body').css({
                'overflow-y':'',
                'position': '',
                'height':''
            });

            $('.burger').attr('toggle', '0');
            $('.burger').removeClass('isclick');

        }
    }
    $('.burger').click(navfunc);


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
    // var lbname = 'popup';

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

        $('.lb[data-lb="' + lb_data + '"]').addClass('open');

        $body.css({
            'overflow': 'hidden',
            'position': 'fixed'
        })
    }

    var lbClose = function (lb_data2) {

        // var lbCloseAni = new TimelineMax();
        //     lbCloseAni.to($('.lb[data-lb="'+lb_data2+'"]') , .3 ,{opacity:0  ,ease:Linear.easeNone})
        //               .to($('.lb[data-lb="'+lb_data2+'"]') , .3 ,{css:{zIndex:-1}});

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

        $('.lb').removeClass('open');

        $body.css({
            'overflow': '',
            'position': ''
        })

    }

    // lbOpen('prodintro_tab8');
    $('.libtn').click(function () {
        var lbname = $(this).data('lb');
        // var ytid = $(this).attr('ytid');

        lbOpen(lbname);

        return false;
    });


    $('.lb .btn_x').click(function () {
        // var rootlbname = $(this).parents('.lb').data('lb');

        lbClose();
    });

    // }
    // lightbox();


    $(document).mouseup(function (e) {
        var _con = $('.lbbox,.lbbox2'); // 设置目标区域

        if ($('.lb').hasClass('open')) {
            if (!_con.is(e.target) && _con.has(e.target).length === 0) { // Mark 1
                lbClose();
            }
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
        headerH = $('header').height();
        navde();

        if(winW >= 768){
            $('.flipPaper').removeClass('flip')
            $('.flipCorner > a').hover(function () {
                $(this).siblings('.flipPaper').toggleClass('flip');
            });
        }else{
            $('.flipPaper').addClass('flip')
        }

        if($('.detectDiff').length >0 && winW <=1024){
            console.log('deff');
            currentSlide = $('.slick-current').attr('data-slick-index');
            if(currentSlide == 0){
                $('.detectDiff').addClass('_diff')
            }else{
                $('.detectDiff').removeClass('_diff')
            }
        }

    }
    _resize();


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
    $('#myfooter').load('cdn/include/footer.html');
    var imagesLoaded = loading();
    imagesLoaded.loadfunc();
    imagesLoaded.callback = function () {

        script();

    };
});