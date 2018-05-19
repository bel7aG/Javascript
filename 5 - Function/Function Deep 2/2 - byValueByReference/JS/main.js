//By Value (primitives)
let a = 3;
let b;

b = a;
a = 2;
console.log("a = " + a + "  b = " + b);//a = 2  b = 3

// By reference (all objects (including functions))
let c = {
   greeting: 'hi'
};
let d = c;
c.greeting = 'hello'; // now i change c.grretin but d change two this is By reference
                     // they have the same memory case
                     // ==> Objects have same location in memory
console.log(c);
console.log(d);

//By reference (even as parameters)
function changeGreeting(obj) {
   obj.greeting = "sbe7 el khir";
}
changeGreeting(c);
console.log(c);
console.log(d); // 7ata d tbadlét khaterhom andhom nafs el memory address

// the equals operator sets up [new memory case (new address)]
c = {greeting: 'OK'};
console.log(c);
console.log(d);   //d matetbadelech 5ater e c khdhét new memory address

function reverseNum(num) {
   let k = num.toString();

   for(let i = num.length-1, j = 0; i >= 0; i--, j++) {
      k[j] = num[i];
   }
   num = parseInt(k);
   console.log(typeof(k));
   return num;
}
console.log(reverseNum(123));
