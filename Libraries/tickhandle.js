var tickCount = 0
var deltaTicks = 0

//Number of ticks to run per second
var tickPerSec = 20

function perFrame(){
  for (frameTicks = tickPerFrame * deltaTime/17 *slider.value(); frameTicks > 0; frameTicks--){
    tickCount += 1
    perTick()
  }
  deltaTicks = 0
}

function perTick(){
  deltaTicks ++
  push()
  tick()
  pop()
}