
var iss,spacecraft;
var bg,issImg,scImg;
var hasDocked = false

function preload(){
  bg = loadImage("spacebg.jpg");
  issImg  = loadImage("iss.png");
  scImg = loadImage("spacecraft1.png");
  sc1Img = loadImage("spacecraft2.png");
  sc2Img = loadImage("spacecraft3.png");
  sc3Img = loadImage("spacecraft4.png");

}



function setup() {
  createCanvas(800,400);

  iss = createSprite(330,130);
  iss.addImage(issImg);
  iss.scale = 0.25;

  spaceCraft = createSprite(285, 240);
  spaceCraft.addImage(scImg);
  spaceCraft.scale = 0.15;


}


function draw() {
  background(bg);  
  
  if(!hasDocked){
   spaceCraft.x = spaceCraft.x+random(-1,1);
   if(keyDown("LEFT_ARROW")){
    spaceCraft.addImage(sc3Img)
    spaceCraft.x = spaceCraft.x-1
   }
   if(keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(sc2Img)
    spaceCraft.x = spaceCraft.x+1
   }
   if(keyDown("UP_ARROW")){
        spaceCraft.y = spaceCraft.y-2;
   }
   if(keyDown("Down_ARROW")){
     spaceCraft.addImage(sc1Img)
    
}
  }
  if(spaceCraft.y<= (iss.y+70)&& spaceCraft.x <= (iss.x-10)) {
   hasDocked = true
   textSize(25);
   fill("white");
   text("docking successful",200,300);
  }
  drawSprites();
}