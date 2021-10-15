//canvas
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//lav canvas sort
ctx.fillStyle = "#000";
ctx.fillRect(0,0, canvas.width, canvas.height);

//lav bolden og de 2 paddles
Ball.Dball.push(new Ball(5,5,150,70,0.25,0))

let playerL = new Player(5, 55, 5, 40, 0);
let playerR = new Player(290, 55, 5, 40, 0);

//basic pointsystem
let pointL = 0;
let pointR = 0;

//gameloop class
class Game {
    static instance = new Game();
    constructor() {
    }

//loop metode
loop() {
    //update canvas
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
    
    //spawn ny ball hvis der ikke er en
    if(Ball.Dball.length == 0) {
        Ball.Dball.push(new Ball(5,5,150,70,0.25,0))
    }
    
    //move ball og fjern hvis den kolliderer med siderne
    Ball.Dball[0].move();
    Ball.Dball[0].remove();
    
    // mid linje (w = width, x = x akse pos, y = linjens top y pos, step = antal dashes)
    var w = 4;
    var x = (canvas.width - w)*0.5;
    var y = 0;
    var step = canvas.height/20;
        while (y < canvas.height) {
        ctx.fillRect(x, y+step*0.25, w, step*0.5); 
        y += step;
    }
    ctx.restore();
    }

//tjek for collision mellem bolden og paddlesne
collision() {
    if((Ball.Dball[0].xpos + Ball.Dball[0].width == playerR.x && Ball.Dball[0].ypos 
    <= playerR.y + playerR.h) && (Ball.Dball[0].ypos + Ball.Dball[0].height 
    >= playerR.y) || (Ball.Dball[0].xpos == playerL.x + playerL.w && Ball.Dball[0].ypos 
    <= playerL.y + playerL.h) && (Ball.Dball[0].ypos + Ball.Dball[0].height >= playerL.y)) {
        Ball.Dball[0].xspeed *= -1;
        Ball.Dball[0].yspeed = Math.random();
    }
}

}

//gameloop
function gameloop() {
    Game.instance.loop();
    Game.instance.collision();
    if(playerL.y + playerL.h + playerL.ySpeed < canvas.height && playerL.y + playerL.ySpeed > 0) {
        playerL.y += playerL.ySpeed;
    }
    
    if(playerR.y + playerR.h + playerR.ySpeed < canvas.height && playerR.y + playerR.ySpeed > 0) {
        playerR.y += playerR.ySpeed;
    }
    
}
setInterval(gameloop,1)