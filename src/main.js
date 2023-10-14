const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

/* since we are about to draw cars and other things in 2D in this
 project, we need to get the context of the canvas. 
 Context is an object that provides with tools like functions 
 and other methods to draw lines, shapes, and  other stuff. 
 For 3d context we use the getContext("webgl") 
 */
const ctx = canvas.getContext("2d");

const car = new Car(100, 100, 30, 50); // passing values in the car object

car.draw(ctx);