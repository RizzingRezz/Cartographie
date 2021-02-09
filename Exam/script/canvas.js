const canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d')
var compass = new Image()
var aiguille = new Image()
aiguille.src = 'needle.png'; 
compass.src = 'compass.png';

aiguille.addEventListener('load', function() {
	ctx.drawImage(compass, 0, 0);
	canvasRotation(0)
	svgRotation(0)
}, false);

window.addEventListener("deviceorientation", handleOrientation, true);

function handleOrientation(event) {
    canvasRotation(event.gamma)
    svgRotation(event.gamma)
}

function canvasRotation(degrees){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.save();
	ctx.translate(canvas.width/2,canvas.height/2);
	ctx.rotate(degrees * Math.PI/180);
	ctx.drawImage(aiguille,-aiguille.width/2,-aiguille.width/2)
	ctx.restore();
}

function svgRotation(degrees){
	document.querySelector('#svg').style.transform = `rotate(${degrees}deg)`;
}




