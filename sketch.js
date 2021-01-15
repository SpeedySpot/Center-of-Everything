var man;
var fire = [];
var gems = [];
var scene = 0;
let timeSave = 0;
let clock = 1000;
let timeSave2 = 0;
let clock2 = 3000;



let gemImg;

function preload() {
  tile = loadImage('assets/tile.png');
  tile2 = loadImage('assets/tile2.png');
  gemImg = loadImage('assets/gem.png');
  fireImg = loadImage('assets/fire.png');
  maggy1 = loadImage('assets/Maggy1.png');
  maggy2 = loadImage('assets/Maggy2.png');
  maggy3 = loadImage('assets/Maggy3.png');
  maggy4 = loadImage('assets/Maggy4.png');
  logo = loadImage('assets/cooltext373957767755489.png');
  
    maggy1.resize(40, 50);
  maggy2.resize(50, 50);
  maggy3.resize(40, 50);
  maggy4.resize(50, 50);
}

function setup() {
  createCanvas(500, 400);
  rectMode(CORNER);
  timeSave = millis();
  man = new Person();
  for (i = 0; i < 15; i++) {
    floorX.push(i * 95)
  }
}

function draw() {
  if (scene === 0) {
    scene0();
  }
  if (scene === 1) {
    scene1();
    if (millis() > timeSave + clock) {
      gemSpawn();
      if (man.frame === 0) {
        man.frame = 1
      }
      else {
        man.frame = 0;
      }
      
    }
    if (millis() > timeSave2 + clock2) {
      fireSpawn();
    }
  }
  if (scene === 2) {
    scene2();
  }

}