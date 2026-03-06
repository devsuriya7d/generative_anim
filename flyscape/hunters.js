class Predator {
    constructor(allImages,r,angle,ySpeed, size) {
        this.huntersall = allImages;
        this.img = allImages[floor(random(3))];
        this.size = size;
        this.ySpeed =  min(5 + floor(score / 500), 15);
        this.isHunting = false;
        this.isAttacking = false;
        this.frame = 0;
        this.r = r;
        this.angle = angle;
        this.x = width/2+this.r*cos(angle);
        this.y = width/2+this.r*sin(angle);
        this.caughtFly = false;
        
    }
    draw() {
        if (this.isAttacking ==  false){
            this.frame = 0;
        }
        if(frameCount%5==0 && this.isAttacking) {
            this.frame++;
        } 
        
        if(this.frame >20) {
            this.reset();
        }
        let w = (this.img.width/3)-width/4;
        let h = this.img.height;
        push();
        let aspectRatio = h / w;
        let drawW = this.size;
        let drawH = this.size * aspectRatio; 
        let opacity = map(this.r, width * 0.8, width * 1.5, 255, 0);
        opacity = constrain(opacity, 0, 255);   
        imageMode(CENTER);
        tint(255,opacity);
        translate(this.x, this.y);
        rotate(200+this.angle);
        image(this.img,0,0, drawW, drawH, (this.frame%3*w), 0, w, h );
        noTint();
       
        pop();
    }
    move() {
        
        if(this.isAttacking == false) {
            this.r-=3;
        }
        this.x = width/2+this.r*cos(this.angle);
        this.y = width/2+this.r*sin(this.angle);
        if(this.r<width/2.8) {
            this.isAttacking = true;
        }
    }

    reset() {
        let choice = floor(random(3));
        this.img = this.huntersall[choice];
        this.r = random(width*0.8, 0.2*width);
        this.angle = random(-180,180);
        this.x = width/2+this.r*cos(this.angle);
        this.y = width/2+this.r*sin(this.angle);
        this.caughtFly = false;
        this.isAttacking = false;
    }

}