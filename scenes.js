function scene1() {
  background(255, 0, 0);
  drawStatic();
  renderFloor();
  man.fall();
  man.draw();
  fireDraw();
  gemDraw();
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
  image(logo, 70, 150)
  logo.resize(350, 0)
  btn1.draw();
  btn2.draw();
}
function scene2() {
  background(255, 0, 0);
  fill(138, 1, 1);
  textStyle(BOLD);
  text("GAME OVER", 170, 150);
  textStyle(NORMAL);
  text("You Got " + man.score + " Gems", 160, 200)
  btn3.draw();
}
function scene3() {
  background(255, 0, 0);
  fill(138, 1, 1);
  textStyle(BOLD);
  text("INSTRUCTIONS", 170, 50);
  textStyle(NORMAL);
  text("Deep in the core of the Earth lives Maggy, a derpy\n-looking creature made out of magma who exists in a \nsecret civilization. The main currency are gems and \nMaggy is looking a bit broke. Help Maggy as they run \nthrough the core of the Earth where at the slightest jump \nwill change the gravitational pull. \nCollect Gems. Avoid Literally Anything Else. \nArrow Keys to Move. Space to Switch Gravity.", 30, 100)
  btn4.draw();
}