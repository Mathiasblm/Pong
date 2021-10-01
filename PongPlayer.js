


class Player{

    constructor(x,y,w,h){

        x = this.x
        y = this.y
        w = this.w
        h = this.h

    }

    draw(){
        let ctx = canvas.getContext("2d");
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

let playerL = new Player(, 10, 10, 20);
let playerR = new Player(100, 10, 10, 20);

playerL.draw();
playerR.draw();