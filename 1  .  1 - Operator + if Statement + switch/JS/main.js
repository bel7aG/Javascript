/*
   true == 1;  ==> true
   true === 1  ==> false
   true != 1   ==> false
   true !== 1  ==> true
   0 == false  ==> true
   true == !0  ==> true
   true == 10(ay3dad békhléf él 1)  ==> false
   true === !0 ==> true  // WTF

   "" == 0     ==> true
   '' == 0     ==> true
   "" ===0     ==> false

   null == undefined ==> true
   null === undefined ==> false  Because{
      typeof(null) ==> Object
      typeof(undefined) ==> undefined
   }

   null == ""  ==> false
   undefined == ""   ==> false
   null == 0   ==> false

   typeof(NaN) ==> number

   NaN == NaN  ==> false
*/


//Operators

let now = 2018;
let birthYear = now - 22.5;
let age = 22;
console.log(`birthDay = ${birthYear = now - age * 2}`);
//	Postfix Increment Postfix Decrement
let v = 1;
console.log(`v = 1 ==> v++ = ${v++}
v = 0 ${v = 0}
v = 0 ==> ++v = ${++v}`);

//The in operator returns true if the specified property is in the specified object or its prototype chain.
//in
console.log(5**2);
let mark = "mark";
let bmw = "BMW";
let model = '7';
let y = "year";
let empty = "empty";
let car = {
   mark: 'BMW',
   model: "7",
   year: 2016,
   empty
}
console.log(`${car}`);

let checkOne = mark in car;
let checkTwo = bmw in car;
let checkThree = model in car;
let checkFoor = y in car;
let checkFive = empty in car;

console.log(`mark in car ==> ${checkOne}
bmw in car ==> ${checkTwo}
model in car==> ${checkThree}
y in car ==> ${checkFoor}
empty in car ==> ${checkFive}`);

//delete
console.log(car.mark);
delete car.mark;
console.log(car.mark);

if(!("mark" in car)) {
   car.mark = "Mercedes";
}
console.log(car.mark);

//instanceof  ==> object instanceof constructor
function Car(make, model, year) { //==> Car Constructor
  this.make = make;
  this.model = model;
  this.year = year;
}
var auto = new Car('Honda', 'Accord', 1998);  //==> Object auto

console.log(auto instanceof Car);
   // expected output: true

console.log(auto instanceof Object);
   // expected output: true


//if Statement
let work = false;
if(work) {
   console.log("work == true");
} else {
   console.log("work == false");
}
let myAge = 22;
let myStringAge = "22";

// == vs ===
if(myAge == myStringAge) {
   console.log(` myAge == myStringAge ${(myAge == myStringAge)}`);
}

if(!(myAge === myStringAge)) {
   console.log(` myAge === myStringAge ${(myAge === myStringAge)}`);
}

//switch Statement
console.log("swith(expresion) {    } ==>");
var myJob = "Web developer"
switch (myJob) {
   case "taxi":
      console.log("Belhassen job is Web taxi");
   case "software deveoper":
      console.log("Belhassen job is Web developer");
      break;
   case "Web developer":
      console.log("Belhassen job is Web developer");
      break;
   default: "all job false";
      break;
}

//challenge Silly Game
let heightOne = 180, heightTwo = 165, heightThree = 170;;
let ageOne = 22, ageTwo = 20, ageThree = 22;
let playerOne = heightOne + (ageOne * 5);
let playerTwo = heightTwo + (ageTwo * 5);
let playerThree = heightThree + (ageThree * 5);

if( (playerOne > playerTwo) && (playerOne > playerThree)) {
   console.log(`Winner Of this Battle is playerOne with score = ${playerOne}`);
} else if( (playerTwo > playerOne) && (playerTwo > playerThree)){
   console.log(`Winner Of this Battle is playerTwo with score = ${playerTwo}`);
} else if((playerThree > playerOne) && ( playerThree > playerTwo)){
   console.log(`Winner Of this Battle is playerThree with score = ${playerThree}`);
} else {
   console.log("DRAW");
}







/*

Precedence	Operator type	Associativity	Individual operators
20	Grouping	n/a	( … )

19	Member Access	left-to-right	… . …
   Computed Member Access	left-to-right	… [ … ]
   new (with argument list)	n/a	new … ( … )
   Function Call	left-to-right	… ( … )

18	new (without argument list)	right-to-left	new …

17	Postfix Increment	n/a	… ++
   Postfix Decrement	… --

16	Logical NOT	right-to-left	! …
   Bitwise NOT	~ …
   Unary Plus	+ …
   Unary Negation	- …
   Prefix Increment	++ …
   Prefix Decrement	-- …
   typeof	typeof …
   void	void …
   delete	delete …
   await	await …

15	Exponentiation	right-to-left	… ** …

14	Multiplication	left-to-right	… * …
   Division	… / …
   Remainder	… % …

13	Addition	left-to-right	… + …
   Subtraction	… - …

12	Bitwise Left Shift	left-to-right	… << …
   Bitwise Right Shift	… >> …
   Bitwise Unsigned Right Shift	… >>> …

11	Less Than	left-to-right	… < …
   Less Than Or Equal	… <= …
   Greater Than	… > …
   Greater Than Or Equal	… >= …
   in	… in …
   instanceof	… instanceof …

10	Equality	left-to-right	… == …
   Inequality	… != …
   Strict Equality	… === …
   Strict Inequality	… !== …

9	Bitwise AND	left-to-right	… & …

8	Bitwise XOR	left-to-right	… ^ …

7	Bitwise OR	left-to-right	… | …

6	Logical AND	left-to-right	… && …

5	Logical OR	left-to-right	… || …

4	Conditional	right-to-left	… ? … : …

3	Assignment	right-to-left	… = …
   … += …
   … -= …
   … **= …
   … *= …
   … /= …
   … %= …
   … <<= …
   … >>= …
   … >>>= …
   … &= …
   … ^= …
   … |= …
2	yield	right-to-left	yield …
   yield*	yield* …

1	Comma / Sequence	left-to-right	… , …
*/

/* for number 3
   Name	Shorthand operator	Meaning
   Assignment	x = y	x = y
   Addition assignment	x += y	x = x + y
   Subtraction assignment	x -= y	x = x - y
   Multiplication assignment	x *= y	x = x * y
   Division assignment	x /= y	x = x / y
   Remainder assignment	x %= y	x = x % y
   Exponentiation assignment	x **= y	x = x ** y
   Left shift assignment	x <<= y	x = x << y
   Right shift assignment	x >>= y	x = x >> y
   Unsigned right shift assignment	x >>>= y	x = x >>> y
   Bitwise AND assignment	x &= y	x = x & y
   Bitwise XOR assignment	x ^= y	x = x ^ y
   Bitwise OR assignment	x |= y	x = x | y
*/
