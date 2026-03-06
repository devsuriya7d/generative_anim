let deg = 45;
let div = 6;
let direction = 1;
function setup() {
  createCanvas(innerWidth, innerHeight);
  angleMode(DEGREES);
  background(0);
}

function draw() {
  

  push();
  translate(width / 2, height / 2);

  /*
  for(let a=0; a<360; a+=deg){
     fill(frameCount,20,200);
     ellipse(120,0,55*sin(frameCount));
     fill(20,frameCount,200);
     rect(150,-10,55*cos(frameCount));
     triangle(180,-10,180,10,200,0);
     rotate(deg);
  }  
     */

  /*
  rotate(direction * frameCount);
  for (let i = 0; i < div; i += 1) {
    fill(555 * sin(frameCount * 2), 200, 25);
    ellipse(120, 0, 35 * sin(frameCount));
    fill(255, 555 * cos(frameCount), 200);
    rect(150, -10, 25 * cos(frameCount));
    fill(200, 20, 555 * sin(frameCount));
    triangle(180, -10, 180, 10, 200, 0);
    rotate(360 / div);
  }
  rotate(2 * -direction * frameCount)
  for (let i = 0; i < div; i += 1) {
    fill(255, 200, 555 * sin(frameCount));
    triangle(280, -10, 280, 10, 200, 0);
    rotate(360 / 60);
  }
  if(frameCount%60==0){
    direction=-direction;
  }*/

  

}

function mouseDragged(){


    for(let i=0; i<div; i+=1){
      stroke(255);
      strokeWeight(5);
      line(mouseX-width/2,mouseY-height/2,pmouseX-width/2,pmouseY-height/2)
      rotate(360/div);
    }
    
 
  }pop();