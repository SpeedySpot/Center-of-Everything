var man;
var fire = [];
var gems = [];
var scene = 0;



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
  logo = loadImage('assets/logo.png');
  

}

function setup() {
  createCanvas(500, 400);
    maggy1.resize(40, 50);
  maggy2.resize(50, 50);
  maggy3.resize(40, 50);
  maggy4.resize(50, 50);
  rectMode(CORNER);
  timeSave = millis();
  man = new Person();
  for (i = 0; i < 15; i++) {
    floorX.push(i * 95)
  }
  clock1 = new Clock({
    clock: 1000,
    start: function() { 
      gemSpawn();
    }
  })
  clock2 = new Clock({
    clock: 3000,
    start: function() { 
      fireSpawn();
    }
  })
  clock3 = new Clock({
    clock: 500,
    start: function() { 
      if (man.frame === 0) {
        man.frame = 1
      }
      else {
        man.frame = 0;
      }
    }
  })
  
}

function draw() {
  if (scene === 0) {
    scene0();
  }
  if (scene === 1) {
    scene1();
    clock1.tick();
    clock2.tick();
    clock3.tick();
  }
  if (scene === 2) {
    scene2();
  }
  if (scene === 3) {
    scene3();
  }

}