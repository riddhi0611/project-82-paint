var mouseEvent="empty";
var lastX,lastY;
var colour="black";
var width=2;

var radius=20;

canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    colour=document.getElementById("colour").value;
    width=document.getElementById("width").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mousedown";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentX=e.clientX-canvas.offsetLeft;
    currentY=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mousedown"){
        
        
ctx.beginPath();
ctx.strokeStyle=colour;
ctx.lineWidth=width;
ctx.arc(currentX,currentY,radius,0,2*Math.PI);
ctx.stroke();
    }
    
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
}
