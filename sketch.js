var cir = [];
function setup() {
  createCanvas(1152, 648);
  for(var i = 0; i < 1000; i++) {
    cir[i] = new Cir();
  }
}
function draw() {
  background(0);
  for (var i = 0; i < cir.length; i++) {
    cir[i].move();
    cir[i].display();
  }
}
function Cir() {
  this.x = random(0, width);
  this.y = random(0, height);
  this.display = function() {
    stroke(0, 0, 51, 50);
    strokeWeight(30);
    fill(0, 0, random(85, 255));
    ellipse(this.x, this.y, 50, 50);
  }
  this.move=function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
  }
  // frameRate(5);
  // noLoop();
}
