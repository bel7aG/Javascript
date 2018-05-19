let numbers = [1, 2 , 3, 4, 5];
let doubleNumbers = [];
for (let i = 0; i < numbers.length; i++) {
   //doubleNumbers[i] = numbers[i] * 2;
   doubleNumbers.push(numbers[i] * 2);
}
console.log(doubleNumbers);

// Now with map array helper
let square = numbers.map(function(number) {
   return number * 2;
});
console.log(square);
//or with arrow function
let cube = square.map( (double) => double * 2);
console.log(cube);

//exercice
let cars = [
   {model: 'corvertte', price: 'expensive'},
   {model: 'ferrari', price: 'very expensive'},
   {model: 'polo', price: 'cheap'}
];
console.log(cars);
let prices = cars.map(function(car) {
   return car.price;
})
console.log(prices);
