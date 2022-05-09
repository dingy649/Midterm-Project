let bullets=[];
let enemies=[];
let score=0;
let outcome;
let character;
let weapon;
let monster;

function preload(){
outcome =loadImage('si.png')
  character=loadImage('shi.png')
  weapon =loadImage('she.png')
  monster =loadImage('sha.png')
}

function setup() {
  createCanvas(800, 800);
  for (let i = 0; i<5;i++){
    let enemy={
      x: random(0,width),
      y: random(-1000,0)
    }
    enemies.push(enemy)
  }
}

function draw() {
  background(0);
  rectMode(CENTER);
    imageMode(CENTER);
  image(character,mouseX, height-50,100,100);
  //draw bullets
  for(let bullet of bullets){
    image(weapon,bullet.x,bullet.y,20,20);
    bullet.y -=10;
  }
  //draw enemies
  for (let enemy of enemies){
    enemy.y +=2
    image(monster,enemy.x,enemy.y,40,40);
    if (enemy.y>height){
    
    background(0)
  
    image(outcome,width/2,height/2,500,500);

 
    }
  }
  //deal with collision
  for (let enemy of enemies){
    for (let bullet of bullets){
      if(dist(enemy.x, enemy.y, bullet.x, bullet.y)<10){
        enemies.splice(enemies.indexOf(enemy),1)
        bullets.splice(bullets.indexOf(bullet),1)
         let Newenemy={
      x: random(0,width),
      y: random(-800,0)
    }
    enemies.push(Newenemy)
        score +=1;
        
      }
    }
  }
  fill(255);
  text(score,15,25);
}

function mousePressed(){
  //fire bullets when users click
  let bullet={
    x: mouseX,
    y: height-50
  }
  bullets.push(bullet)
}