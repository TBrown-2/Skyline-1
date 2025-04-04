let r = 0; 
let rSpeed = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
}

function draw() {
  background(220);

  translate(width / 2, height / 2);

  // First joint
  push();
  rotate(r);
  fill(100, 230, 50);
  ellipse(0, 30, 140);
  line(0, 0, 250, 0);
  pop();

  // Second joint
  push();
  rotate(r);
  translate(250, 0);
  rotate(-2 * r);
  fill(100, 230, 50);
  ellipse(0, 30, 140);
  line(0, 0, 250, 0);
  pop();

  // Third joint
  push();
  rotate(r);
  translate(250, 0);
  rotate(-2 * r);
  translate(250, 0);
  rotate(r);
  fill(100, 230, 50);
  ellipse(0, 30, 140);
  pop();

  r += rSpeed;
}

function mousePressed() {
  rSpeed = rSpeed === 0 ? 0.05 : 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
