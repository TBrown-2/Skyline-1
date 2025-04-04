let rects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create 10 rectangles with random x positions
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    rects.push({ x: x, y: y, speed: random(1, 3) });
  }
}

function draw() {
  background(30);
  
  fill(255, 150, 0);
  noStroke();
  
  // Move and draw rectangles
  for (let i = 0; i < rects.length; i++) {
    rect(rects[i].x, rects[i].y, 30, 20);
    
    // Move the rectangle down
    rects[i].y += rects[i].speed;
    
    // Reset position when reaching the bottom
    if (rects[i].y > height) {
      rects[i].y = 0;
    }
  }
}

// 👇 This must be OUTSIDE draw()
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
