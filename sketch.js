var fixedRect, AmongUs, onlineImg, characterImg, AmongUsImg, form, spaceImg, floatingDudeImg, floatingDude, createGame, createGameImg, EnterCode, EnterCodeImg, enter, enterImg;
var hostgame, hostgameimg;
var joingame, joingameimg;

function preload(){ 
  onlineImg = loadImage('Online.png'); 
  characterImg = loadImage('Character.png');
  AmongUsImg = loadImage('AMONGUS.png')
  spaceImg = loadImage('Space.png');
  floatingDudeImg = loadImage('FloatingDude.png');
  createGameImg = loadImage('CreateGame.png');
  EnterCodeImg = loadImage('EnterCode.png');
  enterImg = loadImage('Arrow.png');
  hostgameimg = loadImage('HostGame.png');
  joingameimg = loadImage('joinGame.png');
} 
  function setup() { 
    createCanvas(displayWidth, displayHeight);  
        
    
        hostgame = createSprite(displayWidth/2-225, displayHeight/2.5);
        hostgame.addImage(hostgameimg);
        hostgame.scale = 0.8;

        joingame = createSprite(displayWidth/2-225, displayHeight/1.7);
        joingame.addImage(joingameimg);
        
    
        floatingDude = createSprite(200,200);
        floatingDude.addImage(floatingDudeImg);
    
        AmongUs = createSprite(displayWidth/2, 150);
        AmongUs.addImage(AmongUsImg);
        AmongUs.scale = 0.5;
        
        createGame =  createSprite(displayWidth/2, displayHeight/2.5);
        createGame.addImage(createGameImg);
        createGame.scale = 0.8;

        var EnterCode = createInput('Enter Code');
        EnterCode.position(displayWidth/2-100, displayHeight-375);
        
        enter = createButton('>');
        enter.position(displayWidth/2+150, displayHeight-37);
  } 
  function draw() { 
    background(spaceImg); 

    
    drawSprites(); 
  }
