let RoteX

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); 
  RoteX = 0;
}

function draw() {

    tint(255, 127);
  background(250);

  
  translate(200,200);

  stroke(0);
  strokeWeight(35);
  circle(0,0,200);
  
  rotate(RoteX);
  line(125,-125,-125,125);
  
RoteX = RoteX + 0.025;
  if (RoteX > 1){
    RoteX = RoteX * 1.025 + .01;
  }
  
  if (RoteX > 360){
    RoteX = 0;
  }
    
  
}