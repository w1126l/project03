var earth;
var earthTwo;
var earthHug;
let song;

function preload() {
  earth = loadImage("media/earth.png");
  earthTwo = loadImage("media/earthTwo.png");
  earthHug = loadImage("media/earthHug.png");
}

function setup() {

  createCanvas(windowWidth, 800);

  background(50, 80, 200, 40);

  imageMode(CENTER);

  song = loadSound

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

  image(earth, ((windowWidth/2)+150), 700, 160, 120);
  image(earth, ((windowWidth/2)+200), 430, 240, 180);
  image(earth, ((windowWidth/2)+300), 230, 288, 216);
  image(earth, ((windowWidth/2)-150), 530, 160, 120);
  image(earth, ((windowWidth/2)-200), 670, 192, 144);
  image(earth, ((windowWidth/2)-300), 200, 480, 360);

  image(earthTwo, ((windowWidth/2)+150), 280, 400, 300);
  image(earthTwo, ((windowWidth/2)+200), 700, 200, 150);
  image(earthTwo, ((windowWidth/2)+300), 600, 300, 225);
  image(earthTwo, ((windowWidth/2)-150), 200, 240, 180);
  image(earthTwo, ((windowWidth/2)-200), 400, 400, 300);
  image(earthTwo, ((windowWidth/2)-300), 500, 400, 300);

  image(earthHug, (windowWidth/2), 420, 567, 700);
  
}
