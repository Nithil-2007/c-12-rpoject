var path,back_path,invisible_background,invisible
var jaxon,winner;

function preload()
{
  //pre-load images
back_path = loadImage("path.png")
winner = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup()
{
createCanvas(400,400);
  //create sprites here
path = createSprite(198,200,20,20)
path.addImage("path",back_path)
path.scale=1.2
path.velocityY=-4;
path.y=path.height/2
invisible_background = createSprite(0,0,80,800)
invisible_background.visible=false
invisible = createSprite(400,0,80,800)
invisible.visible=false

//creating jaxon
jaxon = createSprite(198,200,20,20)
jaxon.addAnimation("win",winner)
jaxon.scale=0.05

}
function draw()
{
  background("blue");
   drawSprites();

  //making jaxon to move with mouse
jaxon.x=World.mouseX
  //code to infinity background
if(path.y<0)
{
 path.y=path.height/2
}
//making jaxon collide with boundaries
jaxon.collide(invisible_background)
jaxon.collide(invisible)
}

