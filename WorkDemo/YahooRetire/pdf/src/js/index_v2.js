var $win = $(window);
var winW = $win.innerWidth();
var winH = $win.innerHeight();
var $doc = $(document);
var bodyH;
var $header;
let footerTop;
let footerH;
let sectionPos;
let headerTopH;
let nowPos;
let iscroll;

var url = location.search;
var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

var ret = window.devicePixelRatio;

var slide = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    adaptiveHeight: false,
}

// let vh = window.innerHeight * 0.01;
// document.documentElement.style.setProperty('--vh', `${vh}px`);

// includesLoader({
//     // callback: mainFunc,
//     includesList: [{
//         target: ".page-header",
//         fileName: "header"
//     }, {
//         target: ".page-footer",
//         fileName: "footer"
//     }]
// });

listenImagesLoading(
    $('img'),
    mainFunc,
    function (per, instance) {
        // console.log(per);
    }
);

// if(winW > 768){
//     var indexAni = new TimelineMax({ paused: true});
//     indexAni
//     .from('.kv', 1, { opacity: 0,x:-10, ease: Power2.easeOut }, '+=0')
//     .from('.slogan', 1, { opacity: 0,y:5, ease: Power2.easeOut }, '+=0')
//     .from('.des', 1, { opacity: 0, ease: Power2.easeOut }, '-=.2')
// }else{
//     var indexAni = new TimelineMax({ paused: true});
//     indexAni
//     .from('.kv', 1, { opacity: 0, ease: Power2.easeIn }, '+=0')
//     .from('.slogan', 1, { opacity: 0, ease: Power2.easeOut }, '-=0')
//     .from('.des', 1, { opacity: 0, ease: Power2.easeOut }, '-=.2')
// }

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

var fz1 = winW < winH ? winW* 0.025 : winH* 0.028;
// var fz2 = winW < winH ? winW* 0.04 : winW/winH* 20;
// var respon = device.desktop() ? false : true;
// var donutP = winH*0.06;
var ratio = winW < winH ? 1.3 : 1;

// var ratio = ret;

if(device.desktop() && ret === 1){
    // console.log('1')
    var donutP = winH*0.08;
    var fz2 = winW/winH* 15;
    var respon = false;
    var maintainRatio = true;
}
if(device.desktop() && ret === 2){
    // console.log('2')
    var donutP = winH*0.15 / 2;
    var fz2 = winW/winH* 13;
    var respon = true;
    var maintainRatio = false;
}
if(device.tablet() && device.landscape()){
    var donutP = winH*0.08;
    var fz2 = winW/winH* 15;
    var respon = true;
    var maintainRatio = false;
}
// if(device.tablet() && device.portrait()){
//     var donutP = winW*0.06;
//     var fz2 = winW* 0.03;
//     var respon = true;
// }
if(device.mobile()){
    var donutP = winW*0.12;
    var fz2 = winW* 0.04;
    var respon = true;
    var maintainRatio = true;
}

var colors =  [
    "#7c5baf",
    "#5f9199",
    "#7e7c43",
    "#eea23b",
    "#d6463c"
]

var colors2 =  [
    "#5f9199",
    "#7e7c43",
    "#eea23b",
    "#d6463c"
]
var colors3 =  [
    "#7c5baf",
    "#a5a5a5",
]

