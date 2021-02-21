var fixedRect, movingRect, onlineImg;

function preload(){
  onlineImg = loadImage('Assets/InteractiveStuff/onlineImg.png')
}
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.addImage(onlineImg);
}

function draw() {
  background(0,0,0);  
  drawSprites();
}