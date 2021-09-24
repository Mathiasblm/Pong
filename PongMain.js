//Make gameloop n stuff here
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0,0, canvas.width, canvas.height);



let Dball = new Ball(20,20,20,20,1,1);

function gameloop() {
    Dball.move();
}
setInterval(gameloop,1)