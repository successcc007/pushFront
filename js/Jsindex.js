/**
 * Created by Administrator on 2018/3/15.
 */

const URLBASE = "http://localhost/jishiback_2/api/v1";

$(document).ready(function () {
    countryInit();
    SchangeCountry();
    SchangeProvince();
    Save();
    Confirm();
    ListOfConfig();
});

/*获取国家*/
function countryInit() {
    var url = URLBASE + "/index/select/country";
    var submitData = {
        type: "country"
    };
    ajaxRequest(url, submitData, CalbGetCountry, "GET");
}

/* 国家数据回调，国家数据填充*/
function CalbGetCountry(result) {
    //RemoveSelect("country");
    var len = result['info'].length;
    var select = $(".country select");
    for (var i = 0; i < len; i++) {
        select.append("<option value='" + result['info'][i]['i_id'] + "'>" + result['info'][i]['s_name'] + "</option>");
    }
}

/*国家的change事件*/
function SchangeCountry() {
    $(".country select").change(function () {
        var sOption = $(this).children('option:selected').val();
        var url = URLBASE + "/index/select/province";
        var submitData = {
            type: "province",
            province_id: sOption
        };
        ajaxRequest(url, submitData, CalbCountryClick, "GET");
    });
}

/* 国家change回调,省数据填充*/
function CalbCountryClick(result) {
    RemoveSelect("province");
    var len = result['info'].length;
    var select = $(".province select");
    for (var i = 0; i < len; i++) {
        select.append("<option value='" + result['info'][i]['i_id'] + "'>" + result['info'][i]['s_name'] + "</option>");
    }
}

/*省的change事件*/
function SchangeProvince() {
    $(".province select").change(function () {
        var sOption = $(this).children('option:selected').val();
        var url = URLBASE + "/index/select/city";
        var submitData = {
            type: "city",
            city: sOption
        };
        ajaxRequest(url, submitData, CalbProvinceClick, "GET");
    });
}

/* 省change回调,市数据填充*/
function CalbProvinceClick(result) {
    //console.log(result);
    RemoveSelect("city");
    var len = result['info'].length;
    var select = $(".city select");
    for (var i = 0; i < len; i++) {
        select.append("<option value='" + result['info'][i]['i_id'] + "'>" + result['info'][i]['s_name'] + "</option>");
    }
}

/*
 * 清空select的option
 * 传入class
 * */
function RemoveSelect(select) {
    var selOpt = $("." + select + " select option");
    selOpt.remove();
    var sel = $("." + select + " select");
    sel.append("<option value=''>select</option>");
}

/*save click*/
function Save() {
    $("#btnIndex").click(function () {
        /*  var country = $('.country select option:selected').val();
         if (!country) {
         alert("country can't be empty!");
         return;
         }
         var province = $('.province select option:selected').val();
         if (!province) {
         alert("province can't be empty!");
         return;
         }*/
        var city = $('.city select option:selected').val();
        if (!city) {
            alert("city can't be empty!");
            return;
        }
        var startTimeHour = $('#stHour').val();
        if (!startTimeHour) {
            alert("startTimeHour can't be empty!");
            return;
        }
        var startTimeMinute = $('#stMinute').val();
        if (!startTimeMinute) {
            alert("startTimeMinute can't be empty!");
            return;
        }
        var endTimeHour = $('#etHour').val();
        if (!endTimeHour) {
            alert("endTimeHour can't be empty!");
            return;
        }
        var endTimeMinute = $('#etMinute').val();
        if (!endTimeMinute) {
            alert("endTimeMinute can't be empty!");
            return;
        }
        var interval = $('#interval').val();
        if (!interval) {
            alert("interval can't be empty!");
            return;
        }
        var url = URLBASE + "/autoPublish/save";
        var submitData = {
            country: country,
            province: province,
            city: city,
            startTimeHour: startTimeHour,
            startTimeMinute: startTimeMinute,
            endTimeHour: endTimeHour,
            endTimeMinute: endTimeMinute,
            interval: interval
        };
        ajaxRequest(url, submitData, CalbSave, "POST");
    })
}

/*save callback*/
function CalbSave(result) {
    console.log(result);
}

/*managememt confirm*/
function Confirm() {
    $("#btnM").click(function () {
        var city = $('.city select option:selected').val();
        if (!city) {
            alert("city can't be empty!");
            return;
        }
        var url = URLBASE + "/index/select/jsCity";
        var submitData = {
            city: city
        };
        ajaxRequest(url, submitData, CalbConfirm, "POST");
    })
}

/*callback confirm*/
function CalbConfirm(result) {
    console.log(result);
    var ul=$(".listSaveM");
    var lenC=result['data'].length;
    for(var i =0;i<lenC;i++){
        var serverS = result['data'][i];
        var lenS=serverS.length;
        for(var j=0;j<lenS;j++){
            ul.append("<li style='height: 40px;line-height: 40px;'>" +
           "name:<span>"+serverS[j]['s_name']+"</span>&nbsp;&nbsp;age:<span>"+serverS[j]['i_age']+"</span>&nbsp;&nbsp;height:<span>"+serverS[j]['i_height']+"</span>&nbsp;&nbsp;price:<span>"+serverS[j]['i_price']+"</span>&nbsp;&nbsp;<input class='edit'  type='button'  value='edit' id="+serverS[j]['i_id']+"> </li><br>");
        }
    }
}

/*the list of config*/
function ListOfConfig() {
    var url = URLBASE + "/autoPublish/ConfigList";
    var submitData = {};
    ajaxRequest(url, submitData, CalbConfigList, "GET");
}

/*callback configlist*/
function CalbConfigList(result) {
    //console.log(result);
    if (!result) {
        return;
    }
    var len = result['data'].length;
    var ul = $(".listSaveIndex");
    for (var i = 0; i < len; i++) {
        ul.append("<li>" +
        "Country:<span>" + result['data'][i]['country'] + "</span>&nbsp;&nbsp; Province:<span>" + result['data'][i]['province'] + "</span> &nbsp;&nbsp;city:<span>" + result['data'][i]['city'] + "</span>&nbsp;&nbsp;&nbsp;&nbsp; from<span> " + result['data'][i]['startTimeHour'] + "</span>:<span>" + result['data'][i]['startTimeMinute'] + "</span> to<span> " + result['data'][i]['endTimeHour'] + "</span>:<span>" + result['data'][i]['endTimeMinute'] + "</span>&nbsp;&nbsp; interval: <span>" + result['data'][i]['intervalMinutes'] +
        "</li>");
    }
}



