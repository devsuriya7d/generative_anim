let yPos = 0;
let ySpeed = 20;
let xPos = 0;
let xSpeed = 20;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(220);
}

function draw() {
  
  ellipse(xPos, yPos, 70);
  xPos = xPos + xSpeed;
  yPos = yPos + ySpeed;

  if (yPos > height || yPos < 0) {
    ySpeed = -ySpeed;
    fill(200,20,20);
  }
  if(xPos > width || xPos <0) {
    xSpeed = -xSpeed;
    fill(20,20,200);
  }

}
