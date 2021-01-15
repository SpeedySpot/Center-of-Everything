function Person() {
  this.x = 50;
  this.y = 300;
  this.gravity = 0;
  this.score = 0;
  this.frame = 0;

}

Person.prototype.draw = function() {
  push();
  rectMode(CENTER);
  imageMode(CENTER);
  fill(255, 255, 255);
  //rect(this.x, this.y, 50, 50)
  if (man.gravity === 0) {
  if (man.frame === 0) {
    image(maggy1, this.x, this.y)
  }
  else {
    image(maggy2, this.x, this.y)
  }
  }
  else {
    if (man.frame === 0) {
    image(maggy3, this.x, this.y)
  }
  else {
    image(maggy4, this.x, this.y)
  }
  }
  

  this.x = constrain(this.x, 24, 473);
  pop();
}

Person.prototype.fall = function() {
  this.y = constrain(this.y, 75, 325);
  if (this.gravity === 0) {
    this.y += 8;
  } else {
    this.y -= 8;
  }
  
}

Person.prototype.left = function() {
  this.x -= 4;
}

Person.prototype.right = function() {
  this.x += 4;
}

Person.prototype.flip = function() {
  if (this.gravity === 0) {
    this.gravity = 1;
  }
  else {
    this.gravity = 0;
  }
}

function keyPressed() {
  if (key === ' ') {
    man.flip();
  }
}