
var cube = document.getElementsByClassName("cube");

cube.addEventListener("onclick", function() {
	var x = event.clientX;     
	
	cube.style.transform = "rotateX(" + x + "deg)";
});