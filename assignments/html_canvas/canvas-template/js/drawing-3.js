// Drawing 3

function setup() {
  createCanvas(600, 450);

  //global
  doggoPhoto = loadImage('media/doggo.jpeg');
}

function draw() {
	image(doggoPhoto, 0, 0);
	image(doggoPhoto, mouseX, mouseY, 100, 100);
}