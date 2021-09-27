class Ball {
    
    constructor(width, height, xpos, ypos, xspeed, yspeed) {
        this.width = width;
        this.height = height;
        this.xpos = xpos;
        this.ypos = ypos;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }
    
    move() {
        let canvas = document.getElementById("canvas");
        let context = canvas.getContext("2d");
        context.fillStyle = "#FFFFFF"
        context.fillRect(
            this.xpos,
            this.ypos,
            this.width,
            this.height);
        
        if(this.xpos+this.width >= canvas.width || this.xpos+this.width <= 15) {
            this.xspeed *= -1
        }
        
        if(this.ypos+this.height >= canvas.height || this.ypos+this.height <= 15) {
            this.yspeed *= -1
        }
        
        this.xpos += this.xspeed;
        this.ypos += this.yspeed;
    }
}
