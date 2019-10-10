var img;
function preload() {
img = loadImage("images/samoyed.png");
}

function setup() {
  createCanvas(1500, 1400);
}

function draw() {
  background(220, 5, 50);
  image(img, 0, 0);
}
