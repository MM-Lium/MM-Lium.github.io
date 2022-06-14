/* 市長折線圖--mayorscript.js-----------------------------------*/
/* (this)政黨好感度折線圖--politicalscript.js-----------------------------------*/
/* 單一候選人好感度世代分析--profile.js-----------------------------------*/

var myscript = function () {

    var winW = $(window).width();
    var _nowdaylabels = 0; //目前的星期

    /* 折線圖上的圓點顏色-------------------------------------*/
    var blue = ["#264ec2", "rgba(38,78,194,0.5)"];
    var green = ["#1ea027", "rgba(30,160,39,0.5)"];
    var verdant = ["#16dcb5", "rgba(22,220,181,0.5)"];
    var yellow = ["#f9d219", "rgba(249,210,25,0.5)"];
    var purple = ["#7e1fff", "rgba(126,31,255,0.5)"];

    /* 折線圖上的資料區(依週期)-------------------------------------*/
    const daylabels = [{
            // 1
            week: ['2022/10/1', '2022/10/2', '2022/10/3', '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7', ''],
            mayorlabel: [{
                    name: '國民黨', //黨籍
                    color: blue, //黨籍顏色
                    score: '26.1', //黨籍分數
                    data: [5, 10, 50, 60, 40, 35, 20], //黨籍好感度
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'], //補充文字
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''], //補充連結
                    image: ['p1'] //黨籍頭貼
                }, {
                    name: '民進黨',
                    color: green,
                    score: '27',
                    data: [50, 90, 70, 80, 100, 70, 30], //黨籍好感度
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p2']
                }, {
                    name: '民眾黨',
                    color: verdant,
                    score: '28',
                    data: [30, 40, 20, 70, 5, 80, 10], //黨籍好感度
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p3']
                },
                {
                    name: '時代力量 ',
                    color: yellow,
                    score: '28',
                    data: [55, 60, 70, 80, 20, 40, 35], //黨籍好感度
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p4']
                },
                {
                    name: '其他',
                    color: purple,
                    score: '',
                    data: ['', '', 0],
                    point: [4, 0, 4, 0, 0, 0, 0, 0],
                    label: ['', '', '民進黨徵召名單公布1'],
                    link: ['', '', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                }
            ]
        },
        {
            // 2
            week: ['2022/10/1', '2022/10/2', '2022/10/3', '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7', ''],
            mayorlabel: [{
                    name: '國民黨',
                    color: blue,
                    score: '29',
                    data: [5, 90, 70, 80, 100, 70, 30], //黨籍好感度
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p1']
                }, {
                    name: '民進黨',
                    color: green,
                    score: '23',
                    data: [5, 90, 70, 80, 100, 70, 30], //黨籍好感度
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p2']
                }, {
                    name: '民眾黨',
                    color: verdant,
                    score: '10',
                    data: [5, 90, 70, 80, 100, 70, 30], //黨籍好感度
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p3']
                },
                {
                    name: '時代力量 ',
                    color: yellow,
                    score: '5',
                    data: [5, 90, 70, 80, 100, 70, 30], //黨籍好感度
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
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
        {
            // 3
            week: ['2022/10/1', '2022/10/2', '2022/10/3', '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7', ''],
            mayorlabel: [{
                    name: '國民黨',
                    color: blue,
                    score: '29',
                    data: [5, 90, 70, 80, 100, 70, 30, 35, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p1']
                }, {
                    name: '民進黨',
                    color: green,
                    score: '23',
                    data: [50, 10, 50, 20, 12, 2, 3, 4, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p2']
                }, {
                    name: '民眾黨',
                    color: verdant,
                    score: '10',
                    data: [20, 50, 5, 25, 60, 12, 13, 14, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p3']
                },
                {
                    name: '時代力量 ',
                    color: yellow,
                    score: '5',
                    data: [40, 20, 50, 75, 50, 22, 43, 70, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
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
        {
            // 4
            week: ['2022/10/1', '2022/10/2', '2022/10/3', '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7', ''],
            mayorlabel: [{
                    name: '國民黨',
                    color: blue,
                    score: '29',
                    data: [5, 90, 70, 80, 100, 70, 30, 35, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p1']
                }, {
                    name: '民進黨',
                    color: green,
                    score: '23',
                    data: [50, 10, 50, 20, 12, 2, 3, 4, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p2']
                }, {
                    name: '民眾黨',
                    color: verdant,
                    score: '10',
                    data: [20, 50, 5, 25, 60, 12, 13, 14, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p3']
                },
                {
                    name: '時代力量 ',
                    color: yellow,
                    score: '5',
                    data: [40, 20, 50, 75, 50, 22, 43, 70, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
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
        {
            // 5
            week: ['2022/10/1', '2022/10/2', '2022/10/3', '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7', ''],
            mayorlabel: [{
                    name: '國民黨',
                    color: blue,
                    score: '29',
                    data: [5, 90, 70, 80, 100, 70, 30, 35, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p1']
                }, {
                    name: '民進黨',
                    color: green,
                    score: '23',
                    data: [50, 10, 50, 20, 12, 2, 3, 4, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p2']
                }, {
                    name: '民眾黨',
                    color: verdant,
                    score: '10',
                    data: [20, 50, 5, 25, 60, 12, 13, 14, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p3']
                },
                {
                    name: '時代力量 ',
                    color: yellow,
                    score: '5',
                    data: [40, 20, 50, 75, 50, 22, 43, 70, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
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
        {
            // 6
            week: ['2022/10/1', '2022/10/2', '2022/10/3', '2022/10/4', '2022/10/5', '2022/10/6', '2022/10/7', ''],
            mayorlabel: [{
                    name: '國民黨',
                    color: blue,
                    score: '29',
                    data: [5, 90, 70, 80, 100, 70, 30, 35, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p1']
                }, {
                    name: '民進黨',
                    color: green,
                    score: '23',
                    data: [50, 10, 50, 20, 12, 2, 3, 4, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p2']
                }, {
                    name: '民眾黨',
                    color: verdant,
                    score: '10',
                    data: [20, 50, 5, 25, 60, 12, 13, 14, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
                    label: ['哈哈哈1', '哈哈哈2', '哈哈哈3', '哈哈哈4', '哈哈哈5', '哈哈哈6', '哈哈哈7', '哈哈哈8'],
                    link: ['https://www.chartjs.org/docs/latest/configuration/interactions.html#events', 'https://www.chartjs.org/docs/latest/configuration/interactions.html#events', '', '', '', '', '', ''],
                    image: ['p3']
                },
                {
                    name: '時代力量 ',
                    color: yellow,
                    score: '5',
                    data: [40, 20, 50, 75, 50, 22, 43, 70, ],
                    point: [3, 3, 4, 3, 3, 3, 3, 3],
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

    /* 折線圖上的HOVER顯示框-------------------------------------*/
    const externalTooltipHandler = (context) => {
        const {
            chart,
            tooltip
        } = context;

        let tooltipEl = chart.canvas.parentNode.querySelector('.contentbox');
        let _databox = chart.canvas.parentNode.querySelector('.databox');

        let toolIndex = context.tooltip.dataPoints[0].dataIndex; //參數個數 0-7
        let tooldataset = context.tooltip.dataPoints[0].datasetIndex; //第幾個人 0-2
        let _point = context.tooltip.dataPoints[0].dataset.pointRadius; //每個點 0-7
        let _dperson = context.tooltip.dataPoints[0].dataIndex; //第幾個日期
        let _dall = chart.config._config.data.datasets; //資料集合
        let $label, $link; //文字與連結
        let _dname = [];
        const tableBody = document.createElement('p');
        const myall_d = document.createElement('p');


        if (_point[toolIndex] === 3) {

            _databox.style.opacity = 1;
            _databox.style.display = "inline-block";
            tooltipEl.style.opacity = 0;
            tooltipEl.style.display = "none";

        } else if (_point[toolIndex] === 4) {

            tooltipEl.style.opacity = 1;
            tooltipEl.style.display = "inline-block";
            _databox.style.opacity = 0;
            _databox.style.display = "none";

            _point.forEach(function (i, element) {
                if (toolIndex == element) {
                    $label = daylabels[_nowdaylabels].mayorlabel[tooldataset].label[element];
                    $link = daylabels[_nowdaylabels].mayorlabel[tooldataset].link[element];
                }
                return $label, $link;
            })
        }

        _dall.forEach(function (i, element) {
            if (element < _dall.length - 1) {

                _dname.push([i.label, i.data[_dperson]]);

                if (_dname.length == _dall.length - 1) {

                    _dname.sort(function (a, b) {
                        return b[1] - a[1]
                    });

                    _dname.forEach(function (i, element) {
                        myall_d.appendChild(document.createTextNode(_dname[element][0]));
                        const myall_num = document.createElement('span');
                        myall_num.appendChild(document.createTextNode(_dname[element][1]));
                        myall_d.appendChild(myall_num);
                        myall_d.appendChild(document.createElement("br"));
                    })
                }
            }
        })

        const text = document.createTextNode($label);
        tableBody.appendChild(text);

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

        while (_databox.firstChild) {
            _databox.firstChild.remove();
        }

        tooltipEl.appendChild(tableBody); //新增文字
        _databox.appendChild(myall_d);

        let _width = tooltipEl.clientWidth;
        let _Height = tooltipEl.clientHeight;

        let _width_dbox = _databox.clientWidth;
        let _Height_dbox = _databox.clientHeight;


        tooltipEl.style.left = tooltip.caretX - _width / 2 + 'px';
        tooltipEl.style.top = tooltip.caretY - _Height * 1.5 + 'px';

        _databox.style.left = tooltip.caretX - _width_dbox / 2 + 'px';
        _databox.style.top = tooltip.caretY + _Height_dbox / 5 + 'px';

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
            from: function () {
                if (winW <= 768) {
                    return 250;
                } else if (winW <= 1280) {
                    return 350;
                } else {
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
        },
        radius: {
            duration: 300,
            easing: 'easeOutCubic',
            from: function (ctx) {
                if (ctx.element != undefined) {
                    if (ctx.element.options.radius >= "4") { //圈圈寬度大於等於4
                        return 4;

                    } else {
                        return 3;
                    }
                }
            },
            to: function (ctx) {
                if (ctx.element != undefined) {
                    if (ctx.element.options.radius >= "4") { //圈圈寬度大於等於4
                        return 9;

                    } else {
                        return 3;
                    }
                }
            },
            loop: true,
        }
    };


    /* 折線圖擴充套件-------------------------------------*/
    const config = {
        type: 'line', //圖表類型
        data: data,
        options: {
            aspectRatio: function () {
                if (winW <= 768) {
                    return 1.2;
                } else {
                    return 2;
                }
            },
            responsive: true,
            animation,
            interaction: {
                mode: 'point',
                intersect: false
            },
            events: function () {
                if (winW <= 768) {
                    return ['click'];
                } else {
                    return ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'];
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        // display: false,
                        borderDash: [6, 6],
                        borderColor: '#7e1fff',
                        borderWidth: 5,
                    },
                    ticks: {
                        padding: 0,
                        minRotation: 25,
                        labelOffset: function () {
                            if (winW <= 768) {
                                return 25;
                            } else {
                                return 20;
                            }
                        },
                        font: {
                            size: function () {
                                if (winW <= 768) {
                                    return 10;
                                } else {
                                    return 14;
                                }
                            },
                            family: 'YahooSans-r',
                            textDirection: 'ltr',
                        },
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: function () {
                            if (winW <= 768) {
                                return false;
                            } else {
                                return true;
                            }
                        },
                        text: '',
                        font: {
                            size: 20,
                            family: '微軟正黑體',
                            textDirection: 'ltr',
                        },
                    },
                    ticks: {
                        crossAlign: 'far',
                        stepSize: 1,
                        font: {
                            size: function () {
                                if (winW <= 768) {
                                    return 10;
                                } else {
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
                    borderWidth: 4,
                },
                point: {
                    pointBorderWidth: 10,
                    hitRadius: 0,
                }
            },
            plugins: {
                legend: false,
                tooltip: {
                    enabled: false,
                    external: externalTooltipHandler,
                },
                datalabels: {
                    display: false, //數值
                },
                annotation: {
                    clip: false,
                    drawTime: 'afterDatasetsDraw',
                    annotations: []
                },
            },
        }
    };


    //產出折線圖
    const myChart2 = new Chart($('#myChart_political'),
        config
    );



    //人物圖片
    chartImg();

    function chartImg() {
        var ImgAni = new TimelineMax();
        ImgAni.to($('.politicalChart .allimg'), 1, {
            autoAlpha: 1,
            ease: Linear.easeNone
        });

        $('.politicalChart .allimg .box').each(function () {
            var _color = $(this).data('color');
            var _order = $(this).data('order');

            switch (_color) {
                case 'blue':
                    $(this).find('.pic').css("border-color", blue[0])

                    break;
                case 'green':
                    $(this).find('.pic').css("border-color", green[0])
                    break;
                case 'verdant':
                    $(this).find('.pic').css("border-color", verdant[0])
                    break;
                case 'yellow':
                    $(this).find('.pic').css("border-color", yellow[0])
                    break;
            }
            $(this).css("order", _order);
        });
    }

    // 點擊下一個禮拜與上一個禮拜

    $('.politicalChart .Chart .btn._prev').click(function () {

        if (_nowdaylabels == 0) {
            return false;
        } else {
            _nowdaylabels -= 1;
            update(_nowdaylabels);
        }
    });

    $('.politicalChart .Chart .btn._next').click(function () {

        if (_nowdaylabels == daylabels.length - 1) {
            return false;
        } else {
            _nowdaylabels += 1;
            update(_nowdaylabels);
        }
    });

    function update(_nowday) {

        myChart2.data.labels = daylabels[_nowday].week;

        myChart2.data.datasets.forEach(function (i, item) {
            myChart2.data.datasets[item].pointRadius = daylabels[_nowday].mayorlabel[item].point;
            myChart2.data.datasets[item].data = daylabels[_nowday].mayorlabel[item].data;
        })

        $('.politicalChart .allimg').css({
            'opacity': '0'
        });

        // $('.politicalChart .contentbox').css({
        //     'opacity': '0',
        //     'display': 'none'
        // });

        // $('.politicalChart .databox').css({
        //     'opacity': '0',
        //     'display': 'none'
        // });

        myChart2.update();
        chartImg();
    }
}

myscript();