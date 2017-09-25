//window onscroll
var scrollTop=null;
window.onscroll=function(){
	var turnway=document.getElementById("turnway");
	scrollTop=document.documentElement.scrollTop||window.pageYoffset||document.body.scrollTop;
	turnway.style.display = (scrollTop >=690)?"block":"none";
}