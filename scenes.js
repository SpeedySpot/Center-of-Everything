function scene1() {
  background(255, 0, 0);
  drawStatic();
  renderFloor();
  man.fall();
  man.draw();
   gemDraw();
  fireDraw();
  fill(0, 0, 0);
  text(man.score, 20, 35);
  if (keyIsDown(LEFT_ARROW) && keyIsDown(RIGHT_ARROW)) {
    
  }
  else if (keyIsDown(LEFT_ARROW)) {
    man.left();
  } else if (keyIsDown(RIGHT_ARROW)) {
    man.right();
  }
}

function scene0() {
  background(255, 0, 0);
  fill(0, 0, 0);
  textSize(10);
  text("Press Any Key", 205, 350);
  image(logo, 70, 165)
  logo.resize(350, 50)
  if (keyIsPressed) {
    scene = 1;
  }
}
function scene2() {
  background(255, 0, 0);
  fill(138, 1, 1);
  textStyle(BOLD);
  text("GAME OVER", 170, 200);
  textStyle(NORMAL);
  text("You Got " + man.score + " Gems", 160, 300)
}