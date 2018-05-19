


                                 //Symbol    ==>unique
const symbolOne = Symbol('symbol-1');
const symbolTwo = Symbol('symbol-1');

console.log(symbolOne === symbolTwo);  //false

console.log(typeof(symbolOne));        //symbol
console.log(symbolOne.toString());     //Symbol(symbol-1)
console.log(typeof(symbolOne));        //symbol
let k = symbolOne;
console.log(typeof(k));                //symbol
console.log(k === symbolOne);

let sToS = symbolOne.toString();
console.log(typeof (sToS));            //String
console.log(sToS == symbolOne);        //false


// Use case 1: Symbols as property keys
const MY_KEY = Symbol();
let obj = {};

obj.MY_KEY = 123;
console.log(obj.MY_KEY);


// Use case 2: constants representing concepts

const COLOR_RED = Symbol('Red');
const COLOR_ORANGE = Symbol('Orange');
const COLOR_YELLOW = Symbol('yellow');
const COLOR_GREEN = Symbol('Green');
const COLOR_BLUE = Symbol('Blue');
const COLOR_VIOLET = Symbol('Violet');

function getComplement(color) {
   switch (color) {
      case COLOR_RED:
         return COLOR_RED;
      case COLOR_ORANGE:
         return COLOR_VIOLET;
      case COLOR_YELLOW:
         return COLOR_GREEN;
      case COLOR_GREEN:
         return COLOR_RED;
      case COLOR_BLUE:
         return COLOR_ORANGE;
      case COLOR_VIOLET:
         return COLOR_YELLOW;
      default:
            throw new Exception('Unknow color: ' + color);
   }
}