var data3_1 = {
    datasets: [
        {
            data: [5, 31, 36, 12, 16],
            backgroundColor: colors,
            hoverOffset: 0,
            hoverBackgroundColor: colors		
        }]
};
var data3_2 = {
    datasets: [
        {
            data: [31, 16, 27, 17, 9],
            backgroundColor: colors,
            hoverOffset: 0,
            hoverBackgroundColor: colors	
        }]
};
var data4_1 = {
    datasets: [
        {
            data: [14, 40, 33, 13],
            backgroundColor: colors,
            hoverOffset: 0,
            hoverBackgroundColor: colors
        }]
};
var data5_1 = {
    datasets: [
        {
            data: [57,43],
            backgroundColor: colors3,
            hoverOffset: 0,
            hoverBackgroundColor: colors3
        }]
};
var data5_2 = {
    datasets: [
        {
            data: [28, 25, 19, 10, 18],
            backgroundColor: colors,
            hoverOffset: 0,
            hoverBackgroundColor: colors
        }]
};
var data13_1 = {
    datasets: [
        {
            data: [13, 39, 26, 7, 15],
            backgroundColor: colors,
            hoverOffset: 0,
            hoverBackgroundColor: colors
        }]
};
var data13_2 = {
    datasets: [
        {
            data: [4, 34, 33, 11, 18],
            backgroundColor: colors,
            hoverOffset: 0,
            hoverBackgroundColor: colors
        }]
};
var data13_3 = {
    datasets: [
        {
            data: [17, 51, 16, 16],
            backgroundColor: colors2,
            hoverOffset: 0,
            hoverBackgroundColor: colors2
        }]
};
var data15_1 = {
    datasets: [
        {
            data: [60,40],
            backgroundColor: colors3,
            hoverOffset: 0,
            hoverBackgroundColor: colors3
        }]
};
var data15_2 = {
    datasets: [
        {
            data: [58,42],
            backgroundColor: colors3,
            hoverOffset: 0,
            hoverBackgroundColor: colors3
        }]
};
var data15_3 = {
    datasets: [
        {
            data: [51,49],
            backgroundColor: colors3,
            hoverOffset: 0,
            hoverBackgroundColor: colors3
        }]
};
var data17_1 = {
    datasets: [
        {
            data: [54,46],
            backgroundColor: colors,
            hoverOffset: 0,
            hoverBackgroundColor: colors
        }]
};
var data17_2 = {
    datasets: [
        {
            data: [4,25,41,30],
            backgroundColor: colors,
            hoverOffset: 0,
            hoverBackgroundColor: colors
        }]
};
var data17_3 = {
    datasets: [
        {
            data: [30,100],
            backgroundColor: colors3,
            hoverOffset: 0,
            hoverBackgroundColor: colors3
        }]
};
// var data4_2 = {
//     labels: ["生活目標", "社交網路", "財富規劃", "健康狀況"],
//     datasets: [{
//         label: [44, 30, 25, 25],
//         data: [100, 70, 55, 55],
//         fill: true,
//         backgroundColor: colors
//     }]
// };

var donutOptions = { 
	cutoutPercentage:donutP,
    responsive:respon,
    maintainAspectRatio: maintainRatio,
    aspectRatio:ratio,

    animation:{
        animateRotate: true,
        // render: false,
        duration: 1800
    },
    
    elements: {
        arc: {
            borderWidth: 0
        }
    },
    tooltips: {
        enabled: false
    },
    legend: {
        display: false,
    },
    plugins: {
        labels: {
            render: 'percentage',
            precision: 0,
            fontSize: fz2,
            fontColor: '#fff',
            fontStyle: "900",
            fontFamily: "Arial, 'Noto Sans TC', Helvetica, sans-serif, '微軟正黑體', '蘋果儷黑體', '新細明體'",
            // padding: fz1,
          }
    }
};

var donutOptions2 = { 
	cutoutPercentage:donutP,
    responsive:true,
    maintainAspectRatio: true,
    aspectRatio:ratio,

    animation:{
        animateRotate: true,
        // render: false,
        duration: 1800
    },
    
    elements: {
        arc: {
            borderWidth: 0
        }
    },
    tooltips: {
        enabled: false
    },
    legend: {
        display: false,
    },
    plugins: {
        labels: {
            render: null,
            precision: 0,
            fontSize: 0,
            fontColor: 'transparent',
            padding: 0,
        }
    }
};

var pieOptions = { 
	// cutoutPercentage:donutP,
    // responsive:respon,
    // maintainAspectRatio: maintainRatio,
    aspectRatio:ratio,

    animation:{
        animateRotate: true,
        // render: false,
        duration: 1800
    },
    rotation: -0.74 * Math.PI,
    elements: {
        arc: {
            borderWidth: 0
        }
    },
    tooltips: {
        enabled: false
    },
    legend: {
        display: false,
    },
    plugins: {
        labels: {
            render: null,
            precision: 0,
            fontSize: 0,
            fontColor: 'transparent',
            padding: 0,
        }
    }
};

// BAR CHART

