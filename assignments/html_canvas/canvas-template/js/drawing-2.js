// Drawing 2

function setup() {
  createCanvas(600, 450);
  wow = loadImage("media/wow.png")
}


var x = 450;
var speed = 2;

function draw() {

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

	if ((x > 600) || (x < 0)) {
    	speed = speed * -1;
  	}

}