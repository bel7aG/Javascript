//look at that a function is (like) an object
function log(a) {
   return a;
}
let lola = log({
   name: "Belhassen",
   surname: "Gharsallah",
   isMan: "Yes"
});
console.log(typeof(log(lola))); //==> Object


//first Calss function
function logTwo(a) {
   a();
}


logTwo(function() {
   console.log("hello, Im Your first class function");
});


console.log('-------');
//this //==> window ==> Gobal Object
function a() {
   console.log(this);                  //window
   this.newVariable = 'hello';
   console.log('-----', newVariable);
}
a();

let b = function() {
   console.log(this);                  //window
}
b();

console.log('======-=-=-=-=');
let c = {
   name: 'the c object',
   log: function() {
      console.log(this);
   //   console.log(this.newVariable);  ==>//undefined ama arrow function tarefha 5ater this té3ha yémchi lél window
   }
}

c.log()  //{name: "the c object", log: ƒ}
console.log(c);



function constract(x, y) {
   this.x = x;
   this.y = y;

   this.sum = function() {
      return x + y;
   }
}

let vv = new constract(2, 2);

console.log(vv); //x: 2, y: 2, >sum:f()
console.log(vv.sum()); // 4

constract.prototype.shows = function() {
   return Math.pow(this.sum(), 2);
}
console.log(vv.shows());
