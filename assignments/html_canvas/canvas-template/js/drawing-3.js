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
}

function draw() {

	picture.loadPixels();

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
    	fill(100);
    	cursor(HAND);
  	} else {
    	fill(200);
    	cursor(ARROW);
  	}

  	ellipse(width/2, height/2, 100, 100);
}

function mousePressed() {
  if (circleHover == true) {
    backgroundColor = color(random(255), random(255), random(255));
    spaceBlast.play();
  }
}