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