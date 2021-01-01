var fixedrect,movingrect;
var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(1200,800);
fixedrect = createSprite(600,400,50,80);
fixedrect.shapeColor="green";
movingrect = createSprite(400,200,80,30);
movingrect.shapeColor="green";
rect1 = createSprite(200,125,50,50);
rect1.shapeColor="green";
rect2 = createSprite(300,250,50,50);
rect2.shapeColor="green";
rect3 = createSprite(450,300,50,50);
rect3.shapeColor="green";
rect4 = createSprite(480,500,50,50);
rect4.shapeColor="green";
}


function draw() {
  background(0);
  rect1.x=World.mouseX
  rect1.y=World.mouseY
if(isTouching(rect1,rect2)){
rect1.shapeColor="blue";
rect2.shapeColor="blue";
}
else{
  rect1.shapeColor="green";
  rect2.shapeColor="green";
}
drawSprites();
}