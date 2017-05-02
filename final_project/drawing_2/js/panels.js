
var panel_0 = document.getElementById("panel_0");
var panel_1 = document.getElementById("panel_1");
var panel_2 = document.getElementById("panel_2");
var panel_3 = document.getElementById("panel_3");
var panel_4 = document.getElementById("panel_4");
var panel_5 = document.getElementById("panel_5");

var inc_0 = -260;
var inc_1 = 0;
var inc_2 = 260;
var inc_3 = 520;
var inc_4 = 780;
var inc_5 = 1040;

var changeWidth = 130;
function move() {
	requestAnimationFrame(move); // recursive function call
	if (inc_0 >= screen.width - 130) { // when skater is past the frame
		changeWidth -= 0.5;
		panel_0.style.width = changeWidth + "px";
	} 
	if (inc_1 >= screen.width - 130) { // when skater is past the frame
		changeWidth -= 0.5;
		panel_1.style.width = changeWidth + "px";
	} 
	else if (inc_2 >= screen.width - 130) { // when skater is past the frame
		changeWidth -= 0.5;
		panel_2.style.width = changeWidth + "px";
	} 
	else if (inc_3 >= screen.width - 130) { // when skater is past the frame
		changeWidth -= 0.5;
		panel_3.style.width = changeWidth + "px";
	} 
	else if (inc_4 >= screen.width - 130) { // when skater is past the frame
		changeWidth -= 0.5;
		panel_4.style.width = changeWidth + "px";
	} 
	else if (inc_5 >= screen.width - 130) { // when skater is past the frame
		changeWidth -= 0.5;
		panel_5.style.width = changeWidth + "px";
	} 


	if (inc_0 >= screen.width) { // when skater is past the frame
		panel_0.style.left = "-260px";
		inc_0 = -260;
		changeWidth = 130;
		panel_0.style.width = changeWidth + "px";
	} 
	if (inc_1 >= screen.width) { // when skater is past the frame
		panel_1.style.left = "-260px";
		inc_1 = -260;
		changeWidth = 130;
		panel_1.style.width = changeWidth + "px";
	} 
	else if (inc_2 >= screen.width) { // when skater is past the frame
		panel_2.style.left = "-260px";
		inc_2 = -260;
		changeWidth = 130;
		panel_2.style.width = changeWidth + "px";
	} 
	else if (inc_3 >= screen.width) { // when skater is past the frame
		panel_3.style.left = "-260px";
		inc_3 = -260;
		changeWidth = 130;
		panel_3.style.width = changeWidth + "px";
	} 
	else if (inc_4 >= screen.width) { // when skater is past the frame
		panel_4.style.left = "-260px";
		inc_4 = -260;
		changeWidth = 130;
		panel_4.style.width = changeWidth + "px";
	} 
	else if (inc_5 >= screen.width) { // when skater is past the frame
		panel_5.style.left = "-260px";
		inc_5 = -260;
		changeWidth = 130;
		panel_5.style.width = changeWidth + "px";
	} 
	else {
		inc_0 += 0.5;
		inc_1 += 0.5;
		inc_2 += 0.5;
		inc_3 += 0.5;
		inc_4 += 0.5;
		inc_5 += 0.5;
		panel_0.style.left = inc_0 + "px";
 		panel_1.style.left = inc_1 + "px";
		panel_2.style.left = inc_2 + "px";
		panel_3.style.left = inc_3 + "px";
		panel_4.style.left = inc_4 + "px";
		panel_5.style.left = inc_5 + "px";
	}
}

var animation = requestAnimationFrame(move);