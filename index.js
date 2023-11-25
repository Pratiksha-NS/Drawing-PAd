const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const paintBrushes = document.getElementById("size");
const paintColor = document.getElementById("color");
const clear = document.getElementById("clear");

const ctx = canvas.getContext("2d");

const canvasOffsetX = canvas.offsetLeft;
const canvasOffsetY = canvas.offsetTop;

let color= "black";
let isPressed = false;
let size = 5;
let x = undefined;
let y = undefined;

canvas.addEventListener("mousedown", (e) =>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetX;
});

canvas.addEventListener("mouseup", (e) =>{
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener("mousemove", (e) =>{
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI*2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2 ){
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size *2;
    ctx.stroke();
}

increaseBtn.addEventListener("click", (e)=>{
    size +=5;
    if(size >50){
        size = 50;
    }
    updateSizeOnScreen();
});

decreaseBtn.addEventListener("click", (e)=>{
    size -=5;
    if(size <5){
        size = 5;
    }
    updateSizeOnScreen();
});

paintColor.addEventListener("change", (e) =>{
    color = e.target.value;
});



clear.addEventListener("click",(e) =>{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    context.beginPath();
});


function updateSizeOnScreen(){
    paintBrushes.innerText = size;
}
