var bg,background;

function preload(){
  bg=loadImage("snow2.jpg")
}

function setup() {
  createCanvas(1000,800);
 createSprite(400, 200, 50, 50);

 
 

}

function draw() {
  bg(255,255,255);

  background(bg);

  drawSprites();
}