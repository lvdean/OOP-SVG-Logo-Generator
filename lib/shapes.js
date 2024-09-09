class Shape {
constructor (){
this.shapeColour = "";
}
setColour(colourVar) {
    this.shapeColour = colourVar;
  }
};

class Triangle extends Shape{
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour)
      }
    render(){
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColour}"/>`
    }   
};

class Circle extends Shape{
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour)
      }
    render(){
     return`<circle cx="150" cy="100" r="80" fill="${this.shapeColour}"/>`
    }
};

class Square extends Shape{
    constructor(text, textColour, shapeColour) {
        super(text, textColour, shapeColour)
      }
    render(){
     return `<rect width="150" height="150" x="70" y="30" fill="${this.shapeColour}"/>`
    };
};

// Exports classes (Square, Triangle, Circle)
module.exports = { Triangle, Square, Circle};