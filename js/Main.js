var canvas, ctx;
var greenCar = new carClass();
var blueCar = new carClass();

window.onload = function () {
  canvas = document.getElementById('gameCanvas'); // Get canvas; its width and height.
  ctx = canvas.getContext('2d'); // Get the graphics buffer. Where we can draw graphics.

  colorRect(0, 0, canvas.width, canvas.height, 'black');
  colorText('LOADING IMAGES', canvas.width / 2, canvas.height / 2, 'white');

  loadImages();
};

function imageLoadingDoneSoStartGame() {
  var framesPerSecond = 30;
  setInterval(updateAll, 1000 / framesPerSecond);

  setupInput();
  loadLevel(levelOne);
}

function loadLevel(whichLevel) {
  trackGrid = whichLevel.slice();
  greenCar.reset(greenCarPic, 'Green Machine');
  blueCar.reset(blueCarPic, 'Blue Storm');
}

function updateAll() {
  moveAll();
  drawAll();
}

function moveAll() {
  greenCar.move();
  blueCar.move();
}

function drawAll() {
  drawTracks();
  greenCar.draw();
  blueCar.draw();
}
