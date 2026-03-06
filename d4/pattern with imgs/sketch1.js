let gsize = 100;
let gridImages = [];
//let colors=["#FFEB08","#1AEB02","#EB0225","#020AEB"]
function preload() {
   gridImages[0] = loadImage("./assets/0.png")
   gridImages[1] = loadImage("./assets/1.png")
   gridImages[2] = loadImage("./assets/2.png")
   gridImages[3] = loadImage("./assets/3.png")
}

function setup() {
   createCanvas(innerWidth, innerHeight);
   background(0);
   frameRate(2);
   noStroke();
   for (let x = 0; x < width; x += gsize) {
      for (let y = 0; y < height; y += gsize) {
         let choice = floor(random(0, gridImages.length));
         image(gridImages[choice], x, y, gsize, gsize)
         //fill(colors[choice]);
         //rect(x,y,gsize); 
      }
   }
}

function mousePressed() {

   i=floor(mouseX/gsize);
   j=floor(mouseY/gsize);
   console.log(i,j)
   let choice = floor(random(0, gridImages.length));
   tint(255*random(0,1),255*random(0,1),255*random(0,1));
   image(gridImages[choice], i * gsize, j * gsize, gsize, gsize)
   //fill(colors[choice]);
   //rect(x,y,gsize); 

}


