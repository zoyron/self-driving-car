// will be defining the car class here


/*
this is the class Car whose object we used in the main.js file
here x and y are the initial co-ordinates of the car and 
width and height are understandable variables for the car,
respectively.
*/
class Car {
  constructor(x, y, width, height) {
    // x is the variable value passed through the function, this.x is the variable inside of the constructor, these 2 are two different variables, think of one as x and another as coordinateX, totally different variables.
    this.x = x;
    this.y = y;
    this.widht = width;
    this.height = height;
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.rect(this.x - (this.widht / 2), this.y - (this.height / 2), this.widht, this.height);
    ctx.fill();
  }
}