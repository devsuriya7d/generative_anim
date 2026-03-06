let sX=8;
let sY=4;
let spriteSheet;

let celW, celH;
let cels = [];
function preload() {
  spriteSheet = loadImage("./sprites/explosionFull.png");
}

function setup() {
  createCanvas(400, 400);
  celH = spriteSheet.width / sX;
  celW = spriteSheet.height / sY;
  for (let i = 0; i < sY; i += 1) {
    for (j = 0; j < sX; j += 1) {
      cels[i*sX + j] = spriteSheet.get(j*celW, i*celH, celW ,celH );
    }
  }
}

function draw() {
  background(0);
  image(cels[frameCount % 32], 0, 0);
}
