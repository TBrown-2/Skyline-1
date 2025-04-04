let x = 40;
let y = 40;

let xSpeed = 5;
let ySpeed = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  strokeWeight(random(6));
  stroke(255, 0, 0);
  fill(155, 205, 200);

  rect(x, y, 80, 120);

  x += xSpeed;
  y += ySpeed;

  if (x > width - 40 || x <= 40) {
    xSpeed = -xSpeed;
  }
  if (y > height - 40 || y < 40) {
    ySpeed = -ySpeed;
  }
}

function mousePressed() {
  background(0);
  xSpeed = random(1, 5);
  ySpeed = random(1, 5);
}

// Resize canvas when window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
