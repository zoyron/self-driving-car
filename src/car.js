// will be defining the car class here


/*
this is the class Car whose object we used in the main.js file
here x and y are the initial co-ordinates of the car and 
width and height are understandable variables for the car,
respectively.
*/
class Car {
  constructor(x, y, width, height) {
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