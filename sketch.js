
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0,survivalTime=0;


function preload(){
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation(monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(300,300,600,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  foodGroup= new Group();
  obstacleGroup= new Group();
  
  
}


function draw() {
background("white");
  
    if(keyDown("space") && monkey.y >= 100) {
      monkey.velocityY = -12;
    }
  spawnbannas();
  spawnobstacles();
  drawSprites();
  stroke("white");
  textSize(20);
  text("Score:"+ score,500,50)
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival time:"+survivalTime,100,50)
}


function spawnbannas() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,120));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    foodGroup.add(banana);
  }
}

function spawnobstacles() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var obstacle = createSprite(600,120,40,10);
    obstacle.y = Math.round(random(120,120));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    obstacleGroup.add(obstacle);
  }
}









