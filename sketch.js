function setup() {
  createCanvas(windowWidth, windowHeight);
  background(84, 28, 56);
}

function draw() {
  noStroke();
  fill(84, 28, 56, 13);
  rect(0, 0, width, height);

forma(mouseX, mouseY);
forma(width - mouseX, mouseY);
forma(mouseX, height - mouseY);
forma(width - mouseX, height - mouseY);

  if(keyIsPressed) {
    background(84, 28, 56);
  }
}

function forma (x, y) {

  if (x < width / 2) {
      fill(255, 241, 118);
    } else {
      fill(240, 98, 146);
  }

 if(mouseIsPressed) {
 square(x - 25, y - 25, 50);
 } else {
  circle(x, y, 15);
 }
}