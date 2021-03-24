
function preload() {
    //load the images here
    catImg=loadImage("images/cat1.png")
    gardenImg=loadImage("images/garden.png")
    mouseImg= loadImage("images/mouse1.png")
    
    catRunning = loadAnimation("images/cat2.png","images/cat3.png")
    mouseRunning= loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    Garden=createSprite(500,400,9,9)
    Garden.addImage(gardenImg)
    //Tom Sprite
Tom=createSprite(800,600,9,9)
Tom.addAnimation("moving", catRunning)
    //Jerry Sprite
Jerry=createSprite(100,600,9,9)
Jerry.addAnimation("move", mouseRunning )

Tom.scale = 0.1
Jerry.scale= 0.1
Tom.velocityX = -2

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide



    drawSprites();
}


function keyPressed(LEFT_ARROW){

    
  //For moving and changing animation write code here


}
