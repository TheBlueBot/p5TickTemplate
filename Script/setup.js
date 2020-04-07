// Globals Should be defined here --
 
// ---------------------------------

function preload() {
}

function setup() { //Loaded with some of my favorite settings
  createCanvas(windowWidth, windowHeight)
  console.log("starting...")
  colorMode(HSB, 100) //More common: (RGB, 255)
  textAlign(CENTER, BOTTOM)
  rectMode(CENTER)
  collideDebug(true);
  frameRate(60)
  imageMode(CENTER);
  
  // - Uncomment and fill variables for a simple gui
  // var gui = createGui('Interaction gui')
  // sliderRange(min, max, step)
  // gui.addGlobals('globalVariable')

  //Number of ticks to run per second
}

//Keeps the canvas the size of the window
function windowResized() {resizeCanvas(windowWidth, windowHeight);}