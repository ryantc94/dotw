
var play = document.getElementById("play");
var stop = document.getElementById("stop");

function go() {
	document.getElementById("song").play();
	document.getElementById("single").className = "animate";
}

function pause() {
	document.getElementById("song").pause();
	document.getElementById("single").className = "pause";
}

play.addEventListener('click', go);
stop.addEventListener('click', pause) 
