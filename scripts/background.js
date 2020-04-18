var canvas=document.getElementById("canv");
var wid=window.innerWidth;
var hei=document.documentElement.scrollHeight;
canvas.width=wid;
canvas.height=hei;
var $=canvas.getContext("2d");
var flwls=[];
var flowerColor="rgba(255,192,203,.3)";
var flowerColorDeep="rgba(241,158,194,.5)";
var cnt=wid*hei/5000;

function initFlowers(){
	$.clearRect(0,0,wid,hei);
	var grd=$.createLinearGradient(0,0,0,hei);
	grd.addColorStop(0,"white");
	grd.addColorStop(1,"pink");
	$.fillStyle=grd;
	$.fillRect(0,0,wid,hei);
	for(var i=0;i<cnt;i++){
		var x=Math.random()*wid;
		var y=Math.random()*hei;
		var sx=Math.random()*2+0.5;
		var sy=Math.random()*5+1;
		var r=Math.random()*3+3;
		var color=[flowerColorDeep,flowerColor,flowerColor][Math.round(Math.random()+0.2)];
		var deg=Math.random()*2*Math.PI-Math.PI;
		flwls.push({x:x,y:y,r:r,sx:sx,sy:sy,color:color,deg:deg});
		$.beginPath();
		$.fillStyle=color;
		$.arc(x,y,r,deg,deg+Math.PI*1.3);
		$.fill();
	}
}
initFlowers();

function step(){
	$.clearRect(0,0,wid,hei);
	var grd=$.createLinearGradient(0,0,0,hei);
	grd.addColorStop(0,"white");
	grd.addColorStop(1,"pink");
	$.fillStyle=grd;
	$.fillRect(0,0,wid,hei);
	for(var i=0;i<cnt;i++){
		flwls[i].x+=flwls[i].sx;
		flwls[i].y+=flwls[i].sy;
		if(flwls[i].y>=hei){
			flwls[i].y-=hei;
		}
		if(flwls[i].x>=wid){
			flwls[i].x-=wid;
		}
		flwls[i].deg+=flwls[i].sx*0.05;
		$.beginPath();
		$.fillStyle=flwls[i].color;
		$.arc(flwls[i].x,flwls[i].y,flwls[i].r,flwls[i].deg,flwls[i].deg+Math.PI*1.3);
		$.fill();
	}
	requestAnimationFrame(step);
}
requestAnimationFrame(step);