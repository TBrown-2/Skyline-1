let r = 0;
let pulse = 0;
let rSpeed = 0.01;
let pulseSpeed = 0.05;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS); // optional, but good practice
}

function draw() {
  background(250);
  translate(width / 2, height / 2);
  
  let d = 150 * sin(pulse);

  for (let i = 0; i < 10; i++) {
    rotate(r);
    translate(d, 80);
    fill(0, 0, 100);
    stroke(100, 200, 50);
    strokeWeight(4);
    ellipse(0, 0, 50, 80);
    translate(-d, -80); // move back before next iteration
  }

  pulse += pulseSpeed;
  r += rSpeed;
}

function mousePressed() {
  if (rSpeed === 0) {
    rSpeed = 0.01;
    pulseSpeed = 0.05;
  } else {
    rSpeed = 0;
    pulseSpeed = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
