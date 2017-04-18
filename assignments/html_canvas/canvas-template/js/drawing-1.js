// Drawing 1

var video; 
var vScale = 10;

function preload() {
	video = createVideo('media/dogVid.mp4');
}

function setup() {
  createCanvas(600, 450);
  
  video.loop();
  video.hide();
}

function draw() {
	video.loadPixels();
	// image(dogAttack, 0, 0, 800, 450);

	ellipseMode(CENTER);

	for (var y = 0; y < video.height; y++) { 
    	for (var x = 0; x < video.width; x++) { 
      		var index = (x + y * video.width) * 4; 

      		var r = video.pixels[index]; // access red value of current pixel
      		var g = video.pixels[index + 1]; // access green value
      		var b = video.pixels[index + 2]; // access blue value

      		var gray = (r + g + b) / 2; 
      		noStroke();
      		ellipse(x * vScale, y * vScale, vScale-1, vScale-1);
      	}
    }	
}