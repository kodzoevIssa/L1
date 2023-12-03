class Shape {
  constructor() {}

  calculateArea() {}

  calculatePerimeter() {}
}

class Rectangle extends Shape {
  constructor(length, width) {
    super();
    this.length = length;
    this.width = width;
  }

  calculateArea() {
    return this.length * this.width;
  }

  calculatePerimeter() {
    return 2 * (this.length + this.width);
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

class Triangle extends Shape {
  constructor(side1, side2, side3) {
    super();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  calculateArea() {
    // Расчет площади треугольника по формуле Герона
    const s = (this.side1 + this.side2 + this.side3) / 2;
    return Math.sqrt(
      s * (s - this.side1) * (s - this.side2) * (s - this.side3)
    );
  }

  calculatePerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
}

// Пример использования классов
const rectangle = new Rectangle(4, 5);
console.log("Rectangle Area:", rectangle.calculateArea());
console.log("Rectangle Perimeter:", rectangle.calculatePerimeter());

const circle = new Circle(3);
console.log("Circle Area:", circle.calculateArea());
console.log("Circle Perimeter:", circle.calculatePerimeter());

const triangle = new Triangle(3, 4, 5);
console.log("Triangle Area:", triangle.calculateArea());
console.log("Triangle Perimeter:", triangle.calculatePerimeter());
