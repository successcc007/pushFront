/**
 * Created by Administrator on 2018/3/19.
 */
const URLBASE = "http://localhost/jishiback_2/api/v1";

$(document).ready(function () {
    Init();
});

/*init data*/
function Init(){
    var pGet =urlGet();
    var url = URLBASE+"/index/getinfo";
    var submitData={
        jid:pGet['id']
    };
    ajaxRequest(url,submitData,CalbGetJsInfo,"GET");

    url = URLBASE+"/index/select/imglist";
    submitData={
        provider_id:pGet['id']
    };
    ajaxRequest(url,submitData,CalbGetJsPic,"GET");
}


/*info callback*/
function CalbGetJsInfo(result){
    console.log(result["info"]);
    var info=result["info"];
    $("#name").val(info['s_name']);
    $("#age").val(info['i_age']);
    $("#weigh").val(info['i_weight']);
    $("#height").val(info['i_height']);
    $("#cup").val(info['s_cup']);
    $("#top").val(info['i_top']);
    $("#mid").val(info['i_mid']);
    $("#bot").val(info['i_bot']);
    $("#studio").val(info['i_studio_id']);
    $("#nation").val(info['s_nation']);
    $("#price").val(info['i_price']);
    $("#type").val(info['i_type']);
    $("#score").val(info['i_score']);
    $("#img").attr("src","./images/"+info['i_imgurl']);
    $("#img").attr("style","width:160px;height:150px;");
}

function CalbGetJsPic(result){
    var info=result["info"];
    var ul = $(".pic");
    for(var i= 0,len =info.length;i<len;i++){
        ul.append("<li style='text-align: center'> "+(i+1)+"</li>")
        ul.append("<li>" +
        "<img style='width:120px;height=120px;' src='./images/"+info[i]['img_url']+"' >" +
        "</li>");
    }
    console.log(info);

}
