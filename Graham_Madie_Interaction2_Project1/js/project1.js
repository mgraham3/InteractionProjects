//Week 4 Jquery: Animation & FadeOut Exp.1//
//not fleeting fadeout//
$(document).ready(function(){
    $(".notfleeting").delay(1000).fadeOut("50000");
});
//ever animation to top//ss
$(document).ready(function(){
    $('.ever')
        .delay(500)
        .animate({top:'100px'}, 1000); 
});
//changinganimation to top//
$(document).ready(function(){
    $('.changing')
        .delay(1000)
        .animate({top:'100px'}, 1000); 
});
//ever fadeout//
$(document).ready(function(){
    $('.ever')
        .delay(500)
        .fadeOut("40000"); 
});
//changing fadeout//
$(document).ready(function(){
    $('.changing')
        .delay(500)
        .fadeOut("40000"); 
});
//everywhere animation to the top//
$(document).ready(function(){
    $('.everywhere')
        .delay(3000)
        .animate({top:'70px'}, 1000); 
});

//Week 4 Jquery: Animation & FadeTo Exp.2//
//fish fade//
$(document).ready(function(){
    $('#fishy').fadeOut(6000, 0.0);
    $('#fishy2').fadeOut(6000, 0.0);
     $('#fishy3').fadeOut(6000, 0.0);
     $('#fishy4').fadeOut(6000, 0.0);
});

//Week 4 Jquery: Animation & FadeIn Exp.3//
//sunflower fadein//
$(document).ready(function(){
    $("#sunfloweranimate").hide().fadeIn(3000, 0.0);
});

//Week 4 Jquery: Animation & Delay Exp.4//
$(document).ready(function(){
    $(".lifeis")
        .hide()
        .delay(1000)
        .fadeIn(1000);
});

//Week 4 Jquery: Animation & Scale Exp.5//
$(document).ready(function(){
    $(".heyu")
        .delay(3000)
        .animate({fontSize: '40pt'})
});
$(document).ready(function(){
    $(".swim")
        .delay(3000)
        .animate({fontSize: '24pt'})
});

//Week 4 Jquery: Animation & String Exp.6//
 $(".happyfish")
        .hide()
        .delay(1000)
        .fadeIn(1000)

//Week 4 Jquery: Animation & Subtle Exp.7//
$(document).ready(function(){
    $(".yousee")
        .fadeTo(3000, 0.25)
});

