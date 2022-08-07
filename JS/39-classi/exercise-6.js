class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(shape){
    if (shape === square){                      //switch (shape){
      return square.side * square.side;             //case square: return square.side * square.side; 
    }                                                   //break;
    else if (shape === rectangle){                  //case rectangle: .....
      return rectangle.width * rectangle.height;
    }
    else if (shape === circle){
      return 3.14 * (circle.radius * circle.radius)
    }
    else{
      return "wrong shape"
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));