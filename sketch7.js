let particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 50; i++) {
    particles.push(new Particle(random(windowWidth), random(windowHeight)));
  }
}

function draw() {
  background(20);
  
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.size = random(5, 15);
    this.color = color(random(255), random(255), random(255));
  }

  update() {
    let mouseForce = createVector(mouseX, mouseY).sub(this.pos);
    mouseForce.setMag(0.05);
    
    this.acc = mouseForce;
    this.vel.add(this.acc);
    this.vel.limit(2);
    this.pos.add(this.vel);
    
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.size);
  }
  
}
