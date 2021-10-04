var backgroundImg,snow5;
var snow;

function preload(){
  backgroundImg=loadImage("snow3.jpg");
}
function setup() {
  createCanvas(800,400);
}

function draw() {
  background(backgroundImg);
  


  drawSprites();
}