


class Player{

    constructor(x,y,w,h){

        this.x = x
        this.y = y
        this.w = w
        this.h = h

    }

    draw(){
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

