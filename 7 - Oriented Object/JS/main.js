//Worst Method 
function person(name, favoritColor) {
   console.log("my name is " + name + "and my job is " + favoritColor);
}
person("Belhassen", "yellow");
person("john", "red");

//Best Method Object
class man {
   constructor(name, lastName, favoritColor, man = true) {
      this.name = name;
      this.lastName = lastName;
      this.favoritColor = favoritColor;
      this.man = man = true;
   }

   meet() {
      console.log(`hey Mr ${this.name + " " + this.lastName} nice to meet you
      Your favoritColor is ${this.favoritColor} and you a ${this.man}`);
   }
}
console.log(man);

let userOne = new man("Belhassen", "Gharsallah", "blue", true);
console.log(userOne);
userOne.meet();

//wa ela Constructor function
function Person(name, favoritColor) {
   this.name = name;
   this.favoritColor = favoritColor;

   this.greet = function() {
      console.log("Hello My Name is " + this.name + "and my Favorit color is : " + this.favoritColor);
   }
}
let belhassen = new Person("Belhassen", "Yellow");
let issam     = new Person("Issam", "Blue");
console.log(belhassen);
belhassen.greet();
issam.greet();