// var hzbarOptions = {
//     responsive:true,
//         // maintainAspectRatio: false,
//         aspectRatio:1.2,
//         animation: {
//             easing: "easeOutQuart"
//         },
//         tooltips: {
//             enabled: false
//         },
//         legend: {
//             display: false,
//             position: 'left',
//             onClick: false,
//             usePointStyle: false,
//             labels: {
//                 boxWidth: fz1,
//                 fontSize: fz1,
//                 fontColor: '#fff',
//                 fontFamily: "Arial, 'Noto Sans TC', Helvetica, sans-serif, '微軟正黑體', '蘋果儷黑體', '新細明體'",
//                 padding: fz1+5,
//               }
//         },
//         scales: {
//             yAxes: [{
//                 barPercentage: 0.7,
//                 categoryPercentage: 0.7,
//                 ticks: {
//                     fontColor: "#000",
//                     fontSize: fz1+5,
//                     fontStyle: "900",
//                     beginAtZero: true,
//                     padding: 15,
// 					// display: false
//                 },
//                 gridLines: {
//                     drawTicks: false,
//                     display: false,
// 					color: "transparent",
// 					zeroLineColor: "transparent"
//                 }
//             }],
//             xAxes: [{
//                 gridLines: {
// 					display: false,
// 					color: "transparent",
// 					zeroLineColor: "transparent"
//                 },
//                 ticks: {
// 					display: false,
//                     padding: 15,
// 					beginAtZero: true,
//                     fontColor: "#000",
//                     fontStyle: "900",
// 					maxTicksLimit: 20
//                 }
//             }]
//         },
//         plugins: {
//             labels: {
//                 render: null,
//                 precision: 0,
//                 fontSize: fz1+5,
//                 fontColor: '#fff',
//                 fontStyle: "900",
//                 fontFamily: "Arial, 'Noto Sans TC', Helvetica, sans-serif, '微軟正黑體', '蘋果儷黑體', '新細明體'",
//                 padding: fz1+5,
//               },
//             datalabels: {
//                 formatter: (value, ctx) => {

//                     let datasets = ctx.chart.data.datasets;

//                     if (datasets.indexOf(ctx.dataset) === datasets.length - 1) {
//                         let sum = 0;
//                         datasets.map(dataset => {
//                             sum += dataset.label[ctx.dataIndex];
//                         });
//                         let percentage = sum + '%';
//                         return percentage;
//                     } else {
//                         return percentage;
//                     }

                    
//                 },
//                 color: '#fff',
//                 align: 'right',
//                 font: {
//                     weight: '900',
//                     size: fz1+5
//                 }
//             }
//         }
// }

function chartA(){
    var chart1 = new Chart($('#chart1'), {
        type: 'doughnut',
        data: data3_1,
        options: donutOptions
    });
    var chart2 = new Chart($('#chart2'), {
        type: 'doughnut',
        data: data3_2,
        options: donutOptions
    });
    var chart3 = new Chart($('#chart3'), {
        type: 'doughnut',
        data: data4_1,
        options: donutOptions
    });
    var chart4 = new Chart($('#chart4'), {
        type: 'doughnut',
        data: data5_1,
        options: donutOptions2
    });
    var chart5 = new Chart($('#chart5'), {
        type: 'doughnut',
        data: data5_2,
        options: donutOptions
    });
}
function chartB(){
    var chart6 = new Chart($('#chart6'), {
        type: 'doughnut',
        data: data13_1,
        options: donutOptions
    });
    var chart7 = new Chart($('#chart7'), {
        type: 'doughnut',
        data: data13_2,
        options: donutOptions
    });
    var chart8 = new Chart($('#chart8'), {
        type: 'doughnut',
        data: data13_3,
        options: donutOptions
    });
}
function chartC(){
    var chart9 = new Chart($('#chart9'), {
        type: 'doughnut',
        data: data15_1,
        options: donutOptions2
    });
    var chart10 = new Chart($('#chart10'), {
        type: 'doughnut',
        data: data15_2,
        options: donutOptions2
    });
    var chart11 = new Chart($('#chart11'), {
        type: 'doughnut',
        data: data15_3,
        options: donutOptions2
    });
    var chart12 = new Chart($('#chart12'), {
        type: 'doughnut',
        data: data17_1,
        options: donutOptions
    });
    var chart13 = new Chart($('#chart13'), {
        type: 'doughnut',
        data: data17_2,
        options: donutOptions
    });
}

