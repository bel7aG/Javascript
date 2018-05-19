//functions are Object in Javascript
console.log("---------------------------------------------")

hello.ok = "oOoOk";
// function statement
hello();
function hello() {                     //khdhét bo93a fel mémoir hata loukén ayétélha
   console.log("Hellow Guys");         //9balha yaréfha l progrm
}
console.log(hello.ok);
//function Expression
let anonymousHello = function() {         //NAME anonymous
   console.log('hello Guys');
}
anonymousHello(); // Run The Function

/*-------------------------*/
console.log("---------------------------------------------")

//this
console.log(this);
function a() {
   console.log(this);
   this.newvariable = 'hello';
}
a();
console.log(newvariable);

let b = function() {
   console.log(this);
}
b();

let c = {
   name: 'the c object',
   log: function() {
      let self = this;
      console.log(this); // in this case this is a method on a object
      let setname = function(newname) {
         self.name = newname;
      }
      setname('Updated again! The c object');
      console.log(self);
   }
}
c.log();

console.log(typeof(document)); //Object

/*-------------------------*/

//arguments the parameters you pass to function
console.log("---------------------------------------------")


function greet(firstName, lastName, language = "arabic") { // in ES6 i can pass default value for an argument
   if (arguments.length === 0) {  //arguments fonction ichouf béha l arguments maoujouda f javascript
      console.log('Missing parameters!');
      console.log('---------------');
      return;
   }
   console.log(firstName);
   console.log(lastName);
   console.log(language);
   console.log(arguments); //==> new keyword in ES6 Give all the value in a array but it's not an array
   console.log(typeof(arguments)); //Object

}
greet(); //==> Javascript don't care about parameters he dont give you an error like the other language if you don't give him an argument he give you undefined
console.log("--------------");
greet('Belhassen');
console.log("--------------");
greet('Belhassen', 'Gharsallah');
console.log("--------------");
greet('Belhassen', 'Gharsallah', 'en');


/*-------------------------*/
console.log("---------------------------------------------")

function greet(firstName, lastName, language) {
   language = language || 'en'; //bch yal9a language undefined donc inagez lel 'en'
   if (language === 'en') {
      console.log(`Hello ${firstName + " " + lastName} your language is english`);
   }
   if(language === 'ar') {
      console.log(`Ahla wasahla bik ${firstName + " " + lastName} your language is Arabic`);
   }
   if (language !== 'en' && language !== 'ar'){
      console.log(`Sorry Mr ${firstName + " " + lastName} you language is not availble`);
   }
}
console.log("--------------");
greet("Belhassen", "Gharsallah", 'ar');
console.log("--------------");
greet("Belhassen", "Gharsallah", 'en');
console.log("--------------");
greet("Belhassen", "Gharsallah", 'es');

/*-------------------------*/
console.log("---------------------------------------------")

// using an (Immediately Invoked Function Expression) ==> (IIFE)
//él fonction thotélha valeur bélwa9ét 5

//example1
   let greeting = function() {
      console.log("Hey");
   }(); //==> héy t'affichet fel console ou éna ma3ayétélhésh

//example 2
   let sayHelloWorld = function(hello = "Hello World") {
      return hello;
   }(); //==> tawa él fonction sayer khdhét type té3ha string ou ki t3aytélha bél a9wés i9olék fama error khater string is not a function
   console.log(typeof(sayHelloWorld));

//example 3
   let sayHelloWorld2 = function(hello = "Hello World 2") {
      console.log(hello + " " + typeof(hello));
   }(2222); // hné badalét él valeur par defaut 7ata loukén string badaltou type té3ou wala number (2222)


3;
                                 //<== is valid js expression on the flyy
"chneya hédha mafaméch error";

// But in function expression (anonymous) w can't do that we need to add 9awes i7él mél lowél ou isakér félé5ér
let myName = "Belhassen";
(function(name = "noname") {
   let greeting = 'inside IIFI (Immediately Invoked Function Expression ): Hello';
   console.log(greeting + ' ' + name);
}(myName));

console.log(greeting); //Undefined  a3léch ahou a3léch fél a3fas

/*-------------------------*/
console.log("---------------------------------------------");
//framework inside IIFE  ---[a3fas]---

(function(name) {
   let greeting = "Hello";
   console.log(greeting + " " + name);
}(myName));
console.log("greeting ==>  " + greeting);
// jawha béhy Hello Belhassen ama tawa kifech nrodd greeting ma3roufa globally

//==> ahou lahné :D
(function(global/*object*/, name = "noname") {
   greeting = "Hello";
   global.greeting = "Hello";
   console.log(greeting + " " + name);
}(window, "BelhasseN Gharsallah"));
// tawa afficha Hello eli maoujouda fi greeting
console.log("greeting ==>  " + greeting);



/*
In JavaScript, almost "everything" is an object.

      Booleans can be objects (if defined with the new keyword)
      Numbers can be objects (if defined with the new keyword)
      Strings can be objects (if defined with the new keyword)
      Dates are always objects
      Maths are always objects
      Regular expressions are always objects
      Arrays are always objects
      Functions are always objects
      Objects are always objects

All JavaScript values, except primitives, are objects.
*/
