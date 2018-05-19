//==> statment function
greet();
function greet() {
   console.log("Hi ..");
}

//expression function
//anonymousGreet() ==>ERROR undefined ..manajamch n3aytelha 9ball kima statement function 5aterha variable
let anonymousGreet = function() {
   console.log("Hi .. I am the anonymousGreetFunction");
}
anonymousGreet();

function log(c) {
   return c = 1.22;
}
console.log(typeof(log)); //function
console.log(typeof(log())); // number

function log2(c) {
   return c === 10;
}
console.log(typeof(log2())); // booblean
if(typeof(log()) === "number") {
   console.log("yes log() is a number");           //yes
}
if(typeof(log) == "function") {
   console.log("yes log is a function");           //yes
}

let log3 = function(a) {
   console.log("oh yeah");
}
console.log(typeof(log3())); //undefined (5ater mafaméch return 7aja)
console.log(typeof(log3)); //function

   //IMPORTANT LOOK AT THAT
//first Class function
function beach(a) {
   a();
}
console.log('------');
beach(function() {
   console.log("amazing beach");
});

beach.v = "sss";   //===> function is an object
console.log(beach.v + "   " + typeof(beach.v));

//invoked function
"ssssss"; //syntax s7i7 ama matamél chay ama l fonction tamel look
(function(name) {
   console.log("my name is " + name)
}("belhassen"));
//==> invoked function




//Basic
let myAge = calculateAge(1996);
console.log(`myAge = ${myAge}`);
let brotherAge = calculateAge(1993);
console.log(`brotherAge = ${brotherAge}`);
//function Statement
function calculateAge(yearOfBirth) {
   let age = 2018 - yearOfBirth;
   return age;
}
yearOfRetirment("belhas", "1995");
function yearOfRetirment(name, year) {
   let age = calculateAge(year);
   let retirment = 65 - age;
   if(retirment >= 0) {
      console.log(`${name} ==> ${retirment}`);
   } else {
      console.log(`${name} is already retirment`);
   }
}
yearOfRetirment("Belhassen", 1995);
yearOfRetirment("Maher", 1993);
yearOfRetirment("j7a", 1949);

// function Expresion

//nonRemontée matékhdééméch kén ki téktébha bad lkhédma
var nonRemontée = function() {
  console.log("truc");
 nonRemontée();
 // TypeError: nonRemontée is not a function

}
