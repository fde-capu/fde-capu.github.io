logger=document.createElement("div");
document.body.appendChild(logger);
var lastLoop=new Date;
var x=y=-1;
var fps, fpsround, framedur;
dt=1500;delta={};
ignited=false;
onhold=false;

fluid={};

init=function(){
 ignited=false;
 fluid={};
 fluid.cellsize=5;
 fluid.width=30;
 fluid.height=30;
 fluid.type=["water",0,10,11,15];
 fluid.x=0;
 fluid.y=20;
 fluid.showcells=false;
 build(fluid);
 ignited=true;
};init();

function build(f){
	f.display=document.createElement("div");
	f.display.style.position="fixed";
	f.display.style.width=f.width*f.cellsize;
	f.display.style.height=f.height*f.cellsize;
	f.display.style.left=f.x;
	f.display.style.top=f.y;
	f.display.style.border="1px solid green";
	f.cell=[];ix=0;
	for(ix=0;ix<f.width;ix++){
		f.cell[ix]=[];
		for(iy=0;iy<f.height;iy++){
			
			f.cell[ix][iy]={};
			f.cell[ix][iy].vector=[0,0];
			f.cell[ix][iy].charge=0;
			
			atype=f.type;
			f.cell[ix][iy].type=atype;
			
			f.cell[ix][iy].display=document.createElement("div");
			f.cell[ix][iy].display.style.position="absolute";
			if(f.showcells){
				f.cell[ix][iy].display.style.border=".1px solid gray";
			}
			f.cell[ix][iy].display.style.background="rgb(0,0,0)";
			f.cell[ix][iy].display.style.width=f.cell[ix][iy].display.style.height=f.cellsize;
			f.cell[ix][iy].display.style.left=(ix*f.cellsize);
			f.cell[ix][iy].display.style.top=(iy*f.cellsize);
			f.cell[ix][iy].display.style.fontSize="12pt";
			f.cell[ix][iy].display.xy=[ix,iy];
			f.cell[ix][iy].display.ontouchstart=f.cell[ix][iy].display.onmousedown=f.cell[ix][iy].display.onmousemove=function(){docharge(this);}
			f.cell[ix][iy].display.ontouchend=f.cell[ix][iy].display.onmouseup=f.cell[ix][iy].display.onmouseleave=function(){stopcharge(this);}
//			f.cell[ix][iy].display.ontouchstart=
//			f.cell[ix][iy].display.innerHTML=1;
			f.display.appendChild(f.cell[ix][iy].display);
		}
	}
	document.body.appendChild(f.display);
}

function stopcharge(c)
{
	cell = fluid.cell[c.xy[0]][c.xy[1]]
	cell.charging = 0;
}

function docharge(c){
	cell = fluid.cell[c.xy[0]][c.xy[1]]
	cell.charging = 1;
}

function log(t){
	logger.innerHTML=t;
}

window.requestAnimFrame = (function(){ return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); }; })(); // usage: // instead of setInterval(render, 16) .... 
 (function animloop(){ requestAnimFrame(animloop); if (
 			(ignited) && (!onhold)
 			){render();} })();

function calcfps(){
	var thisLoop=new Date;
	framedur=thisLoop-lastLoop;
	fps=1000/framedur;
	lastLoop=thisLoop;
	fpsround=fps.toFixed(1);
}

function calcdelta(){
	delta.half=(framedur*.5/(dt/10));
//	delta.half=.5;
	delta.oct=delta.half/4;
}

function render(){
	
	calcfps();
	calcdelta();
	logline="fps: "+fpsround;
	log(logline);
	flip(fluid);
}

function flip(f){
	nxtf=f;
	for(ix=0;ix<f.width;ix++){
		for(iy=0;iy<f.height;iy++){


			if((x>(f.cellsize*ix)+f.x)&&
						(x<(f.cellsize*(ix+1))+f.x)&&
						(y>(f.cellsize*iy)+f.y)&&
						(y<(f.cellsize*(iy+1))+f.y)){
					docharge(f,ix,iy);
			}
			
			nxtf.cell[ix][iy].charge=
					f.cell[ix][iy].charge-
					f.cell[ix][iy].charge*delta.half;
			if(ix+1<f.width)nxtf.cell[ix][iy].charge+=
					f.cell[ix+1][iy].charge*delta.oct;
			if(ix-1>-1)nxtf.cell[ix][iy].charge+=
					f.cell[ix-1][iy].charge*delta.oct;
			if(iy+1<f.height)nxtf.cell[ix][iy].charge+=
					f.cell[ix][iy+1].charge*delta.oct;
			if(iy-1>-1)nxtf.cell[ix][iy].charge+=
					f.cell[ix][iy-1].charge*delta.oct;
					
//			nxtf.cell[ix][iy].charge=nxtf.cell[ix][iy].charge>1?1:nxtf.cell[ix][iy].charge;
//			nxtf.cell[ix][iy].charge=nxtf.cell[ix][iy].charge<0?0:nxtf.cell[ix][iy].charge;

			if (nxtf.cell[ix][iy].charging)
				nxtf.cell[ix][iy].charge	+= (1-nxtf.cell[ix][iy].charge)/2;

			gray=Math.round(f.cell[ix][iy].charge*255);
			f.cell[ix][iy].display.style.background="rgb("+gray+","+gray+","+gray+")";
	}}
	f=nxtf;
}