chartA();
chartB();
chartC();


$(function () {

    $('._slick').slick(slide);

    $("#fullpage").fullpage({
		scrollOverflow: true,
        navigation: false,
		onLeave: function (index, nextIndex, direction) {
			// console.log(index, nextIndex, direction);

            $(".hzBarChartA .bar, .hzBarChartB .bar, #section20 .bar").css({'width': 0});
            $(".barChartA .bar").css({'height': 0});
            $('#goTop').css({'opacity':'1', 'pointerEvents':'all'});

            if(nextIndex == 1){
                $('#goTop').css({'opacity':'0', 'pointerEvents':'none'});
            }
			
            if (nextIndex == 3) {
                setTimeout(function(){
                    chartA();
                },300)
            }
            if (nextIndex == 4) {
                setTimeout(function(){
                    chartA();
                },300)
                // $("#section3 .hzBarChartA .bar").each(function(index) {
                //     var endWidth = $(this).data('width');
                //     $(this).css({'width': endWidth + '%'});
                // });

                // $("#section3 .hzBarChartA .bar .barNum").each(function( index,element ) {
                //     var currentNumber = $(element).text();
                //     var endNumber = $(this).data('num');
                //     $({numberValue: currentNumber}).animate({numberValue: endNumber}, {
                //         duration: 1800,
                //         easing: 'linear',
                //         step: function (now) {
                //             $(element).text(now.toFixed(0)+'%');
                //         }
                //     });
                // });
                var el = $("#section3 .hzBarChartA .bar");
                var el2 = $("#section3 .hzBarChartA .bar .barNum");
                runBarWidth(el);
                runBarNum(el2);
            }
            if (nextIndex == 5) {
                var el = $("#section4 .per");
                runBarNum(el);
            }
            if (nextIndex == 6) {
                setTimeout(function(){
                    chartA();
                },300)

                var el = $("#section5 .hzBarChartB .bar");
                var el2 = $("#section5 .hzBarChartB .bar .barNum, .centerNum");
                runBarWidth(el);
                runBarNum(el2);

                $('#section5 ._slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
                    $("#section5 .slides .hzBarChartB .bar").css({'width': 0});
                    el = $("#section5 .slick-active .hzBarChartB .bar");
                    el2 = $("#section5 .slick-active .hzBarChartB .bar .barNum, .centerNum");
                    runBarWidth(el);
                    runBarNum(el2);
                    chartA();
                });

            }
            if (nextIndex == 7) {
                $("#section6 .barChartA .bar").each(function(index) {
                    var endNumber = $(this).data('height');
                    $(this).css({'height': endNumber + '%'});
                });

                var el = $("#section6 .barChartA .bar .barNum");
                runBarNum(el);
            }
            if (nextIndex == 8) {
                var el = $("#section7 .hzBarChartB .bar");
                var el2 = $("#section7 .hzBarChartB .bar .barNum");
                runBarWidth(el);
                runBarNum(el2);
            }
            if (nextIndex == 9) {
                var el = $("#section8 .circleNum .num");
                runNum(el);
            }
            if (nextIndex == 10) {
                var el = $("#section9 .circleNum .num");
                runNum(el);
            }
            if (nextIndex == 11) {
                var el = $("#section10 .circleNum .num");
                runNum(el);
            }
            if (nextIndex == 13) {
                setTimeout(function(){
                    chartB();
                },300)

                $('#section12 ._slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
                    chartB();
                });
            }
            if (nextIndex == 14){
                var el = $("#section13 .slick-active .hzBarChartB .bar");
                var el2 = $("#section13 .slick-active .hzBarChartB .bar .barNum");
                runBarWidth(el);
                runBarNum(el2);

                $('#section13 ._slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
                    $("#section13 .slides .hzBarChartB .bar").css({'width': 0});
                    el = $("#section13 .slick-active .hzBarChartB .bar");
                    el2 = $("#section13 .slick-active .hzBarChartB .bar .barNum");
                    runBarWidth(el);
                    runBarNum(el2);
                });
            }
            if (nextIndex == 15) {
                setTimeout(function(){
                    chartC();
                },300)

                var el = $("#section14 .centerNum");
                runBarNum(el);

                $('#section14 ._slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
                    el = $("#section14 .centerNum");
                    runBarNum(el);
                    chartC();
                });
            }
            if (nextIndex == 18) {
                setTimeout(function(){
                    chartC();
                    var chart14 = new Chart($('#chart14'), {
                        type: 'pie',
                        data: data17_3,
                        options: pieOptions
                    });
                },300)
                var el = $("#section17 .num");
                runNum(el);

                $('#section17 ._slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
                    var chart14 = new Chart($('#chart14'), {
                        type: 'pie',
                        data: data17_3,
                        options: pieOptions
                    });
                    el = $("#section17 .num");
                    runNum(el);
                    chartC();
                });
            }
            if (nextIndex == 19) {
                var el = $("#section18 .hzBarChartA .bar");
                var el2 = $("#section18 .hzBarChartA .bar .barNum");
                runBarWidth(el);
                runBarNum(el2);
            }
            if (nextIndex == 20) {
                $("#section19 .slick-active .barChartA .bar").each(function(index) {
                    var endNumber = $(this).data('height');
                    $(this).css({'height': endNumber + '%'});
                });

                // var el = $("#section19 .hzBarChartB .bar");
                var el2 = $("#section19 .barChartA .bar .barNum");
                // runBarWidth(el);
                runBarNum(el2);

                $('#section19 ._slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
                    $("#section19 .slides .hzBarChartB .bar").css({'width': 0});
                    $("#section19 .slides .barChartA .bar").css({'height': 0});

                    $("#section19 .slick-active .barChartA .bar").each(function(index) {
                        var endNumber = $(this).data('height');
                        $(this).css({'height': endNumber + '%'});
                    });
                    
                    el = $("#section19 .slick-active .hzBarChartB .bar");
                    el2 = $("#section19 .slick-active .hzBarChartB .bar .barNum, #section19 .slick-active .barChartA .bar .barNum");
                    runBarWidth(el);
                    runBarNum(el2);
                });
            }
            if (nextIndex == 21) {
                var el = $("#section20 .bar");
                var el2 = $("#section20 .barNum");
                runBarWidth(el);
                runBarNum(el2);
            }
            if (direction == "down") {
                for(var i=0; i<nextIndex; i++ ){
                    $(".bg"+i).addClass("pass").css({
                        clip: "rect(0px " + winW + "px 0px 0px)"
                    });
                }
                $(".bg" + nextIndex).removeClass("pass").css({
					clip: "rect(0px " + winW + "px " + winH + "px 0px)"
				});
			}
			if (direction == "up") {
				if (nextIndex == 2) {
                    
				}
				$(".bg" + nextIndex).removeClass("pass").css({
					clip: "rect(0px " + winW + "px " + winH + "px 0px)"
				});
			}
		},
		afterRender: function () {
			winH = window.innerHeight;
			winW = $(window).width();
            
			$(".bg").css({
				clip: "rect(0px " + winW + "px " + winH + "px 0px)"
			});
		},
		afterResize: function () {
			winH = window.innerHeight;
			winW = $(window).width();
			$(".bg.pass").css({
				clip: "rect(0px " + winW + "px 0px 0px)"
			});
			$(".bg:not(.pass)").css({
				clip: "rect(0px " + winW + "px " + winH + "px 0px)"
			});
		},
		afterLoad: function(){
			// iscroll = $('#section5').find('.fp-scrollable').data('iscrollInstance');
		}
	});

    $('.tabBox a').click(function(){
        var goto = $(this).data('goto');
        $(this).parent().next('._slick').slick('slickGoTo', goto);
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
    })

    $('._slick.slickgo2').slick('slickGoTo', 1);

    $('._slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $(this).prev('.tabBox').find('a').removeClass('active');
        $(this).prev('.tabBox').find('a').eq(nextSlide).addClass('active');
    });

    $(document).on('click', '#goTop', function(){
		$.fn.fullpage.moveTo(1);
        $(".bg").removeClass("pass").css({
            clip: "rect(0px " + winW + "px " + winH + "px 0px)"
        });
    })

    $(document).on('click', '.scrollDown', function(){
		$.fn.fullpage.moveTo(2);
    })


});

