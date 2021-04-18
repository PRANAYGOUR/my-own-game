var bg, bgImg;
var fruit, fruitImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;
var survivor , survivor_running;
var ground , groundImage;
var obstaclesGroup, obstacle1, obstacle2;
var obstacle3, obstacle4, obstacle5, obstacle6;
var foodsGroup, foodImage;
var food1, food2, food3, food4, food5, food6;

function preload(){ 
bgImg = loadImage("bg1.png");

// loading obstacle images
obstacleImage = loadImage("obstacle5.png")


//loading images for food
Food1 = loadImage("fruit1.png");
food2 = loadImage("fruit2.png");
food3 = loadImage("fruit3.png");
food4 = loadImage("fruit4.png");
food5 = loadImage("fruit1.png");
food6 = loadImage("fruit3.png");

//loading image for ground
groundImage = loadImage("ground2.png");

// loading survivor animation
survivor_running =loadAnimation("sprite1.png","sprite2.png","sprite3.png","sprite4.png")

}

function setup(){
  createCanvas(windowWidth,windowHeight);  
  // Moving background  
  bg=createSprite(0,0,0,0);  
  bg.addImage(bgImg); 
  bg.velocityX = -4; 
  bg.scale = 2;
  //creating sprite for survivor
  survivor = createSprite(100,450,20,20);
  survivor.addAnimation("running", survivor_running);
  survivor.scale =1.0;
  //creating sprite for invisisble ground
  ground = createSprite(100,450,20,20);
  ground.addImage(groundImage);
  ground.x = ground.width /2;

  //creating new groups for a object
  obstaclesGroup = new Group();
  foodsGroup = new Group();
  // giving the value for score
  score =0
 }

function draw(){ 
  
  // displaying the score 
  text("Score: "+ score, 500,50);
  if (gameState===PLAY){
    //calculating the score
    score = score + Math.round(getFrameRate()/60);

    //giving velcity for the ground and get calculate the score    
    ground.velocityX = -(6 + 3*score/100);

   //displaying the keypressed fucntion
   if(keyDown("space")  &&   survivor.y >= 100) {
    survivor.velocityY = -12;
}  
   survivor.velocityY = survivor.velocityY + 0.8  ;
    
  
  
  // moving the background in the X direction
  if(bg.x <300){
    bg.x = 500;
  }

  // displaying the visible or invisisble
  ground.visible = false;

  //displaying the keypressed fucntion
  if(keyDown("space")  &&   survivor.y >= 100) {
    survivor.velocityY = -12;
   
}  
survivor.velocityY = survivor.velocityY + 0.8  ;

  // displaying the collide
  survivor.collide(ground);
  
  // displaying the function which has been created for the objects
  spawnObstacles();
  spawnFoods();
  
 
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  }
  else(gameState===END)
 //set lifetime of the game objects so that they are never destroyed
 //  obstaclesGroup.setLifetimeEach(-1);

   
    //set velcity of each game object to 0
    //obstaclesGroup.setVelocityXEach(0);
  
  drawSprites(); 
}


// creating function for obstcales

function spawnObstacles() {
  //using frame count to display the obstacle more than one time.
  if(World.frameCount % 120 === 0){
  //creatng variable for obstacle
  var   obstacle=createSprite(1000,400,20,20);
  obstacle.depth = -6;
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -(6 + 3*score/100);
  obstacle.scale = 1.1;
  obstacle.velocityX = -5;
  obstacle.velocityX = -(8 + (score/10));
  obstacle.setLifetime = 50;
  obstacle.depth = 1;
  }
}

function spawnFoods() {
  if(frameCount % 100 === 0) {
    var food = createSprite(600,165,10,40);
    //food.debug = true;
    food.velocityX = -(6 + 3*score/100);
    
    //generate random foods
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: food.addImage(food1);
              break;
      case 2: food.addImage(food2);
              break;
      case 3: food.addImage(food3);
              break;
      case 4: food.addImage(food4);
              break;
      case 5: food.addImage(food5);
              break;
      case 6: food.addImage(food6);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the food           
    food.scale = 1.0;
    food.lifetime = 300;
    //add each food to the group
    foodsGroup.add(food);
  }
}


