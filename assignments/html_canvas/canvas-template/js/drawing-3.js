	// Drawing 3
var picture; 
var vScale = 10;

function preload(){
	picture = loadImage('media/doggo.jpeg');
}

function setup() {
  createCanvas(600, 450);

  picture.loadPixels();

	ellipseMode(CORNER);

	for (var y = 0; y < picture.height; y++) { 
    	for (var x = 0; x < picture.width; x++) { 
      		var index = (x + y * picture.width) * 4; 


      		fill(random(255), random(255), random(255))
      		noStroke();
      		ellipse(x * vScale, y * vScale, vScale-1, vScale-1);
      	}
    }	

}

function draw() {

	//sound https://www.youtube.com/watch?v=NF1lwZ24RYI
}