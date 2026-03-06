let mymusics = [];
let bgmusics = [];
let x;
let y;
let xspeed;
let yspeed;

function preload() {
  soundFormats('mp3');
  for (i = 0; i < 4; i += 1) {
    mymusics[i] = loadSound("./assets/sounds/" + i + ".mp3");
    bgmusics[i] = loadSound("./assets/bgsound/" + i + ".mp3");
  }
}
function setup() {
  createCanvas(400, 400);
  //bgmusics[floor(random(4))].play();
  x = 0;
  y = height / 2;
  xspeed = random(0,5);
  yspeed = random(0,5);
}
function draw() {
  background(0);
  ellipse(x, y, 50);
  x = x + xspeed;
  y = y + yspeed;
  fill(255);
  if (x > width || x < 0) {
    xspeed = -xspeed;
  }
  if (y > height || y < 0) {
    yspeed = -yspeed;
  } console.log(xspeed, yspeed);
  
}

