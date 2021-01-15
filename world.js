var floorX = [];

function drawStatic() {
  noStroke();
  fill(82, 0, 0);
  rect(0, 0, 500, 50);
  rect(0, 350, 500, 50);
  fill(255, 255, 255);
  textSize(25);
}

function renderFloor() {
  for (i = 0; i < floorX.length; i++) {
    push()
    scale(0.5);
    image(tile, floorX[i], 690);
    image(tile2, floorX[i], 0);
    floorX[i] -= 3;
    if (floorX[i] <= -110) {
      floorX[i] = width * 2;
    }
    pop()
  }
  text(man.score, 20, 35);
}