
var cube = document.getElementsByClassName("cube");

cube.addEventListener("onclick", move());

function move() {
	var x = event.clientX;     
	cube.style.transform = "rotateX(" + x + "deg)";
};