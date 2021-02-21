var fixedRect, movingRect, onlineImg;

function preload(){
  onlineImg = loadImage('Assets/InteractiveStuff/onlineImg.png')
}
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100);
  fixedRect.addImage(Character.png);
}

function draw() {
  background(0,0,0);  
  drawSprites();
}