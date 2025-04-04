let starPositions = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  background(0);
  noLoop(); // Only draw when needed
}

function draw() {
  background(0); // Clear background each time

  strokeWeight(2);
  noFill();

  for (let i = 0; i < starPositions.length; i++) {
    let star = starPositions[i];
    let hue = map(i, 0, starPositions.length, 0, 360);

    drawColorStar(star.x, star.y, 25, hue);

    if (i > 0) {
      stroke(hue, 80, 100);
      line(starPositions[i - 1].x, starPositions[i - 1].y, star.x, star.y);
    }
  }

  // Display star count
  drawStarCount();
}

function mousePressed() {
  // Prevent adding stars too close together
  if (starPositions.length < 100) {
    let last = starPositions[starPositions.length - 1];
    if (!last || dist(mouseX, mouseY, last.x, last.y) > 10) {
      starPositions.push({ x: mouseX, y: mouseY });
      redraw();
    }
  }
}

function keyPressed() {
  if (key === 'r' || key === 'R') {
    starPositions = [];
    redraw();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

function drawColorStar(x, y, size, hue) {
  push();
  noStroke();
  for (let r = size; r > 1; r -= 4) {
    fill((hue + r * 5) % 360, 80, 90, 30); // Adjust alpha for glow
    ellipse(x, y, r * 2);
  }
  fill(hue, 100, 100);
  ellipse(x, y, size * 0.3);
  pop();
}

function drawStarCount() {
  push();
  textSize(16);
  noStroke();
  fill(0, 0, 20, 80);
  rect(10, 10, 130, 30, 5);
  fill(0, 0, 100);
  text(`Stars: ${starPositions.length}`, 20, 30);
  pop();
}
