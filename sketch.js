var PLAY=1
var END=0
var gameState = PLAY

var monkey , monkey_running;
var banana ,bananaImage; 
var obstacle, obstacleImage;
var bananaG, obstacleG;
var score;
var ground;
function preload(){
  
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",
   "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png",
   "sprite_7.png","sprite_8.png","Monkey_10.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 survivalTime = 0
}



function setup() {
  createCanvas(600,500);
  
  
  monkey = createSprite(width-500,height-100,40,20);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.15;
  

  obstacleG=createGroup();
  bananaG = createGroup();
  
  textSize(20);
  fill("black");
  stroke("white")
  
}


function draw() {
  background("white");
  
      text("S u r v i v a l   T i m e : "+ survivalTime,
      width-420,height-400);
     survivalTime=Math.ceil(frameCount/frameRate());
   
     if(touches.length >0 ||keyDown("space")&&
        monkey.y >= height-110) {
        monkey.velocityY = -19;
     }
  
   monkey.velocityY = monkey.velocityY + 0.8

   ground = createSprite(width-250,height-50,700,10);
   ground.lifetime=100
   monkey.collide(ground);
   
  
   
  
   if (frameCount % 120 === 0){
    banana = createSprite(560,height-250);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-5;
    banana.y=Math.round(random(150,250))
    banana.lifetime=100
    bananaG.add(banana);
    
   }
  
  if (monkey.isTouching(bananaG)){
    banana.visible=false
  }
  createobstacele();
  
  drawSprites();
}
function createobstacele(){
if (frameCount % 120 === 0){
   obstacle = createSprite(560,400,10,10);
   obstacle.addImage(obstaceImage);
   obstacle.velocityX=-5;
   obstacle.scale=0.25;
  obstacleG.add(obstacle);
  obstacle.lifetime=120
  }
   

}