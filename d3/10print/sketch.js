let gsize = 15;
let xPos = 0;
let yPos = 0;
function setup() {
  createCanvas(400, 400);
  background(220);
  frameRate(10);
}

function draw() {

  /*
  rect(xPos,yPos,gsize);
  xPos+=gsize;
  if(xPos>width){
    xPos = 0;
    yPos +=gsize;
  }
  */
  fill(yPos,gsize,xPos);
  rect(400,400);  
  let choice = random(0, 1);
  if (choice <= 0.25) {
    fill(xPos,yPos,100);
    rect(xPos,yPos,gsize);
  }
  else if (choice>0.25 && choice <= 0.5) {
    fill(xPos,yPos,100);
    ellipse(xPos+gsize/2,yPos+gsize/2,gsize);
  }else if (choice>0.5 && choice <= 0.75) {
    stroke(xPos,yPos,100);
    line(xPos,yPos,xPos+gsize,yPos+gsize);
  }else{
     stroke(xPos,yPos,100);
    line(xPos+gsize,yPos,xPos,yPos+gsize);

  }

  xPos += gsize;
  if (xPos > width) {
    xPos = 0;
    yPos += gsize;
  }


}
