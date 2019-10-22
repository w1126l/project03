function setup() {

  createCanvas(windowWidth, windowHeight);

  background(50, 80, 200, 40);

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);

}

function draw() {

  if (mouseIsPressed) {
    fill(20, 20, 180, 30);
  } else {
    fill(255, 255, 255, 30);
  }

  ellipse(mouseX, mouseY, 30, 30);

  textSize(80);
  strokeWeight(0.5);

  textAlign(CENTER, CENTER);
  text('EARTH', 0, 80, width);

}
