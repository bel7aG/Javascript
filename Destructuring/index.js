// Object Destructuring
const person = {
  name: 'Belhassen',
  age: 22,
  location: {
    city: 'Rades',
    temp: 25
  }
};

const {name, age} = person;

console.log(`${name} is ${age}`);

const {city: myCity = 'okokok'} = person.location;
console.log(myCity);

const addOne = (data) => data.a + data.b;
console.log(addOne({a: 3, b: 3}));

const addTwo = ({ a, b }, c) => a + b - c;
const o = {
  a: 33,
  b: 7
};
console.log(addTwo(o, 20));


// Array Destructuring
const Javascript = ['React', 'Router', 'Redux', 'JSX', 'ES6', 'ES7', 'Webpack'];
const [one, two, , foor, , six] = Javascript
console.log(`you are good in ${one} ${two} ${six}`);

const me = ['Belhassen'];
const [myName, mySurname = 'Gharsallah', isTrue = true] = me;
console.log(`my Name is ${myName} ${mySurname} and this is ${typeof(isTrue) === 'boolean'? 'Yup' : 'Nop'}`);
