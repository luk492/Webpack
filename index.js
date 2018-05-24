class Polygon {
    constructor(height, width) {
      this.name = 'Polygon';
      this.height = height;
      this.width = width;
    }

    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }
  
    sayHistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
        'and gonia (angle).');
    }
  }
  let p = new Polygon(300, 400);
  p.sayName();
  console.log('The width of this polygon is ' + p.width);