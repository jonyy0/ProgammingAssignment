//The setup function only happens once
let rad = 60; // Width of the shape
let xpos, ypos; // Starting position of shape

let xspeed = 4.3; // Speed of the shape
let yspeed = 3.2; // Speed of the shape

let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom

function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
fill(128);
noStroke();
frameRate(30);
ellipseMode(RADIUS);
xpos=width/2;
ypos=height/2;
}
//The draw function happens over and over again
function draw() {
  background(130,130,123); //an RGB color for the canvas' background
  //circle
  xpos=xpos + xspeed *xdirection;
  ypos=ypos + yspeed *ydirection;
  if(xpos>width-rad||xpos<rad){
  	xdirection*=-1;
  }
  if(ypos > height - rad|| xpos < rad){
  	ydirection*=-1;
  }
  stroke(252,255,0) // an RGB color for the circle's border
  fill(252,255,0); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(xpos,ypos,rad,rad); 
}