/*

var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score
var ground;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameState = END;
var score;
var backImage;
var gameOverImage;
var reset;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 groundImage = loadImage("Typeform-Blog-BlackFriday-Cover-AskAwesomely.jpg");
  
  backImage = loadImage("jungle.jpg");
  //ground = loadImage("ground");
  
  gameOverImage = loadImage("200-2008543_game-over-png-rpg-transparent.png");
}



function setup() {
  createCanvas(600,400);
  back = createSprite(200,200,20,20);
 back.addImage("background", backImage);
  back.velocityX = -6;
//  back.y = back.width /2;
  banana = createSprite(200,200,20,20);
  banana.addImage("banana", bananaImage);
  banana.scale = 0.1;
  monkey = createSprite(100,200,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
// ground = createSprite(100,300,400,400);
//  ground.addImage("ground", groundImage);
 // ground.scale = 0.1;
 //obstacle=createSprite(200,350,20,20);
 // obstacle.addImage(obstacleImage);
//  obstacle.scale = 0.1;
   FoodGroup = new Group();
  obstacleGroup = new Group();
  score  = 0;
  ground = createSprite(200,370,400,10);
  ground.x = ground.width /2;
 
//  gameOver = createSprite(200,200,20,20);
 // gameOver.addImage("gameOver", gameOverImage);
 // gameOver.scale = 0.1;
 fill("black");
}


function draw() {
background("skyblue")
   //monkey.debug = true;
  drawSprites();
  
  spawnObstacle();
     spawnBanana();  
 // reset();
   ground.visible = false;
if(keyDown("space")  &&   monkey.y >= 100) {
        monkey.velocityY = -12;
       
    }  
    monkey.velocityY = monkey.velocityY + 0.8  ;
  //ground.velocityX = -(6 + 3*score/100);
      if(FoodGroup.isTouching(monkey)){
         score = score+2;
      FoodGroup.destroyEach();
        //monkey.scale = 0.2;
        
     
    }
 
  
  monkey.collide(ground);
     
  fill("red");
  textSize(20);
 
text("Score "+ score, 150,50);
//score = score + Math.round(getFrameRate()/60);
  
 if(back.x < 300){
    back.x = 500;
    
  }
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
if(back.x < 100){
    back.x = back.width/2;
    
  }
  
 switch(score){
   case 10: monkey.scale = 0.12;
          break;
     case 20: monkey.scale = 0.14;
             break;
     case 30: monkey.scale = 0.16;
             break;
     case 40: monkey.scale = 0.18;
             break;
             default : break;
 }   
     //gameOver.visible = true; 
  if( obstacleGroup.isTouching(monkey)){
   
 obstacleGroup.destroyEach();
  FoodGroup.destroyEach();
  gameOver.visible = false;
 
  monkey.changeAnimation("running" , monkey_running);
   score = 0;
     
    }
   
}
function spawnBanana(){
  if(World.frameCount % 120 === 0){
  var  banana=createSprite(300,400,20,20);
   //banana.depth = 1;
    banana.addImage(bananaImage);
   banana.scale = 0.1;
    banana.y = Math.round(random(50,340));
   //obstacle.velocityX = -(8 + (score/10));
 banana.setLifetime = 50;
    
   FoodGroup.add(banana);
      banana.velocityX = -5;
  }
}
function spawnObstacle() {
  
  if(World.frameCount % 200 === 0){
  //   back = createSprite(200,200,20,20);
 //back.addImage("background", backImage);
  var   obstacle=createSprite(200,350,20,20);
  obstacle.depth = -6;
  obstacle.addImage(obstacleImage);
     obstacle.velocityX = -(6 + 3*score/100);
    obstacle.scale = 0.1;
    //obstacle.y = Math.round(random(50,370));
   obstacle.velocityX = -(8 + (score/10));
    obstacle.setLifetime = 50;
    obstacle.depth = 1;
    obstacleGroup.add(obstacle);
    
 obstacle.velocityX = -5;
  }
}
*/