var block;
function setup() {
  createCanvas(400,400);
  block=createSprite(200,200,50,70);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    block.position.x=block.position.x+2;
  }
  if(keyIsDown(LEFT_ARROW)){
    block.position.x=block.position.x-2;
  }
  if(keyIsDown(UP_ARROW)){
    block.position.y=block.position.y-2;
  }
  if(keyIsDown(DOWN_ARROW)){
    block.position.y=block.position.y+2;
  }
drawSprites();
}