//Week 4 Jquery: Animation & Chaotic Exp.9//
$(document).ready(function loop(){
    $('#fish1')
        .delay(1000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish2')
        .delay(2000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish3')
        .delay(3000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish4')
        .delay(4000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish5')
        .delay(5000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish6')
        .delay(6000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish7')
        .delay(7000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish8')
        .delay(8000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish9')
        .delay(9000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish10')
        .delay(10000)
        .fadeOut(1000)
});

$(document).ready(function loop(){
    $('#fish11')
        .delay(11000)
        .fadeOut(1000)
});

$(document).ready(function loop(){
    $('#fish12')
        .delay(12000)
        .fadeOut(1000)
});

$(document).ready(function loop(){
    $('#fish13')
        .delay(13000)
        .fadeOut(1000)
});

$(document).ready(function loop(){
    $('#fish14')
        .delay(14000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish15')
        .delay(15000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish16')
        .delay(16000)
        .fadeOut(1000)
});

$(document).ready(function loop(){
    $('#fish17')
        .delay(17000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish18')
        .delay(18000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish19')
        .delay(19000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish20')
        .delay(20000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish21')
        .delay(21000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish22')
        .delay(22000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish23')
        .delay(23000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish24')
        .delay(24000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish25')
        .delay(25000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish26')
        .delay(26000)
        .fadeOut(1000)
});
$(document).ready(function loop(){
    $('#fish27')
        .delay(27000)
        .fadeOut(1000)
});
$(document).ready(function(){
    $(".plentyfish")
        .delay(29000)
        .animate({top: '40px', fontSize: '40pt'})
});

//Week 5 Jquery: Interaction & Click Exp.1//
$(document).ready(function(){
    $(".homophobia").hide();
});
$(".hidebutton").click(function () {
    $(".homophobia").fadeIn(2000);
});

//Week 5 Jquery: Interaction & Color Exp.2//
$(document).ready(function(){
    $(".apology1, .apology2, .apology3, .apology4, .apology5, .ally, .learnmore").hide();
});
$(".pasteldiv1").click(function () {
    $(".apology1").fadeIn(1000);
});
$(".pasteldiv2").click(function () {
    $(".apology2").fadeIn(1000);
});
$(".pasteldiv3").click(function () {
    $(".apology3").fadeIn(1000);
});
$(".pasteldiv4").click(function () {
    $(".apology4").fadeIn(1000);
});
$(".pasteldiv5").click(function () {
    $(".apology5").fadeIn(1000);
});
$(".pasteldiv6").click(function () {
    $(".ally, .learnmore").fadeIn(1000);
});

//Week 5 Jquery: Interaction & mouse Exp.3//
$(document).ready(function(){
    $(".church2, .forgiveness").hide();
});
$(".enter").mouseenter(function () {
    $(".enter").fadeOut(3000);
    $(".church1").fadeOut(3000);
    $(".church2").fadeIn(1000);
    $(".forgiveness").fadeIn(1000);
});

//Week 5 Jquery: Interaction & change css Exp.4//
$(document).ready(function(){
    $(".comes4, .intime4").hide();
});
$(".progress4").click(function () {
    $(".progress4").addClass("progressredorange");
    $(".comes4").fadeIn(1000);
});
$(".comes4").click(function () {
    $(".comes4").addClass("progressredorange");
    $(".intime4").fadeIn(1000);
    $(".intime4").addClass("progressredorange");
});

//Week 5 Jquery: Interaction & change css Exp.5//
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});

//Week 5 Jquery: Interaction & Overwhelm Exp.7//
$(document).ready(function(){
  $(".bibleverses1, .bibleverses2, .bibleverses3, .bibleverses4, .bibleverses5").click(function(){
    $(".bibleverses1, .bibleverses2, .bibleverses3, .bibleverses4, .bibleverses5").fadeOut(2000);
  });
});

//Week 5 Jquery: Interaction & Minimal Exp.8//
$(document).ready(function(){
    $(".eletrump, .dontbe, .elecircle").hide();
});
$(document).ready(function(){
  $(".divbackgroundminimal").click(function(){
    $(".eletrump, .dontbe, .elecircle").fadeIn(2000);
  });
});

//Week 5 Jquery: Interaction & Opacity Exp.9//
$(document).ready(function(){
    $(".weallow").hide();
});
$(".smile1").click(function () {
    $(".smile1").fadeTo(500, .25);
});
$(".smile2").click(function () {
    $(".smile2").fadeTo(500, .25);
});
$(".smile3").click(function () {
    $(".smile3").fadeTo(500, .25);
});
$(".smile4").click(function () {
    $(".smile4").fadeTo(500, .25);
    $(".weallow").fadeIn(500)
});

//Week 6 Jquery: Draw & SVG Exp.1//

$(document).ready(function(){
    $(".boo").hide().fadeIn(10000).fadeOut(2000);
});
$(document).ready(function(){
    $(".aghost").hide().fadeIn(10000).fadeOut(2000);
});

//Week 6 Jquery: Draw & Canvas Exp.2//
//Glowing Orb code from https://codepen.io/tonyism/pen/hIKHe//
window.onload = function(){
	var canvas = document.getElementById("myCanvas");
	var ctx = canvas.getContext("2d");
	
	//Make the canvas occupy the full page
	var W = window.innerWidth, H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	var particles = [];
	var mouse = {};
	
	//Lets create some particles now
	var particle_count = 50;
	for(var i = 0; i < particle_count; i++)
	{
		particles.push(new particle());
	}
	
	//finally some mouse tracking
	canvas.addEventListener('mousemove', track_mouse, false);
	
	function track_mouse(e)
	{
		//since the canvas = full page the position of the mouse 
		//relative to the document will suffice
		mouse.x = e.pageX;
		mouse.y = e.pageY;
	}
	
	function particle()
	{
		//speed, life, location, life, colors
		//speed.x range = -2.5 to 2.5 
		//speed.y range = -15 to -5 to make it move upwards
		//lets change the Y speed to make it look like a flame
		this.speed = {x: -2.5+Math.random()*5, y: -15+Math.random()*10};
		//location = mouse coordinates
		//Now the flame follows the mouse coordinates
		if(mouse.x && mouse.y)
		{
			this.location = {x: mouse.x, y: mouse.y};
		}
		else
		{
			this.location = {x: W/2, y: H/2};
		}
		//radius range = 10-30
		this.radius = 10+Math.random()*20;
		//life range = 20-30
		this.life = 20+Math.random()*10;
		this.remaining_life = this.life;
		//colors
		this.r = Math.round(Math.random()*255);
		this.g = Math.round(Math.random()*255);
		this.b = Math.round(Math.random()*255);
	}
	
	function draw()
	{
		//Painting the canvas black
		//Time for lighting magic
		//particles are painted with "lighter"
		//In the next frame the background is painted normally without blending to the 
		//previous frame
		ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, W, H);
		ctx.globalCompositeOperation = "lighter";
		
		for(var i = 0; i < particles.length; i++)
		{
			var p = particles[i];
			ctx.beginPath();
			//changing opacity according to the life.
			//opacity goes to 0 at the end of life of a particle
			p.opacity = Math.round(p.remaining_life/p.life*100)/100
			//a gradient instead of white fill
			var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
			gradient.addColorStop(0, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(1, "rgba("+p.r+", "+p.g+", "+p.b+", 0)");
			ctx.fillStyle = gradient;
			ctx.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
			ctx.fill();
			
			//lets move the particles
			p.remaining_life--;
			p.radius--;
			p.location.x += p.speed.x;
			p.location.y += p.speed.y;
			
			//regenerate particles
			if(p.remaining_life < 0 || p.radius < 0)
			{
				//a brand new particle replacing the dead one
				particles[i] = new particle();
			}
		}
	}
	
	setInterval(draw, 30);
}

//Week 6 Jquery: Generate & Random Exp.4//
function myFunction() {
  var x = document.getElementById("randomdate")
  x.innerHTML = Math.floor((Math.random() * 100) + 1);
}

//Week 6 Jquery: Generate & Wildcard Exp.6//
//Code found on https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-11.php//
   function display_random_image() 
{
     var theImages = [{
        src: "../images/week6-exp6-ghost1.jpg",
        width: "350",
        height: "350",
    }, {
        src: "../images/week6-exp6-ghost2.jpg",
        width: "350",
        height: "350",  
    }, {
        src: "../images/week6-exp6-ghost3.jpg",
        width: "350",
        height: "350",
    }, {
        src: "../images/week6-exp6-ghost4.jpg",
        width: "350",
        height: "350",
    },
                      {
        src: "../images/week6-exp6-ghost4.jpg",
        width: "350",
        height: "350",
    },
                     ];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image   
//document.body.append(newImage);
//}
$(".divrelative").append(newImage);
}

//Week 6 Jquery: Generate & Wildcard Exp.6//
//Code found on https://www.w3resource.com/javascript-exercises/javascript-dom-exercise-11.php//
   function display_random_image2() 
{
     var theImages = [{
        src: "../images/week6-exp7-haunt1.jpg",
        width: "250",
        height: "200",
    }, {
        src: "../images/week6-exp7-haunt2.jpg",
        width: "250",
        height: "200",  
    }, {
        src: "../images/week6-exp7-haunt3.jpg",
        width: "250",
        height: "200",
    }, {
        src: "../images/week6-exp7-haunt4.jpg",
        width: "250",
        height: "200",
    },
                      {
        src: "../images/week6-exp7-haunt5.jpg",
        width: "250",
        height: "200",
    },
                     ];
    
    var preBuffer = [];
    for (var i = 0, j = theImages.length; i < j; i++) {
        preBuffer[i] = new Image();
        preBuffer[i].src = theImages[i].src;
        preBuffer[i].width = theImages[i].width;
        preBuffer[i].height = theImages[i].height;
    }
   
// create random image number
  function getRandomInt(min,max) 
    {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
    
imn = Math.floor(Math.random() * (max - min + 1)) + min;
    return preBuffer[imn];
    }  

// 0 is first image,   preBuffer.length - 1) is  last image
  
var newImage = getRandomInt(0, preBuffer.length - 1);
 
// remove the previous images
var images = document.getElementsByTagName('img');
var l = images.length;
for (var p = 0; p < l; p++) {
    images[0].parentNode.removeChild(images[0]);
}
// display the image   
$(".ghosthunt").append(newImage);
}

//Week 6 Jquery: Interaction & Wildcard Exp.8//
//Code found on https://codepen.io/mikewax/pen/PweBpQ//
var canvas=document.getElementById("canvas2");
var ctx=canvas.getContext("2d");
var lastX;
var lastY;
var strokeColor="black";
var strokeWidth=5;
var mouseX;
var mouseY;
var canvasOffset=$("#canvas2").offset();
var offsetX=canvasOffset.left;
var offsetY=canvasOffset.top;
var isMouseDown=false;


function handleMouseDown(e){
  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  // Put your mousedown stuff here
  lastX=mouseX;
  lastY=mouseY;
  isMouseDown=true;
}

function handleMouseUp(e){
  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  // Put your mouseup stuff here
  isMouseDown=false;
}

function handleMouseOut(e){
  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  // Put your mouseOut stuff here
  isMouseDown=false;
}

function handleMouseMove(e){
  mouseX=parseInt(e.clientX-offsetX);
  mouseY=parseInt(e.clientY-offsetY);

  // Put your mousemove stuff here
  if(isMouseDown){
    ctx.beginPath();
    if(mode=="pen"){
      ctx.globalCompositeOperation="source-over";
      ctx.moveTo(lastX,lastY);
      ctx.lineTo(mouseX,mouseY);
      ctx.stroke();     
    }else{
      ctx.globalCompositeOperation="destination-out";
      ctx.arc(lastX,lastY,8,0,Math.PI*2,false);
      ctx.fill();
    }
    lastX=mouseX;
    lastY=mouseY;
  }
}

$("#canvas2").mousedown(function(e){handleMouseDown(e);});
$("#canvas2").mousemove(function(e){handleMouseMove(e);});
$("#canvas2").mouseup(function(e){handleMouseUp(e);});
$("#canvas2").mouseout(function(e){handleMouseOut(e);});

var mode="pen";
$("#pen").click(function(){ mode="pen"; });
$("#eraser").click(function(){ mode="eraser"; }); 

//Week 6 Jquery: Interaction & Wildcard Exp.9//
