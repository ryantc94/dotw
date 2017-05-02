// Cube rotation

var frontBtn = document.getElementById('front');
var backBtn = document.getElementById('back');
var leftBtn = document.getElementById('left');
var rightBtn = document.getElementById('right');
var topBtn = document.getElementById('top');
var bottomBtn = document.getElementById('bottom');

var cube = document.getElementById('cube');

function rotateFront() {
  cube.className = 'rotate-front';
}

function rotateBack() {
  cube.className = 'rotate-back';
}

function rotateLeft() {
  cube.className = 'rotate-left';
}

function rotateRight() {
  cube.className = 'rotate-right';
}

function rotateTop() {
  cube.className = 'rotate-top';
}

function rotateBottom() {
  cube.className = 'rotate-bottom';
}

frontBtn.addEventListener('click', rotateFront);
backBtn.addEventListener('click', rotateBack);
leftBtn.addEventListener('click', rotateLeft);
rightBtn.addEventListener('click', rotateRight);
topBtn.addEventListener('click', rotateTop);
bottomBtn.addEventListener('click', rotateBottom);