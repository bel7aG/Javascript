let colors = ['red', 'blue', 'green'];

// for (let i = 0; i < colors.length; i++) {
//    console.log(colors[i]);
// }

// array helper method ==> forEach method
colors.forEach(function(color) {
   console.log(color);
});                              /* ===*/ colors.forEach( color => console.log(color));

//exercice
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(function(number) {
   sum += number;
});
console.log(sum);
