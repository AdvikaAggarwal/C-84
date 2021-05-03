canvas=document.getElementById('my_canvas');
ctx=canvas.getContext("2d");

var rover_width=100;
var rover_height=90;

var rover_x=10;
var rover_y=10;

var background_img="mars.jpg";
var rover_img="rover.png";

function add(){
    background_imgtag = new Image();
    background_imgtag.onload = uploadBackground;
    background_imgtag.src = background_img;

    rover_imgtag = new Image();
    rover_imgtag.onload = uploadRover;
    rover_imgtag.src = rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(rover_imgtag, 0, 0, rover_width, rover_height); 
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){

    keyPressed=e.KeyCode;
    console.log(keyPressed);

    if(keyPressed=='38'){
        up();
        console.log("UP");
    }

    if(keyPressed=='40'){
        down();
        console.log("DOWN");
    }

    if(keyPressed=='37'){
        left();
        console.log("LEFT");
    }

    if(keyPressed=='39'){
        right();
        console.log("RIGHT");
    }
}
