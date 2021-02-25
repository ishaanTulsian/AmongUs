var fixedRect, AmongUs, onlineImg, characterImg, AmongUsImg, form;

function preload(){ 
  onlineImg = loadImage('Online.png'); 
  characterImg = loadImage('Character.png');
  AmongUsImg = loadImage('AMONGUS.png')
} 
  function setup() { 
    createCanvas(displayWidth, displayHeight);  
    form = new Form();
  } 
  function draw() { 
    background('black'); 
    drawSprites(); 
  }