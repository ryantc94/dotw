// Drawing 2

function setup() {
  createCanvas(600, 450);
  wow = loadImage("media/wow.png")
}

x1 = 300;
y1 = 225; 

x2 = 0;
y2 = 0 

function draw() {

	background(220);
	
	fill(0, 0, 0);

	noStroke();

	ellipseMode(CENTER);

	image(wow, 300, 75, 50, 50);
	image(wow, 400, 120, 50, 50);
	image(wow, 450, 225, 50, 50);
	image(wow, 400, 330, 50, 50);
	image(wow, 300, 375, 50, 50);
	image(wow, 200, 330, 50, 50);
	image(wow, 150, 225, 50, 50);
	image(wow, 200, 120, 50, 50);

}