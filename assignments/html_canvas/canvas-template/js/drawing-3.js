var canvas = document.getElementById('drawing');
var context = canvas.getContext('2d');

var dog = new Image();
dog.src = 'doggo.jpeg';

function draw() {
  context.drawImage(dog, 0, 0);
}

var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
var data = imageData.data;

for (var i = 0; i < data.length; i += 4) {
	data[i] = 255 - data[i];
	data[i + 1] = 255 - data[i + 1];
	data[i + 2] = 255 - data[i + 2]; 
}

// redraw image with updated pixels
context.putImageData(imageData, 0, 0);