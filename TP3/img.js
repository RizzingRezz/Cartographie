//image
img.src='montagne.jpg';
img.with="600";
img.height="400";
img.onload = function(){
	ctx.drawImage(img,0,0);
	ctx.stroke();
}