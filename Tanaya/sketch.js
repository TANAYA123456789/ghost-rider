var ghost,ghostImage,tower,towerImage;
var door,doorImage;
var climber,climberImage;
var doorGroup,climberGroup;
var invisibleClimber,invisibleClimberGroup;
var gameState = "Play";

function preload(){
towerImage = loadImage("tower.png")
ghostImage = loadImage("ghost-standing.png")
doorImage = loadImage("door.png")
climberImage = loadImage("climber.png")
}


function setup(){
createCanvas(600,600)
tower = createSprite(300,300);
tower.addImage(towerImage)

ghost = createSprite(200,200,50,50);
ghost.addImage(ghostImage)
ghost.scale = 0.5;
doorGroup = new Group();
climberGroup = new Group();
invisibleClimberGroup = new Group();


}




function draw(){
background(0)
if (gameState=="Play"){
tower.velocityY = 2;
ghost.velocityY = 0; 
ghost.velocityX = 0;    
if (tower.y  >600){
tower.y = 50;
}

if (keyDown("right")){
    ghost.velocityX = 2;
}

if (keyDown("left")){
    ghost.velocityX = -2; 
}

if (keyDown("space")){
    ghost.velocityY = -15;
}
ghost.y = ghost.y + 5    


spawnDoor();
if (climberGroup.isTouching(ghost)){
    ghost.velocityY=0;
}
     

drawSprites()
}
}

function spawnDoor(){
    if (frameCount % 200 ==0)
    {
door = createSprite(200,-50)
door.x = Math.round(random(120,400))
door.addImage(doorImage)
door.velocityY = 2;
doorGroup.add(door);
ghost.depth = door.depth;
door.depth = door.depth +1 
door.lifetime = 700;

climber = createSprite(200,10)
climber.addImage(climberImage);
climber.velocityY = 2;
climber.x = door.x;
climberGroup.add(climber);
climber.lifetime = 700;
ghost.depth = climber.depth;
climber.depth = climber.depth +1; 

invisibleClimber = createSprite(20,15,climber.width,2);
invisibleClimber.x = door.x;
invisibleClimber.velocityY = 2;
invisibleClimberGroup.add (invisibleClimber);
invisibleClimber.visible  = false;
invisibleClimber.lifetime =700;
    }
}