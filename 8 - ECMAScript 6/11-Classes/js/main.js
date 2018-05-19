//Understand prototype Before class

function Cars(options) {
   this.title = options.title;
}

Cars.prototype.drive = function() {
   return `Master Class`;
}

const myCar = new Cars({title: 'BelhassenMasterClassCorvette Ha Ha'});
console.log(myCar);


function Chevrolette(options) {
   Cars.call(this, options);
   this.color = options.color;
}

Chevrolette.prototype = Object.create(Cars.prototype);
Chevrolette.prototype.constructor = Chevrolette;
Chevrolette.prototype.honk = function() {
   return `beep`;
}

const chev = new Chevrolette({color: 'Gold',title: 'chnageiTTo BmW'});
console.log(chev);
console.log(chev.drive());
console.log(chev.honk());

                                       // Now Class
/*------------*/
class Dar {
   constructor({title}) {
      this.title = title;
   }

   bo93a() {
      return `Seattle`;
   }
}

const dar = new Dar({title: 'hay Mouhamed Ali'});
console.log(dar);
console.log(dar.bo93a());

/*  |  */

class DarKbira extends Dar {
   constructor(options) {
      super(options);
      this.color = options.color;
   }
   
   honk() {
      return `${this.title} sout 5ayéb and my favorit color is ${this.color}`;
   }
}

let kbira = new DarKbira({title: 'BelhassenOhYeah', color: 'red'});
console.log(kbira.honk());



/*------------*/



class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  // Getter
  get area() {
    return this.calcArea();
  }
  // Method
  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100


class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755

























                                       // class declaration
class Person {
   constructor(name, yearOfBirth) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
      console.log(this);
   }

   get age() {
      return this.calcAge();
   }

   calcAge() {
      return new Date().getFullYear() - this.yearOfBirth;
   }

   what() {
      console.log(`${this.name} is a Person`);
      console.log(typeof(this)); //Object

   }

   static arms() {
      console.log(typeof(this)); //function WTF Static
      //console.log(new this('shit', 100)); tékhdém WTF fe lokhrin lé 7ata fel constractor
      return 2;
   }
}

let me = new Person('Belhassen', 1996); //created instance of class

console.log(`My Name is ${me.name} and i was born in ${me.yearOfBirth}`);

console.log(`${me.name} has ${Person.arms()} arms !`);

//extends     /* ! */
class Juggler extends Person {
   what() {
      console.log(`${this.name} is a Juggler`)    //==>ta3ref ay 7aja 3lé l classe Person mathalan this.name
      super.what(); // lola is a Person ==> super t3ayet lel function from el parent eli howa fel 7ala hédhi Person
      //what(); ==> ménghir super is not defined
   }
}
let you = new Juggler("lola");
me.what();
you.what();
console.log(me.what());
console.log(you.what());


//-----//

class Animal {
   constructor(age) {
      this.age = age;
   }

   move() {
      //code
   }
}

class Mammal extends Animal {
   constructor(age, furColor) {
      super(age);
      this.furColor = furColor;
   }

   liveBirth() {/*come code*/}
}

class Human extends Mammal {
   constructor(age, furColor, languageSpeaking) {
      super(age, furColor);
      this.languageSpeaking = languageSpeaking;
   }

   speak() {/*some code */}
}




class Car {
  constructor() {
    this.make = 'Honda';
    this.model = 'Accord';
    this.color = 'white';
  }

  setMake(make) {
    this.make = make;
    // NOTE: Returning this for chaining
    return this;
  }

  setModel(model) {
    this.model = model;
    // NOTE: Returning this for chaining
    return this;
  }

  setColor(color) {
    this.color = color;
    // NOTE: Returning this for chaining
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
    // NOTE: Returning this for chaining
    return this;
  }
}

const car = new Car()
  .setColor('pink')
  .setMake('Ford')
  .setModel('F-150')
  .save();

console.log(car);



                                       //class expressions
//unnamed
let Person2 = class {
   constractor(name, yearOfBirth) {
      this.name = name;
      this.yearOfBirth = yearOfBirth;
   }
};

//named
let Person3 = class Person {
   constractor(name, age) {
      console.log(this);
      this.name = name;
      this.age = age;
   }
};
