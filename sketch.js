function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

function draw() {
  noStroke();
  fill(255, 255, 255, 10);
  rect(0, 0, width, height);

  if(keyIsPressed) {
    background(255);
  }

  if (mouseX < width / 2) {
    if (mouseY < height / 2) {
      fill(255, 0, 0);
    } else {
      fill(0, 255, 0);
    }
  } else {
    if (mouseY < height / 2) {
      fill(0, 0, 255);
    } else {
      fill(0);
    }
  }
  square(mouseX, mouseY, 20);

 }