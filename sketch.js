var f1 , m1;

function setup() {
  createCanvas(1200,800);
  f1 = createSprite(600 , 400 , 50 , 100);
  m1 = createSprite(900,400,110,60);

  f1.shapeColor = "green";
  m1.shapeColor = "green";

  m1.velocityX = -2;
 
  

  
}

function draw() {
  background(0); 
  

  console.log(m1.x-f1.x);
  if(m1.x-f1.x < m1.width/2 + f1.width/2 && 
    f1.x-m1.x < m1.width/2 + f1.width/2){
      m1.velocityX = -(m1.velocityX);
      

  }
  if(m1.y-f1.y < m1.height/2 + f1.height/2 &&
    f1.y-m1.y< m1.height/2 + f1.height/2){
      m1.velocityY = -(m1.velocityY);
      
    }
  drawSprites();
}