function mainFunc() {

    windowEvents();

    transitionThenRemove({
        dom: $(".page-loading"),
        duration: DURATION.SLOW,
        callback: function () {
            console.log("%cBuild Completed!", logSafeStyle);
            // indexAni.play();
        }
    });
}

function windowEvents() {
    $win.on("resize", _resize).resize()
    // $win.on("scroll", _scroll).scroll();
    // if (nowPos.top >= sectionPos[1]) {
    //     infoAni.play();
    //     bottomAni.play();
    //     return false;
    // }
}

function _resize() {
    getSize();
    // 769 < winW ? resizePC() : resizeMB();
    // getSectionPos();

    if(device.desktop()){
        resizePC();
    }
    
    if(device.mobile()){
        resizeMB();
    }
}

function getSize() {
    winW = $win.outerWidth(), winH = $win.outerHeight();
    // footerTop = $('.page-footer').offset().top;
    footerH = $('.page-footer').height();
    bodyH = $("main").outerHeight();
    headerTopH = $('.header-top').height();
    fz1 = winW < winH ? winW* 0.025 : winH* 0.028;
    fz2 = winW < winH ? winW* 0.018 : winH* 0.045;
    donutP = winH*0.06;
    ratio = winW < winH ? 1.3 : 1;
}

function resizePC() {
    // $('main').removeClass('mb');
    // $('main').addClass('pc');
}


