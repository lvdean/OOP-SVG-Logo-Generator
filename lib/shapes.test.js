const { Triangle, Square, Circle } = require("../lib/shapes");

// test for a triangle

describe("Triangle test", () => {
    test("Test for a triangle filled in blue", () => {
      const shape = new Triangle();
      shape.setColour("blue");
      expect(shape.render()).toEqual(
        `<polygon points="150, 18 244, 182 56, 182" fill="blue"/>`);
    });
  });

// test for square

describe("Square test", () => {
    test("Test for a square filled in red", () => {
      const shape = new Square();
      shape.setColour("red");
      expect(shape.render()).toEqual(
        `<rect width="150" height="150" x="70" y="30" fill="red"/>`);
    });
  });

describe("Circle test", () => {
    test("Test for a circle filled in green", () => {
      const shape = new Circle();
      shape.setColour("green");
      expect(shape.render()).toEqual(
        `<circle cx="150" cy="100" r="80" fill="green"/>`);
    });
  });




