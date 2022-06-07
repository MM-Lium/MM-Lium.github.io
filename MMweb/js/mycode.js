(function () {

    const lang = "zh-tw"
    const url = "data/myjson.json";


    var areaData = ''; //全部的行政區資料(全域變數)
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            areaData = JSON.parse(xhttp.responseText);
            getData();
            getLocation(areaData.XML_Head.Infos.Info);
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

    function getData() {
        if (nowViewData.length == 0) {
            theLocationdata();
        }
    }

    let $location = document.querySelector('.location select')
    let nowViewData = [];
    let $pageNo = 1;
    let $locationNo = 15;

    /** 取得下拉縣市  */
    function getLocation(mydata) {
        let $city = mydata.length;
        let $cityoption;
        let $allcityname = [];

        for (i = 0; i < $city; i++) {
            if (mydata[i].Region == null || mydata[i].Region == "null") { //縣市

            } else {
                $allcityname.push(mydata[i].Region);
            }
        }

        $allcityname = $allcityname.filter((item, index, arr) => {
            return arr.indexOf(item) === index;
        })

        $allcityname.forEach((num) => {
            $cityoption += '<option value="' + num + '">' + num + '</option> ';
            $location.innerHTML = $cityoption;
        })
    }


    /** 選擇縣市  */
    $location.addEventListener('change', theLocation)

    function theLocation() {
        nowViewData = []

        let $theLocation = $location.value;
        theLocationdata($theLocation);
    }

    /** 取得該縣市景點  */
    function theLocationdata(Locationdata) {
        let myplace = Locationdata;
        let $alldata = areaData.XML_Head.Infos.Info;

        // console.log($alldata);
        $alldata.forEach((name) => {
            if (name.Region == myplace) {
                // console.log(name);
                nowViewData.push({
                    'dataNo': name.Id,
                    'dataName': name.Name,
                    'dataDesc': name.Description,
                    'dataState': name.Town,
                    'datapic': name.Picture1
                });
            } else if (myplace == "") {
                nowViewData.push({
                    'dataNo': name.Id,
                    'dataName': name.Name,
                    'dataDesc': name.Description,
                    'dataState': name.Town,
                    'datapic': name.Picture1
                });
            }
        })
        createView();
    }

    /** 輸出全部景點至頁面  */
    function createView() {
        let viewBox = '';
        let allviewTown = [];
        let viewTown = [];
        let viewPage = '';
        let allpage = '';



        $pageNo = Math.round(nowViewData.length / $locationNo);

        for (i = 0; i < nowViewData.length; i++) {
            let $mytit = nowViewData[i].dataName ? nowViewData[i].dataName : "";
            let $mytown = nowViewData[i].dataState ? nowViewData[i].dataState : "其他";
            let $mypic = nowViewData[i].datapic ? nowViewData[i].datapic : "https://fakeimg.pl/300/";
            let $mytxt = nowViewData[i].dataDesc ? nowViewData[i].dataDesc : "";

            viewBox += '<div class="place">' +
                '<div class="pic">' +
                '<img src="' + $mypic + '">' +
                '</div>' +
                '<div class="info">' +
                '<div class="tit">' + $mytit + '</div>' +
                '<div class="txt">' + $mytxt + '' + '</div>' +
                '</div></div>';

            if (i >= 15 && i % $locationNo == 0) {
                if (Math.ceil(i / $locationNo) == 1) {
                    viewPage += '<section class="myplace on" data-page="' + parseInt(i / $locationNo) + '">' + viewBox + '</section>';
                    allpage += '<div class="page on">' + parseInt(i / $locationNo) + '</div>'
                    viewBox = '';
                } else {
                    viewPage += '<section class="myplace" data-page="' + parseInt(i / $locationNo) + '">' + viewBox + '</section>';
                    allpage += '<div class="page">' + parseInt(i / $locationNo) + '</div>'
                    viewBox = '';
                }

            } else if (i == nowViewData.length - 1) {
                viewPage += '<section class="myplace" data-page="' + Math.ceil(i / $locationNo) + '">' + viewBox + '</section>';
                allpage += '<div class="page">' + Math.ceil(i / $locationNo) + '</div>'
                viewBox = '';
            }
            allviewTown.push($mytown);
        }

        allviewTown = allviewTown.filter((item, index, arr) => {
            return arr.indexOf(item) === index;
        })

        for (j = 0; j < allviewTown.length; j++) {
            viewTown += '<div class="box">' + allviewTown[j] + '</div>';
        }

        document.querySelector('.allmyplace').innerHTML = viewPage;
        document.querySelector('.allpage').innerHTML = allpage;
        document.querySelector('.information .where').innerHTML = viewTown;
        document.querySelector('.information .toptxt span').innerHTML = nowViewData.length;

    }



    function changePage() {

        let $myPage;
        let $pageBtn = document.querySelectorAll('.allpage .page')
        let $placePage = document.querySelectorAll('.allmyplace .myplace');

        for (var i = 0; i <= $pageBtn.length; i++) {

            if ($pageBtn) {

                $pageBtn[i].addEventListener('click', function () {

                    $pageBtn.forEach((page) => {
                        page.classList.remove("on");
                    })
                    this.classList.add("on");

                    $myPage = this.innerText;

                    $placePage.forEach((place) => {
                        place.classList.remove("on");
                    })

                    $placePage[$myPage - 1].classList.add("on");

                }, false);

            }
        }

    }
})()

