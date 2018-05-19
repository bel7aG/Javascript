// let myArray = [1, 2, 3, 'a', true, 'okey'];
// console.log(myArray);
//
// let squareArray = myArray.map(Math.pow);
// console.log(squareArray);
//
// squareArray = squareArray.filter(x => x);
// console.log(squareArray);
//
// let letsSort = [1, 7, 3, 2, 4, ''];
// console.log(letsSort);

console.log('- * -- -- -- -- * -');

const team = {
   members: [
      'me', 'lola'
   ],
   teamName: 'codeMy[i]',

   teamSummary: function() {
      console.log(this);
      return() => {
         console.log(this);
         console.log('----');
         return() => {
            console.log(this);
         };
      };
   }
};
team.teamSummary()()();
//this is why arrow function is important

console.log('\n\n--------Enhanced Object Literal--------\n\n');

function createBookShop(inventory) {
   return {
      inventory, // inventory: inventory, ki yabdew esmhom kif kif fi es6 tnajem téktébha kima akéka

      inventoryValue() { //SUM of book
         return this
            .inventory
            .reduce((total, book) => total + book.price, 0);
      },

      priceForTitle(title) { //t3ayét lél funtion ou thot ésém l ktéb ou nkhréjlou soumou
         return this
            .inventory
            .find(book => book.title === title)
            .price;
      }
   };
}

const inventory = [
   {
      title: 'Harry Poter',
      price: 10
   }, {
      title: 'Smart way to learn Javascript',
      price: 99.99
   }
];
const bookShop = createBookShop(inventory);
console.log(bookShop);

let total = `${bookShop.inventoryValue()}$`;
console.log(total);

console.log(bookShop.priceForTitle('Smart way to learn Javascript'));

//Default function

function name(url, editor = 'Belhassen') {
   this.url = url;
   this.editor = editor;
   this.age = this.age;
}

name.prototype.favoritColor = function(color = 'white') {
   if (this.editor === 'Belhassen') {
      this.color = color;
   } else {
      this.color = 'bhim i mean grey';
      this.age = 22;
   }
   return this;
}

const lola = new name('https://www.digiartbiz.com', 'no');
console.log(lola);

console.log(lola.favoritColor('red'));

console.log(lola.editor);

function addNumbersOne(numbers) {
   return numbers.reduce((total, number) => total + number, 0);
}

addNumbersOne([5, 12, 3]);

function addNumbersTwo(...numbers) {
   return numbers.reduce((total, number) => total + number, 0);
}

let spread = addNumbersTwo(1, 10, 7, 2, 3, 4);
console.log(spread);

//Destructuring Object and function

let expense = {
   type: 'Business',
   amount: '$45 USD',
   dokhan: '10$',
   taxi: '1.5$'
}

let {type} = expense; // ==>  let type = expense ==> Business
console.log(type); //type té3ha string

let {amount, taxi, dokhan} = expense;
console.log(`${amount} ${taxi} ${dokhan}`);

let savedFiled = {
   extension: 'jpg',
   name: 'repost',
   size: 1000
};

function fileSummary({name, extension, size}, {color} = {color: 'red'}) {
   return `${color}  The file ${name}.${extension} is of size ${size}`;
}

let myFile = fileSummary(savedFiled, {color: 'purple'});
console.log(myFile);

//Destructuring Array
const companies = [
   'Google',
   'Facebook',
   'Uber',
   'AirBnb',
   'Vue',
   'React'
];
const [firstCompany,, thirdCompany] = companies;
console.log(`${firstCompany} ${thirdCompany}`);

const {length} = companies; //fel array ki namlouh haka nwaliw nhotou l proprieties mathalan length = 3
console.log(length); // 3

const [,,, ...rest] = companies; //tawa rest iji fi array andou index 0 1 2  ou yabda mén index 3
console.log(rest);

//Destructuring Arrays and Objects At the Same Time
const cars = [
   {
      Name: 'BMW',
      Location: 'Germany'
   }, {
      Name: 'Mercedes',
      Location: 'Germany'
   }, {
      Name: 'Chevrolet',
      Location: 'USA'
   }, {
      Name: 'toktok',
      Location: 'Tunsia'
   }
];

const [{ Location, Name }] = cars;

console.log(Location);
console.log(Name);
console.log(typeof(Name));


const Google = {
   locations: ['New York', 'Rades', 'London', 'Berlin']
}

const { locations: [locations] } = Google;
console.log(locations);

//why this syntax is important
function important({name, age, surname, job, yearOfBirth}) {
   return `${name} ${age} ${surname} ${job} ${yearOfBirth} `;
}


const user = {
   name: 'Belhassen',
   surname: 'Gharsallah',
   age: 22,
   yearOfBirth: '31/12/1995',
   job: 'Developer'
};

let necessary = important(user);
console.log(necessary);


//Points

const points = [
   [4, 5],
   [1, 2],
   [10, 3]
];
console.log(points);   //(3) [Array(2), Array(2), Array(2)]
// 0:(2) [4, 5]
// 1:(2) [1, 2]
//2:(2) [10, 3]

const newPoints = points.map(([x, y]) =>  ({x, y})  );  //{x: x, y: y}

console.log(newPoints); //(3) [{…}, {…}, {…}]
// 0:{x: 4, y: 5}
// 1:{x: 1, y: 2}
// 2:{x: 10, y: 3}


//Understand prototype Before class

function Car(options) {
   this.title = options.title;
}

Car.prototype.drive = function() {
   return `Master Class`;
}

const car = new Car({title: 'BelhassenMasterClassCorvette Ha Ha'});
console.log(car);


function Chevrolette(options) {
   Car.call(this, options);
   this.color = options.color;
}




Chevrolette.prototype = Object.create(Car.prototype);
Chevrolette.prototype.constructor = Chevrolette;

const chev = new Chevrolette({color: 'Gold',title: 'chnageiTTo BmW'});

console.log(chev);

//return

function osk(a) {
   if (a) {
      console.log("2");
      return 1 + 1;
   }

   console.log("4");
   return "5";
   console.log("--");
}

console.log(osk(0));
