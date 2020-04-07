## About

`p5Template.zip` is a template website setup for: p5, p5collide and p5gui. Some [custom functions](#Custom-Functions) & [useful globals](#globals).
Totally Dependant on p5, though it comes pre installed.
- [p5 Reference](https://p5js.org/reference/#/p5/)
- [p5collide Reference](https://github.com/bmoren/p5.collide2D)
- [p5gui Basic Guide](https://github.com/bitcraftlab/p5.gui)


#### Custom Functions
`function tick(){}` : Everthing inside this function will be called every tick
`function perFrame(){}` : Calculates and performs the number of ticks needed for each frame. For basic use call at the start of draw()

#### Globals
`deltaTicks` : The number of ticks that have happened this frame
`tickCount` : The number of ticks since the program started
`tickPerSec` : The number of ticks to run every second (defaults to 20)


## Guide for beginners
 **Intro**
First things first. Learn a little about javascript. It is fairly easy to pick up the basics of the language. I would highly recommend [w3schools](https://www.w3schools.com/js/) js tutorial. It has a "Try It Yourself" feature that lets you look at pre written code and edit it live in the browser. 
Another website that is highly usefull is [repl.it](https://repl.it), they have an in browser editor that can be used to code in a large array of languages and they will also host any websites you make. This makes sharing your creations incredibly easy. For instance, I [ ported this project to repl](https://repl.it/@CaolanDurrell_l/p5Template). Simply hit the fork button at the top and the project (or repl as they put it) will copied to your account. The project can then be edited and ran from the browser, and will be hosted for free :) .
It is possible to edit the site offline but some of the libraries are not included and are hosted elsewhere.
Simply dragging the html file into your browser should run the site from your system.


**Getting to know p5**
p5.js is the backbone of this site. Some basic functions to get you started:
```javascript
rect(x, y, width, height) //Draws a rectangle to the canvas
circle(x, y, diameter) //Draws a circle	to the canvas
fill(color) //sets fill color of anything drawn after it
function mouseClicked() {} //Performs on mouse Clicked
background(color) //Draws a solid color over every pixel
```
p5 is good for making real time simulations and simple games. It is good at rendering basic 2d and 3d shapes. Though beginners will likely stick to playing around with moving 2d shapes.
It is a good idea to take a long look at the [reference](https://p5js.org/reference/#/p5/) , and attempt to take away some useful information from the documentation. Each page of the docs usually contains a demo and example, both of which can edited and tested.
<!--stackedit_data:
eyJwcm9wZXJ0aWVzIjoiZXh0ZW5zaW9uczpcbiAgcHJlc2V0Oi
BnZm1cbiIsImhpc3RvcnkiOlsyMDQyNzk4NjM4LDEzNDI0NDc4
MzldfQ==
-->
