var car, carImg, tree, treeImg;
var road, roadImg
var gameState = "play"
var treesGroup
var gameOver, restart;
var score = 0;



function preload(){
    carImg = loadImage("car.png");
    treeImg = loadImage("treestump.jpeg");
    roadImg = loadImage("road.jpeg"); 
    gameoverImg = loadImage("gameover.png");
    

}

function setup() {
 createCanvas(600,600);
 road = createSprite(200,50);
 road.addImage("road",roadImg);
 road.velocityY = 2
 road.scale = 2

 car = createSprite(300,300,50,50);
 car.scale = 0.3;
 car.addImage("car", carImg);

 treesGroup = new Group();

 gameover = createSprite(300,200);
 gameover.addImage(gameoverImg);

 

 gameover.scale = 0.3;
 

 gameover.visible = false;
 
score = 0;
 
}


function draw() {
 
 
 if(gameState === "play") {
    text("SCORE: " + score, 50,50);
    fill("black");
    score = score + Math.round(getFrameRate()/60);

     if(keyDown("left_arrow")){
         car.x = car.x -3;
     }
     if(keyDown("right_arrow")){
         car.x = car.x +3;
     }
     if(keyDown("space")){
         car.velocityY = -10;
     }
     
 
    if(grass.y > 250){
        grass.y = 50
    }
 }

 if(treesGroup.isTouching(car)){
     car.destroy();
     gameState = "end"
 }

 if (gameState === "end"){
     
     gameover.visible = true;
     

     grass.velocityY = 0;
     car.velocityY = 0;
     treesGroup.setVelocityEach(0);
     treesGroup.destroyEach();

    
     
 }

 drawSprites();
    spawnTrees();

 }
    



function spawnTrees(){
    if (frameCount % 150 === 0) {

    var tree = createSprite(200,-50);
    tree.x = Math.round(random(120,500));
    tree.addImage(treeImg);
    tree.velocityY = 2
    tree.lifetime = 800;
    tree.scale = 0.6

    treesGroup.add(tree);

    }

}



    


