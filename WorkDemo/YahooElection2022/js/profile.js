/* 市長折線圖--mayorscript.js-----------------------------------*/
/* 政黨好感度折線圖--politicalscript.js-----------------------------------*/
/* (this)單一候選人好感度世代分析--profile.js-----------------------------------*/

var myscript = function () {

    var winW = $(window).width();
    var _nowdaylabels = 0; //目前的星期

    /* 折線圖上的圓點顏色-------------------------------------*/
    var blue = ["#f97dba", "rgba(249,125,186,0.2)"];
    var green = ["#ff9638", "rgba(255,150,56,0.2)"];
    var verdant = ["#a46883", "rgba(164,104,131,0.2)"];
    var yellow = ["#af6e3a", "rgba(175,110,58,0.2)"];
    var purple = ["#7e1fff", "rgba(126,31,255,0.2)"];

    /* 折線圖上的資料區(依週期)-------------------------------------*/
    const daylabels = [{
            // 1
            week: ['', '2022/10/1', '2022/10/2', '2022/10/3', '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7', ''],
            mayorlabel: [{
                    name: '首投族20-24歲',
                    color: blue,
                    score: '26.1',
                    data: [5, 90, 70, 80, 100, 70, 30, 35, ],
                    point: [0, 4, 0, 4, 0, 4, 0, 5],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''], //補充連結
                    image: ['y1']
                }, {
                    name: '年輕族群25-34歲',
                    color: green,
                    score: '27',
                    data: [50, 10, 50, 20, 12, 2, 3, 4, ],
                    point: [4, 0, 0, 4, 4, 0, 0, 5],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['y2']
                }, {
                    name: '中壯族群35-54歲',
                    color: verdant,
                    score: '28',
                    data: [20, 50, 5, 25, 60, 12, 13, 14, ],
                    point: [0, 0, 4, 0, 0, 0, 4, 5],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['y3']
                },
                {
                    name: '熟齡族群55+歲',
                    color: yellow,
                    score: '28',
                    data: [80, 70, 25, 30, 40, 75, 60, 25, ],
                    point: [0, 0, 4, 0, 0, 0, 4, 5],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['y4']
                },
                {
                    name: '其他',
                    color: purple,
                    score: '',
                    data: ['', '', 0],
                    point: [0, 0, 4, 0, 0, 0, 0, 0],
                    label: ['', '', '民進黨徵召名單公布1'],
                    link: ['', '', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                }
            ]
        },
        {
            // 2
            week: ['', '2022/10/1', '2022/10/2', '2022/10/3', '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7', ''],
            mayorlabel: [{
                    name: '首投族20-24歲',
                    color: blue,
                    score: '26.1',
                    data: [5, 90, 70, 80, 100, 70, 30, 35, ],
                    point: [0, 4, 0, 4, 0, 4, 0, 5],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''], //補充連結
                    image: ['p1']
                }, {
                    name: '年輕族群25-34歲',
                    color: green,
                    score: '27',
                    data: [50, 10, 50, 20, 12, 2, 3, 4, ],
                    point: [4, 0, 0, 4, 4, 0, 0, 5],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p2']
                }, {
                    name: '中壯族群35-54歲',
                    color: verdant,
                    score: '28',
                    data: [20, 50, 5, 25, 60, 12, 13, 14, ],
                    point: [0, 0, 4, 0, 0, 0, 4, 5],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p3']
                },
                {
                    name: '熟齡族群55+歲',
                    color: yellow,
                    score: '28',
                    data: [80, 70, 25, 30, 40, 75, 60, 25, ],
                    point: [0, 0, 4, 0, 0, 0, 4, 5],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p4']
                },
                {
                    name: '其他',
                    color: purple,
                    score: '',
                    data: ['', '', 0],
                    point: [0, 0, 4, 0, 0, 0, 0, 0],
                    label: ['', '', '民進黨徵召名單公布1'],
                    link: ['', '', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                }
            ]
        },
    ];

    /* 折線圖上的資料匯入-------------------------------------*/
    const data = { // 標題 背景色 資料
        labels: daylabels[0].week,
        datasets: [{
                label: daylabels[0].mayorlabel[0].name,
                backgroundColor: daylabels[0].mayorlabel[0].color[0],
                borderColor: daylabels[0].mayorlabel[0].color[1],
                data: daylabels[0].mayorlabel[0].data,
                pointBorderColor: daylabels[0].mayorlabel[0].color[1],
                pointRadius: daylabels[0].mayorlabel[0].point,
            },
            {
                label: daylabels[0].mayorlabel[1].name,
                backgroundColor: daylabels[0].mayorlabel[1].color[0],
                borderColor: daylabels[0].mayorlabel[1].color[1],
                data: daylabels[0].mayorlabel[1].data,
                pointBorderColor: daylabels[0].mayorlabel[1].color[1],
                pointRadius: daylabels[0].mayorlabel[1].point,
            },
            {
                label: daylabels[0].mayorlabel[2].name,
                backgroundColor: daylabels[0].mayorlabel[2].color[0],
                borderColor: daylabels[0].mayorlabel[2].color[1],
                data: daylabels[0].mayorlabel[2].data,
                pointBorderColor: daylabels[0].mayorlabel[2].color[1],
                pointRadius: daylabels[0].mayorlabel[2].point,

            },
            {
                label: daylabels[0].mayorlabel[3].name,
                backgroundColor: daylabels[0].mayorlabel[3].color[0],
                borderColor: daylabels[0].mayorlabel[3].color[1],
                data: daylabels[0].mayorlabel[3].data,
                pointBorderColor: daylabels[0].mayorlabel[3].color[1],
                pointRadius: daylabels[0].mayorlabel[3].point,

            },
            {
                label: daylabels[0].mayorlabel[4].name,
                backgroundColor: daylabels[0].mayorlabel[4].color[0],
                borderColor: 'transparent',
                data: daylabels[0].mayorlabel[4].data,
                pointBorderColor: daylabels[0].mayorlabel[4].color[1],
                pointRadius: daylabels[0].mayorlabel[4].point,
                yMax: 100,
            }
        ]
    };

    /* 折線圖上"其他"的紫色中立線-------------------------------------*/
    let annotation_var;
    const annotation = {
        type: 'line',
        borderColor: '#7e1fff',
        borderDash: [6, 6],
        borderWidth: 2,
        xMax: function () {
            var go = daylabels[_nowdaylabels].mayorlabel[4].data;
            go.forEach(function (i, item) {
                if (i !== "") {
                    annotation_var = item;
                }
            })
            return annotation_var;
        },
        xMin: function () {
            var go = daylabels[_nowdaylabels].mayorlabel[4].data;
            go.forEach(function (i, item) {
                if (i !== "") {
                    annotation_var = item;
                }
            })

            return annotation_var;
        },
        xScaleID: 'x',
        yMax: 0,
        yMin: 100,
        yScaleID: 'y',
    };

    /* 折線圖上的大頭照---pic1----------------------------------*/

    let pic2_1 = document.getElementById('pic2_1');
    pic2_1.src = "images/chartpic/" + daylabels[0].mayorlabel[0].image + ".png";

    const point_1 = {
        type: 'point',
        backgroundColor: 'transparent',
        pointStyle: pic2_1,
        radius: 10,
        xValue: 7,
        yValue: (ctx) => lastvalue(ctx, 0),
    };

    /* 折線圖上的大頭照---pic2----------------------------------*/
    let pic2_2 = document.getElementById('pic2_2');
    pic2_2.src = "images/chartpic/" + daylabels[0].mayorlabel[1].image + ".png";

    const point_2 = {
        type: 'point',
        backgroundColor: 'white',
        pointStyle: pic2_2,
        radius: 10,
        xValue: 7,
        yValue: (ctx) => lastvalue(ctx, 1)
    };

    /* 折線圖上的大頭照---pic3----------------------------------*/
    let pic2_3 = document.getElementById('pic2_3');
    pic2_3.src = "images/chartpic/" + daylabels[0].mayorlabel[2].image + ".png";

    const point_3 = {
        type: 'point',
        backgroundColor: 'white',
        pointStyle: pic2_3,
        radius: 10,
        xValue: 7,
        yValue: (ctx) => lastvalue(ctx, 2)
    };

    /* 折線圖上的大頭照---pic4----------------------------------*/
    let pic2_4 = document.getElementById('pic2_4');
    pic2_4.src = "images/chartpic/" + daylabels[0].mayorlabel[3].image + ".png";

    const point_4 = {
        type: 'point',
        backgroundColor: 'white',
        pointStyle: pic2_4,
        radius: 10,
        xValue: 7,
        yValue: (ctx) => lastvalue(ctx, 3)
    };

    function lastvalue(ctx, mayor) {
        const dataset = ctx.chart.data.datasets[mayor].data[7];
        return dataset;
    }

    /* 折線圖上的HOVER顯示框-------------------------------------*/
    const externalTooltipHandler = (context) => {
        const {
            chart,
            tooltip
        } = context;

        let tooltipEl = chart.canvas.parentNode.querySelector('div');

        let toolIndex = context.tooltip.dataPoints[0].dataIndex; //參數個數 0-7
        let tooldataset = context.tooltip.dataPoints[0].datasetIndex; //第幾個人 0-2
        let _point = context.tooltip.dataPoints[0].dataset.pointRadius; //每個點 0-7
        let $label, $link; //文字與連結

        if (_point[toolIndex] === 0 || _point[toolIndex] === 5) {
            return false;
        }

        _point.forEach(function (i, element) {
            if (toolIndex == element) {
                $label = daylabels[_nowdaylabels].mayorlabel[tooldataset].label[element];
                $link = daylabels[_nowdaylabels].mayorlabel[tooldataset].link[element];
            }
            return $label, $link;
        })

        const tableBody = document.createElement('p');
        const _span = document.createElement('span');
        const text = document.createTextNode($label);

        _span.appendChild(text);
        tableBody.appendChild(_span);

        if ($link != "") {
            const _a = document.createElement('a');
            const text_a = document.createTextNode("看更多>");

            _a.href = $link;
            _a.target = "_blank";
            _a.appendChild(text_a);
            tableBody.appendChild(_a);
        }

        while (tooltipEl.firstChild) {
            tooltipEl.firstChild.remove(); //刪除前者文字
        }

        tooltipEl.appendChild(tableBody); //新增文字

        tooltipEl.style.opacity = 1;
        tooltipEl.style.display = "block";
        let _width = tooltipEl.clientWidth;
        let _Height = tooltipEl.clientHeight;

        tooltipEl.style.left = tooltip.caretX - _width / 2 + 'px';
        tooltipEl.style.top = tooltip.caretY - _Height * 1.5 + 'px';
        tooltipEl.style.font = tooltip.options.bodyFont.string;
    };

    /* 折線圖上的動畫-------------------------------------*/
    const totalDuration = 1500;
    const delayBetweenPoints = totalDuration / daylabels[_nowdaylabels].mayorlabel[0].data.length;

    const animation = {
        x: {
            type: 'number',
            easing: 'linear',
            duration: delayBetweenPoints,
            from: 0,
            delay(ctx) {

                if (ctx.type !== 'data' || ctx.xStarted) {
                    return 0;
                }
                ctx.xStarted = true;
                return 100;
            }
        },
        y: {
            type: 'number',
            easing: 'linear',
            duration: totalDuration,
            from:function(){
                if(winW <= 768){
                    return 250;
                }else if(winW <= 1280){
                    return 350;
                }else{
                    return 400;
                }
            },
            delay(ctx) {
                if (ctx.type !== 'data' || ctx.yStarted) {
                    return 0;
                }
                ctx.yStarted = true;
                return 100;
            }
        }
    };


    /* 折線圖擴充套件-------------------------------------*/
    Chart.register(ChartDataLabels);


    //資料彙集
    const config = {
        type: 'line', //圖表類型
        data: data,
        options: {
            aspectRatio:function(){
                if(winW <= 768){
                    return 1.2;
                }else{
                    return 2;
                }
            },
            responsive: true,
            animation,
            interaction: {
                mode: 'point',
                enabled: false,
                external: externalTooltipHandler,
                intersect: false
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        borderColor: '#7e1fff',
                        borderWidth: 5,
                    },
                    ticks: {
                        padding: 0,
                        minRotation: 25,
                        labelOffset: function(){
                            if(winW <= 768){
                                return 10;
                            }else{
                                return 20;
                            }
                        },
                        font: {
                            size: function(){
                                if(winW <= 768){
                                    return 10;
                                }else{
                                    return 14;
                                }
                            },
                            family: 'YahooSans-r',
                            textDirection: 'ltr',
                        },
                    }
                },
                y: {
                    suggestedMax: 100,
                    title: {
                        display: function(){
                            if(winW <= 768){
                                return false;
                            }else{
                                return true;
                            }
                        },
                    },
                    ticks: {
                        font: {
                            size: function(){
                                if(winW <= 768){
                                    return 10;
                                }else{
                                    return 14;
                                }
                            },
                            family: 'YahooSans-r',
                            textDirection: 'ltr',
                        },
                    }
                },
            },
            elements: {
                line: {
                    borderWidth: 5,
                },
                point: {
                    pointBorderWidth: 10,
                    hitRadius:0,
                }
            },
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        pointStyle:'circle',
                        usePointStyle:true,
                        font:{
                            size:14,
                        },
                        generateLabels(chart) {
                            const data = chart.data;
                            let data2 = Array.from(data.datasets);
                            data2.splice(4,1);

                            return data2.map(function(label, i){
                                const meta = label;
                                return {
                                    text: meta.label,
                                    fillStyle: meta.backgroundColor,
                                    strokeStyle: meta.borderColor,
                                    lineWidth: meta.borderWidth,
                                    hidden: !chart.getDataVisibility(i),
                                    index: i
                                };
                            })
                        }
                    },
                    onClick: false,
                },
                tooltip: {
                    intersect: true,
                    backgroundColor: 'rgb(255, 255, 255)',
                    borderColor: 'rgb(0, 0, 0.0.1)',
                    titleColor: "#39393a",
                    bodyColor: "#39393a",
                    borderWidth: 1,
                    displayColors: false,
                    usePointStyle: true,
                },
                datalabels: {
                    // display: false, //數值
                    align: function(){
                     
                        if(winW <= 1160){
                            return 'left';
                        }else{
                            return 'right';
                        }
                    },
                    anchor: 'center',
                    color: function (con) { //數值顏色
                        let colorIndex = con.datasetIndex;
                        return daylabels[_nowdaylabels].mayorlabel[colorIndex].color[0];
                    },
                    offset: 15,
                    font: {
                        size: 14,
                        textDirection: 'ltr',
                        weight: 'bold',
                    },
                    formatter: function (value, context) { //頭貼右邊數值
                        let dataIndex = context.dataIndex;
                        let forsetIdex = context.datasetIndex;
                        let _point = context.dataset.pointRadius[dataIndex];

                        console.log(daylabels[_nowdaylabels].mayorlabel[forsetIdex].score);

                        if (_point === 5) {
                            return daylabels[_nowdaylabels].mayorlabel[forsetIdex].score; //名字與分數
                        } else {
                            return '';
                        }
                    }
                },
                annotation: {
                    clip: false,
                    drawTime: 'afterDatasetsDraw',
                    annotations: {
                        annotation,
                        point_1,
                        point_2,
                        point_3,
                        point_4
                    }
                },
            },
        }
    };

    //產出折線圖
    const myChart3 = new Chart($('#myChart_profile'),
        config
    );

    // 點擊下一個禮拜與上一個禮拜

    $('.profileChart .Chart .btn._prev').click(function () {

        if (_nowdaylabels == 0) {
            return false;
        } else {
            _nowdaylabels -= 1;
            update(_nowdaylabels);
        }
    });

    $('.profileChart .Chart .btn._next').click(function () {

        if (_nowdaylabels == daylabels.length - 1) {
            return false;
        } else {
            _nowdaylabels += 1;
            update(_nowdaylabels);
        }
    });

    function update(_nowday) {

        myChart3.data.labels = daylabels[_nowday].week;

        myChart3.data.datasets.forEach(function (i, item) {
            myChart3.data.datasets[item].pointRadius = daylabels[_nowday].mayorlabel[item].point;
            myChart3.data.datasets[item].data = daylabels[_nowday].mayorlabel[item].data;
        })

        $('.profileChart .contentbox').css({
            'opacity': '0',
            'display': 'none'
        });

        myChart3.update();
    }
}

myscript();