class Player{

    constructor(x,y,w,h){

        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

    }

    draw(){
        let ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    
}

var keys = {}
function handleKeyPress(evt) {
    let {keyCode, type} = evt || Event; // to deal with IE
    let isKeyDown = (type == 'keydown');
    keys[keyCode] = isKeyDown;
    
    if(isKeyDown && keys[38] && keys[87]){
        playerR.y -= 5;
        playerL.y -= 5;
    }
    
    if(isKeyDown && keys[40] && keys[87]){
        playerR.y += 5;
        playerL.y -= 5;
    }
    
    if(isKeyDown && keys[38] && keys[83]){
        playerR.y -= 5;
        playerL.y += 5;
    }
    
    if(isKeyDown && keys[40] && keys[83]){
        playerR.y += 5;
        playerL.y += 5;
    }
    
    else if(keys[38]){
        playerR.y -= 5;
    }
    
    else if(keys[40]){
        playerR.y += 5;
    }
    
    else if(keys[87]){
        playerL.y -= 5;
    }
    else if(keys[83]){
        playerL.y += 5;
    }
};

window.addEventListener("keyup", handleKeyPress);
window.addEventListener("keydown", handleKeyPress);