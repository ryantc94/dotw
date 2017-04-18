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

      		var r = video.pixels[index]; // access red value of current pixel
      		var g = video.pixels[index + 1]; // access green value
      		var b = video.pixels[index + 2]; // access blue value

      		var gray = (r + g + b) / 3;

      		fill(gray);
      		noStroke();
      		ellipse(x * vScale, y * vScale, vScale-1, vScale-1);
      	}
    }	
}

function draw() {

	//sound https://www.youtube.com/watch?v=NF1lwZ24RYI
}