/**
 * Created by Administrator on 2018/3/15.
 */
function ajaxRequest(url, submitData, callback, method) {
    $.ajax({
        type: method,
        url: url,
        dataType: "json",
        data: submitData,
        success: function (result) {
            callback(result);
        }
    });
    //console.log(url);
    //console.log(submitData);
}

// jQuery url get parameters function [获取URL的GET参数值]
// <code>
//     var GET = $.urlGet(); //获取URL的Get参数
//     var id = GET['id']; //取得id的值
// </code>
//  url get parameters
//  public
//  return array()

function urlGet() {
    var aQuery = window.location.href.split("?");  //取得Get参数
    var aGET = new Array();
    if (aQuery.length > 1) {
        var aBuf = aQuery[1].split("&");
        for (var i = 0, iLoop = aBuf.length; i < iLoop; i++) {
            var aTmp = aBuf[i].split("=");  //分离key与Value
            aGET[aTmp[0]] = aTmp[1];
        }
    }
    return aGET;
}


