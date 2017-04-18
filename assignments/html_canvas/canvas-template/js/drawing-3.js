	// Drawing 3
var picture; 
var vScale = 10;
var c1 = Math.random(255);
var c2 = Math.random(255);
var c3 = Math.random(255);
var circleHover;

var x = [];


function preload(){
	picture = loadImage('media/doggo.jpeg');
}

function setup() {
  	createCanvas(600, 450);

  	picture.loadPixels();

	
}

function draw() {

	ellipseMode(CORNER);

	var distance = dist(mouseX, mouseY, width/2, height/2);

  // Determine if distance is less than circle radius
	if (distance < 50) {
		circleHover = true;
	} else {
	    circleHover = false;
	}

	ellipseMode(CENTER);
  	noStroke();

	if (circleHover == true) {
    	for (var y = 0; y < picture.height; y++) { 
    		for (var x = 0; x < picture.width; x++) { 
      			var index = (x + y * picture.width) * 4; 

      			fill(c1, c2, c3);
	      		noStroke();
	      		ellipse(x * vScale, y * vScale, vScale-1, vScale-1);
      		}
  		}
  	}	

  	ellipse(width/2, height/2, 100, 100);
}