let sX=5;
let sY=4;
let spriteSheet;

let celW, celH;
let cels = [];
function preload() {
  spriteSheet = loadImage("./sprites/char.jpg");
}

function setup() {
  frameRate(20);
  createCanvas(400, 400);
  celW = spriteSheet.width / sX;
  celH = spriteSheet.height / sY;
  for (let i = 0; i < sY; i += 1) {
    for (j = 0; j < sX; j += 1) {
      cels[i*sX + j] = spriteSheet.get(j*celW, i*celH, celW ,celH );
    }
  }
}

function draw() {
  background(248);
  image(cels[frameCount % 20], 0, 0);
}
