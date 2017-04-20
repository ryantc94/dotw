// Drawing 3

function setup() {
	createCanvas(600, 450);

	doggoPhoto = loadImage('media/doggo.jpeg');
	loadPixels();
	pxd = pixelDensity();
	pxWidth = width * pxd;
  	pxHeight = height * pxd;

	for (var y = 0; y < pxHeight; y++) { // for every row
    	for (var x = 0; x < pxWidth; x++) { // visit every column (pixel)
      		var index = (x + y * pxWidth) * 4; // index position of every pixel
      
      		pixels[index] = random(255); // red
      		pixels[index + 1] = (x / width) * 255; // green
      		pixels[index + 2] = (y / height) * 255; // blue
      		pixels[index + 3] = 200; // alpha
    	}
  	}
  	updatePixels();
  	blendMode(EXCLUSION);
  	image(doggoPhoto, 0, 0);

  //global
	doggoPhotoMouse = loadImage('media/doggo.jpeg');
}

function draw() {
	image(doggoPhotoMouse, mouseX, mouseY, 100, 100);
}