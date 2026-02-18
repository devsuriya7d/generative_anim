let x;
let y;
let r,g,b;
function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
 
}

function draw() {
  let bg=lerpColor(color(96, 74, 11), color(70,250,241),frameCount/500);
  background(bg);
  let body=lerpColor(color(68, 92, 76), color(166,250,70),frameCount/500);
  fill(body);
  noStroke();
  stroke(body);
  strokeWeight(5);
  quad(152,175,332,152,378,500,115,500); //main
  quad(0,0,30,0,90,500,0,500); //left
  quad(500,260,450,260,400,500,500,500); //right
  quad(90,500,115,500,132,350,72,350);
  ellipse(142,256,30,30);
  ellipse(450,256,70,70);
  ellipse(404,470,30,30);
  ellipse(49,206,30,30);
  ellipse(182,106,60,60);
  ellipse(243,180,185,190); //main
  ellipse(488,260,75,50); //right
  arc(43,14,70,90,130,330); //top
  arc(93,350,70,90,360,230); //left1
  arc(115,345,70,90,300,180); //left2
  arc(382,480,70,90,360,230); //right1
  arc(395,480,70,90,300,180); //right2
  let lob=lerpColor(color(71, 52, 56), color(34, 27, 148),frameCount/500);
  fill(lob);
  stroke(lob);
  quad(215,250,230,250,260,500,160,500); //leftlob
  quad(250,260,300,250,360,500,240,500); //rytlob
  ellipse(287,250,90,140); //ryteyecover
  ellipse(211,250,60,114); //lefteyecover
  fill(219, 191, 196);
  ellipse(225,250,30,90); //lefteye
  ellipse(280,250,80,120); //ryteye
  fill(112, 88, 92);
  arc(280,250,79,120,180,360); //eyelid
  fill(0);
  stroke(0);
  ellipse(280,260,20,20); //eyeballryt
  ellipse(225,250,4,20); //eyeballeft
  let pimple=lerpColor(color(129,133,84), color(166,250,70),frameCount/500);
  fill(pimple);
  stroke(pimple);
  ellipse(55,316,60,60);
  ellipse(375,469,30,30);
  ellipse(280,116,20,20);
  ellipse(186,76,15,15);
  ellipse(260,296,5,5);
  ellipse(279,302,5,15);
  ellipse(279,300,5,5);
  ellipse(300,295,5,5);
  ellipse(435,246,15,15);
  ellipse(270,300,15,15);
  ellipse(290,299,15,15);
  ellipse(35,45,20,25);
  quad(35,45,39,45,52,120,44,120);
  strokeWeight(1);
  arc(42,120,24,20,280,80);
  noFill();
  strokeWeight(5);
  arc(280,285,50,50,375,165);
  stroke(0);
  strokeWeight(2)
  arc(50,45,30,10,180,360);
  arc(50,49,30,10,230,330);
  arc(70,207,30,10,230,330);
  arc(85,205,50,80,90,180);
  arc(450,220,30,40,300,30);
  arc(440,220,10,90,300,30);
   let strokes=lerpColor(color(25,46,32), color(231, 255, 184),frameCount/500);
  stroke(strokes);
  strokeWeight(9);
  arc(180,180,40,90,190,270);
  arc(175,112,30,50,190,270);
  line(38,150,52,276);
  line(162,158,145,336);
  line(340,278,355,396);
  line(140,348,100,478);
  line(70,378,100,478);
  line(440,348,414,478);
   let lobstroke=lerpColor(color(28,19,25), color(184, 245, 255),frameCount/500);
  stroke(lobstroke);
  line(253,315,244,500);
  line(205,300,170,500);
  let x=100;
  arc(280,315,55,30,360,170);
  arc(220,290,30,30,360,170);
  fill(214, 209, 148);
  noStroke();
  ellipse(62,306,20,20);
  ellipse(375,459,10,10);
  ellipse(280,116,5,10);
  ellipse(182,71,5,5);
  ellipse(260,296,2,2);
  ellipse(279,302,2,5);
  ellipse(279,300,2,2);
  ellipse(300,295,2,2);
  ellipse(435,246,5,5);
  ellipse(270,300,5,5);
  ellipse(290,299,5,5);
  ellipse(42,51,5,5);
  ellipse(49,120,5,5);
  
  
}