function Gem(x, y) {
  this.x = x;
  this.y = y;
}

function Fire(x, y, id) {
  this.x = x;
  this.y = y;
  this.id = id;
}

function gemSpawn() {
  gems.push(new Gem(500, random(20, 320)))
  timeSave = millis()
}

function fireSpawn() {
  fire.push(new Fire(500, random(20, 320), round(random(1, 6))))
  timeSave2 = millis()
}

function gemDraw() {
  for (i = 0; i < gems.length; i++) {
    gems[i].draw();
    gems[i].x -= 5;
    gems[i].detect();
    // if (gems[i].x<-50) {
    //  gems.splice(i, 1);
    //}
  }
}

function fireDraw() {
  for (i = 0; i < fire.length; i++) {
    fire[i].draw();
    fire[i].detect();
    if (fire[i].id === 1 || fire[i].id === 5 || fire[i].id === 6) {
      fire[i].x -= 5;
    } else {
      fire[i].x -= 1.5;
    }
    // if (fire[i].x<-50) {
    //  fire.splice(i, 1);
    // }
  }
}

Gem.prototype.detect = function() {
  if (man.x > this.x - 30 && man.x < this.x + 30 && man.y > this.y - 55 && man.y < this.y + 55) {
    this.x -= 400
    man.score++;
  }
}
Fire.prototype.detect = function() {
  if (this.id === 1 || this.id === 5 || this.id === 6) {
    if (man.x > this.x - 40 && man.x < this.x + 40 && man.y > this.y - 65 && man.y < this.y + 65) {
      this.x -= 500
      scene = 2;
    }
  }
  if (this.id === 2) {
    if (man.x > this.x && man.x < this.x + 100 && ((man.y > 0 && man.y < 100) || (man.y > 300 && man.y < 400))) {
      this.x -= 500
      scene = 2;
    }
  }
  if (this.id === 3) {
    if (man.x > this.x && man.x < (this.x + 100) && man.y > 0 && man.y < 200) {
      this.x -= 500
      scene = 2;
    }
  }
  if (this.id === 4) {
    if (man.x > this.x && man.x < (this.x + 100) && man.y > 200 && man.y < 400) {
      this.x -= 500
      scene = 2;
    }
  }
}
Gem.prototype.draw = function() {
  push()
  imageMode(CENTER);
  rectMode(CENTER);
  //rect(this.x, this.y, 30, 55);
  image(gemImg, this.x, this.y);
  pop()
}
Fire.prototype.draw = function() {
  fill(161, 0, 0);
  if (this.id === 1 || this.id === 5 || this.id === 6) {
    push()
    imageMode(CENTER);
    rectMode(CENTER);
    //rect(this.x-20, this.y+5, 60, 60);
    image(fireImg, this.x, this.y);
    pop()
  } else if (this.id === 2) {
    push()
    rect(this.x, 0, 100, 100)
    rect(this.x, 300, 100, 100)
    pop()
  } else if (this.id === 3) {
    push()
    rect(this.x, 0, 100, 200)
    fill(0, 0, 0)
    pop()
  } else if (this.id === 4) {
    push()
    rect(this.x, 200, 100, 200)
    pop()
  }




}