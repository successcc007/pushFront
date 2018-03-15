/**
 * Created by Administrator on 2018/3/15.
 */

const URLBASE = "http://localhost/jishiback/api/v1";
$(document).ready(function () {
    countryInit();
});

/*获取国家*/
function countryInit() {
    var url = URLBASE + "/index/select/country";
    var submitData = {
        type: "country"
    };
    ajaxRequest(url, submitData, callbackcountry, "GET");
}

/* 国家数据回调*/
function callbackcountry(result) {
    var len = result['info'].length;
    var select = $(".country select");
    for (var i = 0; i < len; i++) {
        select.options.add(result['info'][i]['s_name'], result['info'][i]['s_name']);
    }
}

/*国家、省、市的change事件*/
function SelectChange(){
    $(".country select").change(function(){
//todu get province
    });
}



