// function som() {
//    let som = 0;
//    for (let i = 0; i < arguments.length; i++) {
//       som += arguments[i];
//    }
//    console.log(som);
// }
// som(1, 2, 3, 12);

// function reverse(number) {
//    let ns = number.toString();
//    number = '';
//    for (i = ns.length-1; i >= 0; i--) {
//       number += ns[i];
//    }
//    return Number(number);
// }
// console.log(`${reverse(123)} ==> typeof ${typeof(reverse(123))}`);

let message = 'Hello World';
const createP = document.createElement('button');
const createText = document.createTextNode(message);
const body = document.querySelector('body');
createP.appendChild(createText);
body.insertBefore(createP, document.querySelector('script'));
createP.setAttribute('type', 'submit');
createP.className = 'Hello';
createP.id = 'shit';
console.log(createP);
