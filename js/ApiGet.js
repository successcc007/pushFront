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
            console.log("ajaxrequest success");
            callback(result);
        }
    });
}