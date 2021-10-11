let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0,0, canvas.width, canvas.height);
Ball.Dball.push(new Ball(5,5,100,50,0.25,0.33))


let playerL = new Player(5, 50, 5, 40, 0);
let playerR = new Player(290, 50, 5, 40, 0);

class Game {
    static instance = new Game();
    constructor() {
    }

loop() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    context.fillStyle = "#000000"
    context.fillRect(
        0, 
        0, 
        canvas.width, 
        canvas.height);


        playerL.draw();
        playerR.draw();
            
    if(Ball.Dball.length == 0) {
        Ball.Dball.push(new Ball(5,5,100,50,0.25,0.33))
        // width, height, xpos, ypos, xspeed, yspeed
    }
    
    Ball.Dball[0].move();
    Ball.Dball[0].remove();
    }

collision() {
    if((Ball.Dball[0].xpos + Ball.Dball[0].width == playerR.x && Ball.Dball[0].ypos 
    <= playerR.y + playerR.h) && (Ball.Dball[0].ypos + Ball.Dball[0].height 
    >= playerR.y) || (Ball.Dball[0].xpos == playerL.x + playerL.w && Ball.Dball[0].ypos 
    <= playerL.y + playerL.h) && (Ball.Dball[0].ypos + Ball.Dball[0].height >= playerL.y)) 
    {
       Ball.Dball[0].xspeed *= -1;
       }
}

}

function gameloop() {
    Game.instance.loop();
    Game.instance.collision();
    
    if(playerL.y + playerL.ySpeed > 0 && playerL.y + playerL.ySpeed < 110) {
        playerL.y += playerL.ySpeed;
    }
    
    if(playerR.y + playerR.ySpeed > 0 && playerR.y + playerR.ySpeed < 110) {
        playerR.y += playerR.ySpeed;
    }
}
setInterval(gameloop,1)