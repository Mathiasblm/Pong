//vores paddle class
class Player{

    constructor(x,y,w,h,ySpeed){

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ySpeed = ySpeed;
    }
    
    //draw metode
    draw(){
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    
}

//keydown event checker der sætter farten af spilleren
document.addEventListener('keydown', function(event) {
   
    //top
    if(event.keyCode == 38) {
        playerR.ySpeed = -0.5;
    }
  
    //bottom
    if(event.keyCode == 40) {
        playerR.ySpeed = 0.5;
    }
    // w
    if(event.keyCode == 87) {
        playerL.ySpeed = -0.5;
    }
    // s
    if(event.keyCode == 83) {
        playerL.ySpeed = 0.5;
    }

});

//keyup event checker der resetter farten
document.addEventListener('keyup', function(event) {
   
    if(event.keyCode == 38) {
        playerR.ySpeed = 0;
    }
  
    //bottom
    if(event.keyCode == 40) {
        playerR.ySpeed = 0;
    }
    // w
    if(event.keyCode == 87) {
        playerL.ySpeed = 0;
    }
    // s
    if(event.keyCode == 83) {
        playerL.ySpeed = 0;
    }
});

