class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(5);
console.log("Area:", circle.getArea());
console.log("Circumference:", circle.getCircumference());
