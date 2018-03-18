/**
 * Created by Administrator on 2018/3/18.
 */
$(document).ready(function(){
    getServer();
});

/*按city get server*/
function getServer(){
    $(".citySelect .btnSave").click(function(){
        var country = $('.country select option:selected').val();
        if (!country) {
            alert("country can't be empty!");
            return;
        }
        var province = $('.province select option:selected').val();
        if (!province) {
            alert("province can't be empty!");
            return;
        }
        var city = $('.city select option:selected').val();
        if (!city) {
            alert("city can't be empty!");
            return;
        }
    })
}
