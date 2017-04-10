
var single = document.getElementById("single");
var position = 100;

function float() {
	requestAnimationFrame(float);

	if(position > 500) {
		cancelAnimationFrame(animation);
	}
	else {
		position += 3;
		single.style.top = position + "px";
		single.style.left = position + "px";
	}
}

requestAnimationFrame(float);