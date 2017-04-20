// Drawing 1

var pause = false;

function setup() {
  createCanvas(600, 450);
  
  dogAttack = createVideo('media/dogVid.mp4');
  dogAttack.loop();
  dogAttack.hide();
  text('Click To Play', 30, 40);
}

function draw() {
	image(dogAttack, 0, 0, 570, 420);
}

function mousePressed() {
	if(pause == false) {
		pause = true;
		dogAttack.pause();
	}
	else {
		pause = false;
		dogAttack.loop();
	}
}