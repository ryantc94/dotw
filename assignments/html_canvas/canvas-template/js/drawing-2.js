// Drawing 2

var mousePressed = false;

function setup() {
  createCanvas(600, 450);
  wow = loadImage("media/wow.png")
}


var x = 450;
var speed;

function draw() {

	if(mousePressed == true) {
		speed = 0;
	}
	else {
		speed = 2;
	}

	background(220);
	
	fill(0, 0, 0);

	noStroke();

	ellipseMode(CENTER);

	image(wow, 300 + x, 75, 50, 50);
	image(wow, 400 + x, 120, 50, 50);
	image(wow, 450 + x, 225, 50, 50);
	image(wow, 400 + x, 330, 50, 50);
	image(wow, 300 + x, 375, 50, 50);
	image(wow, 200 + x, 330, 50, 50);
	image(wow, 150 + x, 225, 50, 50);
	image(wow, 200 + x, 120, 50, 50);

	x += speed;

	if ((x > 450) || (x < -200)) {
    	speed = speed * -1;
  	}

}

function mousePressed() {
	mousePressed = true;
  	speed = 0;
}


