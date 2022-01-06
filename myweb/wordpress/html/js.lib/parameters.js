/*----------------------------------------------------------parameters------------------------------------------------------------------*/
var file_name=function(){
    var href=location.pathname;
    var myindex=href.lastIndexOf('/');
    return href.substring(myindex+1,href.length);
};
function locationSearch(){
    var searchAry = {};
    if(location.search!=''){
        var searchStr = location.search.substr(1).split('&');
        for(var i in searchStr){
            var pos = searchStr[i].indexOf('=');
            if(pos>0 && searchStr[i].length>pos+1)
                searchAry[searchStr[i].substr(0,pos)] = searchStr[i].substr(pos+1);
            else if(pos>0)
                searchAry[searchStr[i].substr(0,pos)] = '';
            else
                searchAry[searchStr[i]] = '';
        }
    }
    return searchAry;
}

var FILENAME = file_name();
var LOCSCH = locationSearch();
var UPLOADPATH  = location.origin+'/upload/';
var emailReg    = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;		//email  正規表達式
var mobileReg   = /^09[0-9]{8}$/;                                               //手機號碼 正規表達式 09開頭後面接0~9八碼
var phoneReg    = /^[0][1-9]{1,2}-([0-9]{7,8})+((#([0-9]){1,5}){0,1})$/;        //電話號碼 正規表達式 0開頭接1~9一到二碼加上-0~9七到八碼之後可接可不接#0~9一到五碼
var snReg       = /^[a-zA-Z]\d{9}$/;                                            // 身分證