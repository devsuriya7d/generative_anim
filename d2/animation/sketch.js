let x;
let y;
function setup() {
  createCanvas(400, 400);
  x=0;
  y=400;
}

function draw() {
  background(220);
  fill(25);
  ellipse(x,200,100/3);
  x=x+3;

  ellipse(y,mouseX,mouseY);
  y=y-1;
}
