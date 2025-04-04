let stars = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');
  canvas.style('position', 'fixed');

  for (let i = 0; i < 100; i++) {
    stars.push(new Star());
  }
  noStroke();
}

function draw() {
  background(10, 10, 30);
  for (let star of stars) {
    star.twinkle();
    star.display();
  }
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(1, 3);
    this.brightness = random(100, 255);
    this.speed = random(0.01, 0.05);
    this.offset = random(TWO_PI);
  }

  twinkle() {
    this.brightness = constrain(150 + sin(frameCount * this.speed + this.offset) * 100, 0, 255);
  }

  display() {
    fill(this.brightness);
    ellipse(this.x, this.y, this.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
