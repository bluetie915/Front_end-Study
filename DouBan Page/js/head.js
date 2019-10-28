/* 获取下载客户端对象 */
var downLoad = document.getElementById("downLoad");
/* 获取我的账号对象 */
var count = document.getElementById("count");
/* 获取下载客户端扫码图片 */
var downImg = document.getElementById("list").getElementsByTagName("img")[0];
/* 获取账号信息对象 */
var countList = document.getElementById("list").getElementsByTagName("ul")[1];
var timer = null;

// 显示函数
function show(obj){
	obj.style.display = "block";
}
// 隐藏函数
function hide(obj){
	obj.style.display = "none";
} 
// 鼠标悬停显示/隐藏下载客户端
downLoad.onmouseover = function(){
	show(downImg);
}
downLoad.onmouseout = function(){
	hide(downImg);
}
// 鼠标悬停显示/隐藏账号信息
count.onmouseover = function(){
	show(countList);
}
count.onmouseout = function(){
	timer = setTimeout(function(){
		hide(countList);
	},500);
}
countList.onmouseover = function(){
	clearTimeout(timer);
	show(countList);
}
countList.onmouseout = function(){
	hide(countList);
}