function resizeMB() {
    // $('main').removeClass('pc');
    // $('main').addClass('mb');
}

function getSectionPos() {
    sectionPos = [];

    $.each($('main .detectTop'), (idx, el) => {
    sectionPos.push(Math.floor($(el).offset().top));
    });
}


function _scroll() {
    getPos();
    // scrollDetect();
    // if (nowPos.top >= sectionPos[1] - winH /2 && nowPos.top <= sectionPos[1] ) {
    //     infoAni.play();
    //     return false;
    // }
    // if (nowPos.top >= sectionPos[2] - winH /2 && nowPos.top <= sectionPos[2] ) {
    //     bottomAni.play();
    //     return false;
    // }
}

function getPos() {
    nowPos = {
        x: $doc.scrollLeft(),
        y: $doc.scrollTop(),
        top: $doc.scrollTop() + headerTopH
    };
}

// function scrollDetect() {
  
//     $.each(sectionPos, (idx, val) => {

//       if (nowPos.top > sectionPos[0]) {
//         $doc.stop().animate({
//             scrollTop: $('#sec2').offset().top
//         });
//         return false;
//       }else if(nowPos.top < sectionPos[1] && nowPos.top > sectionPos[0]){
//         $doc.stop().animate({
//             scrollTop: 0
//         });
//       }

//     });
// }

function runBarWidth(el){
    el.each(function(index, element) {
        var endWidth = $(this).data('width');
        $(this).css({'width': endWidth + '%'});
    });
}

function runBarNum(el){
    el.each(function(index, element) {
        var currentNumber = '0%';
        var endNumber = $(this).data('num');
        $({numberValue: currentNumber}).animate({numberValue: endNumber}, {
            duration: 1800,
            easing: 'linear',
            step: function (now) {
                $(element).text(now.toFixed(0)+'%');
            }
        });
    });
}

function runNum(el){
    el.each(function(index, element) {
        var currentNumber = 0;
        var endNumber = $(this).data('num');
        $({numberValue: currentNumber}).animate({numberValue: endNumber}, {
            duration: 1200,
            easing: 'linear',
            step: function (now) {
                $(element).text(now.toFixed(0));
            }
        });
    });
}


//prevent touch to hover
// function hasTouch() {
//     return 'ontouchstart' in document.documentElement ||
//         navigator.maxTouchPoints > 0 ||
//         navigator.msMaxTouchPoints > 0;
// }

// if (hasTouch()) { // remove all :hover stylesheets
//     try { // prevent exception on browsers not supporting DOM styleSheets properly
//         for (var si in document.styleSheets) {
//             var styleSheet = document.styleSheets[si];
//             if (!styleSheet.rules) continue;

//             for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
//                 if (!styleSheet.rules[ri].selectorText) continue;

//                 if (styleSheet.rules[ri].selectorText.match(':hover')) {
//                     styleSheet.deleteRule(ri);
//                 }
//             }
//         }
//     } catch (ex) {}
// }
//END