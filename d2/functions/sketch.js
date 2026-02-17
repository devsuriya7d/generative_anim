function setup() {
  createCanvas(400, 400);
  background(220);
}

  

function drawboat(x,y){
  rect(x,y,100,35,0,0,15,15); //x=200,y=190
  triangle(x+20,y-10,x+50,y-10,x+45,y-60);
}

function mouseDragged(){
  drawboat(mouseX,mouseY);
}

