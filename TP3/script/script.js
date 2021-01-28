var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = document.getElementById("fond");
//image
ctx.drawImage(img,0,0);
ctx.stroke();

//sun
ctx.fillStyle = "yellow"; 
ctx.beginPath();
ctx.arc(60,60,30,0,Math.PI*2,true);
ctx.closePath();
ctx.fill();

//wall
ctx.fillStyle = "orange"; //red
ctx.beginPath();
ctx.rect(100, 250, 150, 200);
ctx.lineWidth = 10;
ctx.strokeStyle = 'brown';
ctx.stroke()
ctx.closePath();
ctx.fill();

//door
ctx.fillStyle = "#986100"; //red
ctx.beginPath();
ctx.rect(120, 300, 75, 100);
ctx.lineWidth = 10;
ctx.strokeStyle = 'brown';
ctx.stroke()
ctx.closePath();
ctx.fill();

//roof
ctx.beginPath();
ctx.moveTo(100, 250);
ctx.lineTo(250, 250);
ctx.lineTo(175, 180);
ctx.closePath();
ctx.lineWidth = 10;
ctx.strokeStyle = 'brown';
ctx.stroke();
ctx.fillStyle = "red";
ctx.fill();

function changeBackground()
{
	if( sky.style.fill =='gray' )
	{
		sky.style.fill='blue'; 
	}else{
		sky.style.fill='gray';
	}
}
