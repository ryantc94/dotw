// Drawing 1

function setup() {
  createCanvas(600, 450);
  
  dogAttack = createVideo('js/dogVid.mp4');
  dogAttack.loop();
  dogAttack.hide();
}

function draw() {
	image(dogAttack, 0, 0, 800, 450);
}