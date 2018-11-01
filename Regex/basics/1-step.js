let me = /bel7aG/i; //i for case sensetive

// console.log(me);
// console.log(me.source);
me.ex
const execResult = me.exec('ES6/7/8 Developer bel7aG'); // if match then return array with
console.log(execResult);
console.log(execResult[0]);
console.log(execResult.index);
console.log(execResult.input);

      /* test return true or false */
const testResult = me.test('bEl7AG'); // true else return false and i used above is case sensetive
console.log(testResult);


    /* and now the important one match() ==> return array or null */

const myName = 'Belhassen Gharsallah bel7aG';
const matchResult = myName.match(me);
console.log(matchResult); //output same thing but the difference is the match method have the expression as arg
