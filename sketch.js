
var trex ,trex_running, ground;

function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,30,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5 
  
  ground = createSprite(300,180,600,10);
  ground.shapeColor = "red"

  
}

function draw(){
  background("green")
if(keyDown("space")){
  trex.velocityY = -10
} 

trex.velocityY +=0.5
trex.collide(ground);

  drawSprites()
}
