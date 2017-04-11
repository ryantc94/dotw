// Drawing 1

function setup() {
  createCanvas(600, 450);
  
  dogAttack = createVideo('dogVid.mp4');
}

function draw() {
	image(dogAttack, 0, 0, 800, 450);
}