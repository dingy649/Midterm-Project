let color;
let color_1;
let circle_x=400;
let circle_y=400;
let circle_width=25;
let circle_direction= 4;

function setup() {
  createCanvas(800, 800);
  frameRate(15);
}


function draw() {
  noFill();
  color=map(mouseX, 0, 800, 0, 255);
  background(mouseX,0,color);
  stroke(color);
  strokeWeight(4);
  
  for(let c=0;c<1000;c+=10){
    ellipse(width/2,height/2,c,c);
    push()
    stroke(255,0,0);
    ellipse(width/2,height/2, 800-c,1000-c);
    pop()
    
  }
  
  push();
  translate(width/2, height/2);
  rotate(radians(frameCount));
  let scale_x = sin(map(frameCount%1000, 0, 800, 0, 2*PI))*2;
  let scale_y = cos(map(frameCount%1000, 0, 800, 0, 2*PI))*2;
  scale(scale_x, scale_y);
  ellipse(0, 0, 100, 100);
  ellipse(0,0,200,200);
  pop();
  
  color_1=map(mouseX, 0, 800,255,0);
  fill(color_1);
  ellipse(width/2,height/2,50,50);
  
   fill(255,10,10);
   ellipse(circle_x,400, circle_width,circle_width);
   ellipse(400, circle_x, circle_width, circle_width);
   ellipse(circle_y,400,circle_width,circle_width);
   ellipse(400, circle_y, circle_width, circle_width);
   circle_x = circle_x + circle_direction;
    circle_y =circle_y - circle_direction;
    if(circle_x > width){
      circle_direction = -4;
    }
    if(circle_x < 0){
    circle_direction = 4;
  }

  
}