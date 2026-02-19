let gsize=10;
function setup() {
  createCanvas(400, 400);
  
  angleMode(DEGREES);
}

function draw() {
  background(0);
  for(x=0; x<=400; x+=gsize){ 
    for(y=0; y<=400; y+=gsize){
      fill(random(0,255),random(0,255),random(0,255));
      noStroke();
      rect(x,y,gsize*sin(frameCount/2));
    }
   
  }
  
    
}
