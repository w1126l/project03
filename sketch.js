
var egg;

function preload() {
  egg = loadImage("images/egg.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(230, 270, 270);

  strokeWeight(4);
  stroke(270, 270, 270, 255);

  fill(0, 0, 0, 20);
  ellipse(70, 70, 200, 200);

  fill(0, 0, 0, 20);
  ellipse(200, 150, 300, 300);

  fill(0, 0, 0, 20);
  ellipse(500, 100, 250, 250);

  fill(0, 0, 0, 20);
  ellipse(200, 400, 300, 300);

  fill(0, 0, 0, 20);
  ellipse(90, 600, 500, 500);

  fill(0, 0, 0, 20);
  ellipse(400, 500, 400, 400);

  fill(0, 0, 0, 20);
  ellipse(500, 250, 200, 200);

  fill(270, 270, 270, 200);
  strokeWeight(0);
  rect(70, 80, 350, 250);

  image(egg, 15, 60);
}
