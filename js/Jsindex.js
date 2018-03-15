/**
 * Created by Administrator on 2018/3/15.
 */

const URLBASE = "http://localhost/jishiback/api/v1";

$(document).ready(function () {
    countryInit();
    SchangeCountry();
    SchangeProvince();
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
    var len = result['info'].length;
    var select = $(".country select");
    for (var i = 0; i < len; i++) {
        select.options.add(result['info'][i]['i_id'], result['info'][i]['s_name']);
    }
}

/*国家的change事件*/
function SchangeCountry(){
    $(".country select").change(function(){
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
    var len = result['info'].length;
    var select = $(".province select");
    for (var i = 0; i < len; i++) {
        select.options.add(result['info'][i]['i_id'], result['info'][i]['s_name']);
    }
}

/*省的change事件*/
function SchangeProvince(){
    $(".province select").change(function(){
        var sOption = $(this).children('option:selected').val();
        var url = URLBASE + "/index/select/city";
        var submitData = {
            type: "city",
            province_id: sOption
        };
        ajaxRequest(url, submitData, CalbProvinceClick, "GET");
    });
}

/* 省change回调,市数据填充*/
function CalbProvinceClick(result) {
    var len = result['info'].length;
    var select = $(".city select");
    for (var i = 0; i < len; i++) {
        select.options.add(result['info'][i]['i_id'], result['info'][i]['s_name']);
    }
}