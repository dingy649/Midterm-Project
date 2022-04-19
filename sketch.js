let playerX = 200;
let playerY = 500;
let speed;
let enemy1X = 100;
let enemy2X = 250;
let enemy3X = 350;
let enemyY = 100;
let score;
let gameover;
let character;
let taddy;
let unicorm;
let star;
let outcome;
let room;


function preload(){
 character=loadImage('shi.png')
 taddy=loadImage('sha.png')
  unicorn=loadImage('she.png')
  star=loadImage('shs.png')
  room =loadImage('shs6.png')
  outcome =loadImage('si.png')
}

function setup() {
  createCanvas(400, 600);
  score = 0;
  speed = 2;
  gameover = false;
  
}

function draw() {
  background(0);
  image(room,0,0,400,600);
  
  if(gameover == false)
  {
  collision();
    
  //set the player/character
    image(character,playerX,playerY,85,100)
    
  // set the enemies
   image(taddy,enemy1X,enemyY,80,90);
   image(unicorn,enemy2X,enemyY,85,90);
   image(star,enemy3X,enemyY,85,90);
  
  
  enemyY += speed;
  
  if (enemyY >= height) {
    enemyY = 0;
    score += 1;
    enemy1X = random(width);
    enemy2X = random(width);
    enemy3X = random(width);
  }

  //set the score
  fill(255);
  textSize(40);
  text(score, width / 12, 50);
    
  } 
  //Game over pop out
    if(gameover == true)
  {
  score = 0;
  speed = 0;
  background(0)
    imageMode(CENTER);
    image(outcome,200,200,300,300);
  textSize(50);
  fill(250, 10, 20);
  text('Game Over', width / 6, height / 2);
    
  
  }
  
} 
//control the movement of the character
function keyPressed() {
 if (keyCode === LEFT_ARROW) {
    playerX -= speed+5;
  }
  if (keyCode === RIGHT_ARROW) {
    playerX += speed+5;
  }
}

//set collison
function collision() {
  if (playerX >= enemy1X && playerX <= enemy1X+50 && playerY >= enemyY && playerY <= enemyY + 50) {
    score = 0;
    gameover = true;
    
  }

  if (playerX >= enemy2X && playerX <= enemy2X+50 && playerY >= enemyY && playerY <= enemyY+50){
    score = 0;
     gameover = true;
    
  }

  if (playerX >= enemy3X && playerX <= enemy3X+50  && playerY >= enemyY && playerY <= enemyY+50 ) {
    score = 0;
     gameover = true;
    
  }
}