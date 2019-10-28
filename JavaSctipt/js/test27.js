/**
 * Created by 张艺成 on 2019/7/18.
 */
window.onload = function(){
    imglocation("container","box");
}
function imglocation(parent,content){
    //将parent下所有的content全部取出
    var cparent = document.getElementById(parent);
    var ccontent = getChildElement(cparent,content);
    var imgWidth = ccontent[0].offsetWidth;
    var cols = Math.floor(document.body.clientWidth / imgWidth);
    cparent.style.cssText = "width:"+imgWidth*(cols+1)+"px;margin: 0 auto;";
}
function getChildElement(parent,content){
    var contentArr = [];
    var allcontent = parent.getElementsByTagName("*");
    for(var i = 0;i < allcontent.length;i ++){
        if (allcontent[i].className == content){
            contentArr.push(allcontent[i]);
        }
    }
    return contentArr;
}