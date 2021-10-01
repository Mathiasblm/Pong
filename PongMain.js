let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0,0, canvas.width, canvas.height);
Ball.Dball.push(new Ball(5,5,20,20,1,1))


let playerL = new Player(5, 50, 5, 60);
let playerR = new Player(290, 0, 5, 60);

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
        Ball.Dball.push(new Ball(5,5,20,20,1,1))
    }
    
    Ball.Dball[0].move();
    Ball.Dball[0].remove();
    }
}



function gameloop() {
    Game.instance.loop();

}
setInterval(gameloop,10)