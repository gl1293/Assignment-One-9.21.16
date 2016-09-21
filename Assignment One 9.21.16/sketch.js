var cat;
var polar;
var x = 0;
var y = 0;
var sprayrange = 100;


////////////////////////////////////////////////////////////
function preload()
{
  cat = loadImage("trainOfCats.png");
  polar = loadImage("polarAndBunny.png");
}

////////////////////////////////////////////////////////////
function setup(){
  createCanvas(800, 600);
  background(0,255,175,80); 
}

///////////////////////////////////////////////////////////////
function draw(){
  
  if(mouseIsPressed);
  
  if(mouseMoved)

  if(keyTyped);
  
}

//////////////////////////////////////////////////////////////////
function keyTyped(){
  if (key == 'c'){
    background(random(255),random(255),random(255)); //random background color
  }
}

////////////////////////////////////////////////////////////////////
function mouseMoved(){
  rectMode(CENTER);
  x = (random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)) / 5;
  y = (random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)+random(-sprayrange, sprayrange)) / 5;
  image(cat, mouseX+x, mouseY+y, 50,50); //cat spraycan
}

/////////////////////////////////////////////////////////////////////
function mousePressed(){
  image(polar, random(width-240),random(height-240)) //polar
}