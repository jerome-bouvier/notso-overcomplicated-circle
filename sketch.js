function setup() {
  createCanvas(900, 900)
  background('#fafafa')
  
  stroke(0, 0, 0, random(0,80))
}

function draw() {
  
  translate (width/2, height/2)
  let t = frameCount;

  push()
  rotate(PI/2 + random(0,360))
  line(cos(t/100) * 299, sin(t/100) * 299, sin(t/100) * 300, cos(t/100) * 300)
  pop()
}

function keyPressed() {
  if (key == " ") {
    redraw()
  } else if (key == "s") {
    save("screenshot.png")
  } else if (key == "c") {
    stroke(random(0,255), random(0,255), random(0,255), random(0,80))
  }
}