let x = 0;
function setup() {
  createCanvas(innerWidth, innerHeight);
  background(220);
}

function draw() {

  //ball change colors in each half
  /*
  if(mouseX<width/2){
    fill(25,25,200);
    ellipse(mouseX,mouseY,100);
  }else{
    fill(200,25,25);
    rect(mouseX-50,mouseY-50,100,100);
  }
  */
  
  if (mouseX <= width / 2 && mouseY <= height / 2) {
    fill(25, 25, 200);
    ellipse(mouseX, mouseY, 100);
  }
  else if (mouseX > width / 2 && mouseY <= height / 2) {
    fill(25, 200, 20);
    ellipse(mouseX, mouseY, 100);
  }
  else if (mouseX <= width / 2 && mouseY > height / 2) {
    fill(200, 25, 20);
    ellipse(mouseX, mouseY, 100);
  }
  else {
    fill(100, 25, 20);
    ellipse(mouseX, mouseY, 100);
  }





}
