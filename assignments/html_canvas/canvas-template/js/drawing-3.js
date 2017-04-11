// Drawing 3

function setup() {
  createCanvas(600, 450);

  //global
  flight = createVideo('media/flight.mp4');
  doggoPhoto = loadImage('doggo.jpeg');
}

function draw() {
	image(doggoPhoto, 0, 0);
}