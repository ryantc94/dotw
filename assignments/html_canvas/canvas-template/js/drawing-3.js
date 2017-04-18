	// Drawing 3
var picture; 
var vScale = 10;
var c1 = random(255);
var c2 = random(255);
var c3 = random(255);

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
}