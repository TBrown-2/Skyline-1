let x = 40;
let y = 40;

let xSpeed = 4;
let ySpeed = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
 // background(0,100,200);
  rectMode(CENTER);
  
}

function draw() {

 // noStroke();
  background(0,200,205,50)
  
  strokeWeight(5);
  
  stroke(255,0,0)
  fill(215,110,0);
  
  
  //rect(200,200,50,50)
 rect(x,y,80,120);
  
  x += xSpeed;
  y += ySpeed;
  
  
  
  // print(x)
  
  if(x > width -40){
    xSpeed =- xSpeed;   
  }
  
  if(x <= 40){
    xSpeed =- xSpeed;   
  }
  if(y> height-40){
    ySpeed = - ySpeed;
  }
  if(y< 40){
    ySpeed = - ySpeed
  }
  
  
  
 // y += 10;
  
  //print(x);
  
//   if(x > 600 +100){
//     x = -100;
//   }
  
//   if(y> 400 + 100){
//     y=-100;
//   }
  
}
