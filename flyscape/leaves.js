class Leaves {
    constructor(img, startScale) {
        this.img = img;
        this.startScale = startScale;
        this.hasCrossed = false;
    }
    draw() {
        if (!this.img) return;
        push();
        imageMode(CENTER);
        let w = this.img.width * this.startScale;
        let h = this.img.height * this.startScale;
        let opacity = map(this.startScale, 0.01, 1, 0, 255);
        opacity = constrain(opacity, 0, 255);  // make sure it stays in valid range
        tint(255, opacity);  
        image(this.img, width / 2, height / 2, w, h);
        noTint(); 
        pop();
    }

    move(zoomSpeed) {
        this.startScale += zoomSpeed;
        let maxScale = 6;
        let minScale = 0.01;
        if (this.startScale > maxScale) {
            this.startScale = minScale + (this.startScale - maxScale);
        }
    }

    //givePoint(dodgeLine){
    //  if(this.yPos > dodgeLine && this.hasCrossed == true)
    //}
}