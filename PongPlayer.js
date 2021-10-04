


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

document.addEventListener('keydown', function(event) {
   
    //top
    if(event.keyCode == 38) {
        playerR.y -= 5;
    }
  
    //bottom
    else if(event.keyCode == 40) {
        playerR.y += 5;
    }
    // w
    else if(event.keyCode == 87) {
        playerL.y -= 5;
    }
    // s
    else if(event.keyCode == 83) {
        playerL.y += 5;
    }
});