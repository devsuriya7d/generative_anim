class Fly {
    constructor(img,xPos, yPos, xSpeed, ySpeed, size) {
        this.img = img;
        this.xPos = xPos;
        this.yPos = yPos;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.size = size;
        this.frame = 0;
    }
    draw() {
        if(frameCount % 2 == 0){
            this.frame = (this.frame + 1)%2;
        }
        let w = this.img.width/2;
        let h = this.img.height;

        imageMode(CENTER);
        image(this.img,this.xPos,this.yPos,this.size,this.size,this.frame*w,0,w,h);

    }
    move() {
        let d = dist(width / 2, height / 2, mouseX, mouseY);
        if (d > 150) {
            let angle = atan2((mouseY - height / 2) , (mouseX - width / 2));
            this.xPos = width / 2 + cos(angle)*150;
            this.yPos = height / 2 + sin(angle)*150;
    
        }
        else {
            this.xPos = mouseX;
            this.yPos = mouseY;    
        }
    }
    checkCollision(predator){
        //console.log(predator.frame)
        //console.log(dist(this.xPos, this.yPos, predator.x, predator.y), predator.size/4);
        if(dist(this.xPos, this.yPos, predator.x, predator.y)<140 ){
            //console.log("ate")
            isCaught = true;
        }
       
    }
}