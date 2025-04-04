let amt = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  background(0, 50); // stronger clear to avoid GPU overload

  amt = constrain(map(mouseX, 0, width, 0, 10), 1, 10);

  filter(BLUR, 1); // Safe blur value

  for (let i = 0; i < amt; i++) {
    fill(random(255), random(255), random(255));
    rect(random(width), random(height), random(120));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
