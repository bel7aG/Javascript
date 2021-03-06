let message = `javascript`;
let createArrayFromString = Array.from(message);
console.log(createArrayFromString);

Array.isArray(createArrayFromString) //true


console.log(x = Array(7)); //array with length of 7

let table = Array.of(7); //[7] =+> table[0] = 7
console.log(table);



array_Clone = function(array) {
 return array.slice();
};
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


//The find() method returns the value of the first element in the array that satisfies the provided testing function.
// Otherwise undefined is returned.

let Table = [1, 2, 3, 5, 6];
let found = Table.find((element) => element < 4); // Array.find(callback) ==>ES6
console.log(found);

var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];
let find = inventory.find((fruit) => fruit.name === 'cherries');

console.log(find);

let findIndex = inventory.findIndex((quantity) => quantity.quantity > 2);
console.log(findIndex);


console.log('______checkcheck______');

const a = [1, 2, 3];
a.concat('concatDontChangeTheStateOfTheArray a');
console.log(a);

a.push('pushChangeTheStateOfArray a');
console.log(a);

const js = ['react', 'redux', 'router', 'es6', 'jsx', 'babel'];
console.log(js);

//Spread oprator Array
console.log(["Javascript", ...js, "Webpack"]);
console.log(js);

//Spread oprator Object
//TRICK 1
let spreadObject = {
  name: 'Belhassen',
  age: 22
};

console.log({
  ...spreadObject,
  location: 'Rades',            //{name: "Belhassen", age: 22, location: "Rades"}
  age: 200                       //{name: "Belhassen", age: 200, location: "Rades"}      /!\
});
                                //==> overwrite the age
//TRICK 2

console.log({
  age: 200,                     // ==> {age: 200, name: "Belhassen", location: "Rades"}
  ...spreadObject,              // ==> {age: 22, name: "Belhassen", location: "Rades"}     /!\
  location: 'Rades'
});
