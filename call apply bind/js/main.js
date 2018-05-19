
let ohYeah = {
   a: 1,
   b: 'abc',
   c: function() {
      console.log(this.a); // 1
      console.log(self.a); //undefined
      console.log(this); // ohYeah{a: 1, b: "abc", c: ƒ}
      console.log(self); //window
   }
};

ohYeah.c();


console.log(self === this);

let objOne = {
   num: 2
};
let objTwo = {
   num: 10
};


let funcOne = function(...arg){
   let S = 0;
   for (let i = 0; i < arg.length; i++) {
      S += arg[i];
   }
   return this.num + S;
}



console.log('---------------------');
//call
let call = funcOne.call(objOne, 1, 2, 3);
console.log('function.call(objOne, 1, 2, 3) = ' + call);

//lfare9 mabinethom énou él .call thot féha arguments kima théb ama él apply lézmék thothom fi tableau watch this example

console.log('---------------------');
//apply

let apply = funcOne.apply(objOne, [1, 2, 3]);
console.log('function.apply(objOne, [1, 2, 3]) = ' + apply);
console.log(typeof(funcOne.apply(objOne, [1, '10', 3, 4])));

console.log('---------------------');


//bind  ==> traja3 function ou thot féha kén él objet eli hachtek bih ou ki thotha fi variable iwali el variable adheka function ou fi wostou el valeur té3 él object
bind = funcOne.bind(objTwo);
console.log(bind + " " + typeof(bind));
console.log(bind(1, 2, 3));                   //[[BoundThis]]:Object
                                                   // num: 10
                                                   // __proto__:Object
                                                         // .....
                                             //

// ==> bound ma3nétha l fonction lézém a3léha traja3 él valeur eli maoujoud fel objTwo (10)



console.log('----------arrowfunction-----------');

let getA = a => a;
console.log(getA(2));

let square = a => Math.pow(a, 2);
console.log(square(5));

let a = 4;
let trinta = () => {
   for (let i = 0; i < Math.pow(a, 2); i++) {
      console.log(Math.pow(a, 3));
   }
   return a;
};
console.log(trinta());

//with anonymous function i need to set that to this because setInterval ta3réf kén éi fi wosétha

// console.log('----------arrowfunction-----------');
// let xOne = function() {
//    let that = this;
//    this.val = 1;
//    setInterval(function() {
//       that.val++;
//       console.log(that.val);
//    }, 3000);
// };
// let xx = new xOne();
// xx;


//with arrow function i dont need to set that to this he know this arrow function ta3réf é this éli héya él function éli fi wosétha setInterval

// let xTwo = function() {
//
//    this.val = 1122;
//
//    setInterval(() => {
//       this.val--;
//       console.log(this.val);
//    }, 1150);
// }
//xTwo();

//spread Operator

console.log('--------spread operator----------')


let sumOne = function sum(i) {
   console.log(arguments[i]);
}
sumOne(2, 2, 3)

// ...n   is an array. witth arrow function malézémnich nhot argument nékhd&m bél ES6 Syntax éli howa   ...[array]
let sumTwo = (...A) => {
   console.log(A[0]);
}
sumTwo(999999999999, 2, 3);


let aOne = [1, 2, 3];
let bOne = [4, 5, 6];
console.log(aOne);
console.log(bOne);
aOne.push(...bOne);
console.log(aOne);

let other = ['Student', 'iset Rades'];
let my = ['Belhassen', 'Web Developer', '1996', ...other, 'love with Javascript'];
console.log(my);



console.log('--------new Promise----------')

let promiseToCleanTheRoom = new Promise(function(resolve, reject) {
   let isClean = false;
   if (isClean) {
      resolve('Cleaaan');
   } else {
      reject('not Clean Sorry mama');
   }
});
console.log(typeof(promiseToCleanTheRoom)); //object

promiseToCleanTheRoom.then(
   function(fromResolve){
      console.log(`the room is ${fromResolve}`);
   }).catch(
      function(fromRejecte) {
         console.log(`the room is ${fromRejecte}`)  ;
});


let cleanRoom = () => new Promise( (resolve, reject) => resolve('Clean The roomm'));

let removeGarbage = (p) => new Promise( (resolve, reject) => resolve('remove Garbage') );

let winIceCream = (p) => new Promise( (resolve, reject) => resolve('WON ICE Cream Baby'));

cleanRoom().then( (fromResolve) => { console.log('resolve the room') }).catch( (fromReject) => { console.log('Good Job Bruh the room it is ') });
