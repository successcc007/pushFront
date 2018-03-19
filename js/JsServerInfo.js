/**
 * Created by Administrator on 2018/3/19.
 */

$(document).ready(function () {
    Init();
});

/*init data*/
function Init(){
    var pGet =urlGet();
    console.log(pGet['id']);
    var url = URLBASE+"/index/getinfo";
    var submitData={
        jid:pGet['id']
    };
    ajaxRequest(url,submitData,CalbGetJsInfo,"GET");
}

/*init callback*/
function CalbGetJsInfo(){

}
