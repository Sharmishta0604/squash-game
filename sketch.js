var fixedrect;
var moverect;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 80);
  moverect=createSprite(200,200,80,30);
  fixedrect.shapeColor="green";
  moverect.shapeColor="green";
  moverect.debug=true;
  fixedrect.debug=true;
}

function draw() {
  background("black");  
  moverect.x=World.mouseX;
  moverect.y=World.mouseY;
  console.log(moverect.x-fixedrect.x);
  if(moverect.x-fixedrect.x<=moverect.width/2+fixedrect.width/2 
   && fixedrect.x-moverect.x<=moverect.width/2+fixedrect.width/2
   && moverect.y-fixedrect.y<=moverect.height/2+fixedrect.height/2  
   && fixedrect.y-moverect.y<=moverect.height/2+fixedrect.height/2  ) {
    moverect.shapeColor="red";
    fixedrect.shapeColor="red";
  }
  else{
    moverect.shapeColor="green";
    fixedrect.shapeColor="green";
  }
  drawSprites();
}