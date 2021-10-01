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
    
    Dball.move();
    }
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0,0, canvas.width, canvas.height);


let Dball = new Ball(20,20,20,20,1,1);

function gameloop() {
    Game.instance.loop();
}
setInterval(gameloop,1)