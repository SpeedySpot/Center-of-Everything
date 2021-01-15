function Button(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 150;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.onClick = config.onClick || function() {};
    this.colour = config.colour || [255, 255, 255];
}

Button.prototype.draw = function() {
    fill(this.colour[0], this.colour[1], this.colour[2]);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};

Button.prototype.isMouseInside = function() {
    return mouseX > this.x &&
           mouseX < (this.x + this.width) &&
           mouseY > this.y &&
           mouseY < (this.y + this.height);
};

Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

mouseClicked = function() {
    if (scene === 0) {
    btn1.handleMouseClick();
      btn2.handleMouseClick();
    }
    else if (scene === 2) {
      btn3.handleMouseClick();
    }
    else if (scene === 3) {
      btn4.handleMouseClick();
    }
  
    
  
};

var btn1 = new Button({
    x: 70,
    y: 300,
    colour: [199, 0, 0],
    label: "Play!",
    onClick: function() {
      scene = 1;
    }
});
var btn2 = new Button({
    x: 270,
    y: 300,
    colour: [199, 0, 0],
  label: "Instructions",
    onClick: function() {
      scene = 3;
      scene3();
    }
});
var btn3 = new Button({
    x: 160,
    y: 250,
    colour: [199, 0, 0],
  label: "Menu",
    onClick: function() {
      scene = 0;
      gems.splice(0);
      fire.splice(0);
      man.score = 0;
      man.x = 50;
      man.y = 300;
      man.gravity = 0;
    }
});
var btn4 = new Button({
    x: 165,
    y: 300,
    colour: [199, 0, 0],
  label: "Menu",
    onClick: function() {
      scene = 0;
    }
});
