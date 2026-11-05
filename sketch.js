function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke();
  fill(255, 255, 255, 10);
  rect(0, 0, width, height);

forma(mouseX, mouseY);
forma(width - mouseX, mouseY);
forma(mouseX, height - mouseY);
forma(width - mouseX, height - mouseY);

  if(keyIsPressed) {
    background(255);
  }
}

function forma (x, y) {

  if (x < width / 2) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
  }

 if(mouseIsPressed) {
 square(x - 25, y - 25, 50);
 } else {
  ellipse(x, y, 20, 20);
 }
}