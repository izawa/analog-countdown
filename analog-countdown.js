javascript:
(
function () {
function getRest () {
var today = new Date();
var epocht = Date.parse("2011/07/25 00:00:00");
var epochd = new Date();
epochd.setTime(epocht);
var diff = epochd - today;
var diffd = Math.floor(diff / 86400000);
return diffd
}
function composition () {
var width = window.innerWidth;
var height = window.innerHeight;
var w3 = Math.round(width/3);
var h3 = Math.round(height/3);
re = document.getElementById("canvas");
if(re) {
	document.body.removeChild(re);
}
var canvas=document.createElement("canvas");
    if(!canvas.getContext){return false;}
canvas.id='canvas';	
canvas.setAttribute('height', height);
canvas.setAttribute('width', width);
canvas.style.cssText = 'position: fixed;' + 'top: 0;' + 'left: 0;' + 'z-index: 999;';
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
ctx.strokeStyle = 'rgba(0, 0, 0, 0.7)';
ctx.beginPath();
ctx.font = "bold 100px 'MS Pゴシック'";
ctx.fillText("アナログ放送",0,height-300);
ctx.fillText("終了まで",0,height-200);
ctx.fillText("あと",0,height-100);
var r = getRest();
var metrics = ctx.measureText("あと");
var a1 = metrics.width;
ctx.fillText(""+r,a1,height-100);
metrics = ctx.measureText(""+r);
var a2 = metrics.width;
ctx.fillText("日",a1+a2,height-100);
}
function myaddevent(eventname, fc){
if(window.addEventListener){ window.addEventListener(eventname, fc, false); }
else{ if(window.attachEvent) window.attachEvent('on' + eventname, fc); }
}
composition();
myaddevent('resize',composition);
}
)();
