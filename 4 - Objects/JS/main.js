//first Method Manually Setting ==> Slowly
let person = new Object();
person.firstName = "Belhassen";
person.lastName = "Gharsallah";
person.haveCar = false;
console.log(person);
console.log(person.firstName + " " + person.lastName);

   //New Object inside other object
person.address = new Object();
person.address.street = "Street Abd Rahmen Ben Aouf";
person.address.houseNumber = 30;
person.address.state = "Ben Arous";
person.address.city = "Rades";

console.log(person);
console.log(person.address);
console.log(person.address.city);

//Object Literal Syntax==> FAST
let Person = {
   firstName : "Tony",
   lastName  : "OK",
   isWomen   : false,
   address   : {
      street: "abd Rahmen ben aouf",
      city  : 'Rades',
      state : "Ben Arous"
   }
};
Person.hobby = {
   nameOfHobby: "Web development",
   secondHobby: "Workout",
   smoke: true
};
console.log(Person);
// el fonction hedhi el argument mte3ha Object
function hey(bruh) {
   console.log("hey " + bruh.firstName + " " + bruh.lastName);
}
hey(person);
hey(Person);
//==>Remarque ==> kima najmou zeda neketbou haka
hey(
   {
      firstName : "lola",
      lastName  : "ohYeah",
   }
);

// class information {
//    constructor(name, surname, yob, year = 2018) {
//       this.name = name;
//       this.surname = surname;
//       this.yob = yob;
//       this.year = year;
//    }
//
//    calculateAge() {
//       return this.year - this.yob;
//    }
//
// }
//
// let belhassen = new information("Belhassen", "Gharsallah", 1996);
//
// console.log(belhassen.calculateAge());
console.log('--------------');

let Belhassen = {
   // name: 'Behassen',
   // surName: 'Gharsallah',
   yearOfBirth: 1996,
   // isMarried: false,
   // family: ['Hayet', 'Khaled', 'Marwen', 'Maher'],
   calculateAge: function() {
      // return 2018 - this.yearOfBirth;
      this.age = 2018 - this.yearOfBirth;
   }

}

//console.log(typeof(Belhassen.calculateAge()));

console.log(this);
// let age = Belhassen.calculateAge() //22
// Belhassen.age = age;
// console.log(Belhassen);
// console.log(typeof(Belhassen.age)); //number
// console.log(typeof(Belhassen)); //object

Belhassen.calculateAge();
console.log(Belhassen.age);
