let name = ["Belhassen", "Maher", "John", 'lola', "dumbban", 1950, false];
console.log(name[0]); //John
name[0] = 1995;
console.log(name[0]); //1995

let frontEnd = "frontEndDeveloper";
let dumbbaN = ["a", "b", "c", "d"];
let developerOf = ["HTML5", "CSS3/SASS","JavascriptES6", "React"];

// Array.push(element);
let addLastElement = dumbbaN.push("Master");
console.log(dumbbaN);
//Array.pop();
let deleteLastElement = dumbbaN.pop();
console.log(`Delete last element in the Table :${deleteLastElement}`);

//Array.unshift(element) add element in the first case (indexOf == 0)
dumbbaN.unshift("firstElementinMyTable");
console.log(dumbbaN);
//Array.shift(element) delete element in the first case (indexOf == 0)
dumbbaN.shift("firstElementinMyTable");
console.log(dumbbaN);

//Array.concat(Table1, table2, ...)
let dumbbaNPlusdeveloperOf = dumbbaN.concat(developerOf, name);
console.log(`addToTable ==>${dumbbaNPlusdeveloperOf}`);
let lengthOfConcatedTabel = dumbbaNPlusdeveloperOf.length;
console.log(lengthOfConcatedTabel);

//Array.indexOf(element); ==>false si == -1
console.log(dumbbaN);
if (dumbbaN.indexOf("Belhassen")) {
   console.log(`Belhassen maoujoud fi dumbbaN wel indexOf mte3ou ==> ${dumbbaN.indexOf("Belhassen")} `);
} else {
   console.log("mouch Maoujoud");
}
//Array.lastIndexOf(element) ==>false si == -1
if (dumbbaN.lastIndexOf("Belhassen")) {
   console.log(`Belhassen maoujoud fi dumbbaN wel lastIndexOf mte3ou ==> ${dumbbaN.lastIndexOf("Belhassen")} `);
} else {
   console.log("mouch Maoujoud");
}

//Array.reverse() ==> té9léb tableau
dumbbaN.reverse();
console.log(dumbbaN);

dumbbaN.unshift("a");
for(let i = 0; i < dumbbaN.length; i++) {
   if(dumbbaN.indexOf('a') == dumbbaN.lastIndexOf('a')) {
      console.log("fama kén 'a' barka f tableau" +  "  indexOf  " + dumbbaN.indexOf('a') + "  lastIndexOf" + dumbbaN.lastIndexOf('a'));
   } else {
      console.log("fama akther men 'a' f tableau " + "  indexOf" +  dumbbaN.indexOf('a') + "  lastIndexOf"  +dumbbaN.lastIndexOf('a'));
   }
}


//Array.isArray()
console.log(Array.isArray(dumbbaN)); //==> true

//Array.every(callBack) ==> Boolean traja3lek true wla false ou enty wel condition
function isBelowThreshold(currentValue) {
  return currentValue < 39;
}
var array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold)); //false 5ater array1[2] == 39

//Array.some(callBack) ==> loukén 3al9lila un element condition mte3ou s7i7a
function isBiggerThan10(element, index, array) {
  return element > 10;
}
let TOne = [2, 5, 8, 1, 4].some(isBiggerThan10);  // false
let TTwo = [12, 5, 8, 1, 4].some(isBiggerThan10); // true
console.log("TOne ==> " + TOne + "    TTwo ==>" + TTwo);


//Array.find(callBack) ==> The find() method returns the value of the first element in the array
//that satisfies the provided testing function. Otherwise undefined is returned.
let findInTable = [10, 'a', 6, 2, 0, -100, 15];
findInTable.find((element) => element < 10 );
console.log(findInTable.find( (element) => element < 10 )); //arrow function
                  //Or
let k = findInTable.find(function(element) {
   return element < -100;
});
console.log(k);

//The findIndex() method returns the index of the first element in the array that satisfies
// the provided testing function. Otherwise -1 is returned.
let findIndexInTable = [10, 2, 40, "a", -2, "a", "a"];
let fIndex = findIndexInTable.findIndex((element) => element == "a");
console.log(fIndex);


let vivi = [];
for (let i = 0; i < 5; i++) {
   vivi[i] = i+1;
}
console.log(vivi);
vivi.push("lastCase");
console.log(vivi);
vivi.pop();
console.log(vivi);
let L = vivi.length;
console.log(L);
let findMe = vivi.find(element => element > 3);
console.log(findMe);
let findMyIndex = vivi.findIndex(element => element > 3);
let findEveryCase = vivi.every(element => element <= 5);
console.log(findEveryCase);
let findSomeCase = vivi.some(element => element < 1);
console.log(findSomeCase);
console.log(Array.isArray(vivi));
vivi.unshift("HollySHit");
console.log(vivi);

vivi.shift("HollySHit");
console.log(vivi);

//deep
//array can contain all type : number , boolean, function, undefined, string, Object
let arr = [
1,
false,
{
   name: "belhassen",
   surname: 'Gharsallah'
},
function(name) {
   let greeting = 'Hello';
   console.log(greeting + name);
},
"Hello"
];
//Run the functions inside the array
//ktebet array[2] 5ater el name mawjoud fel objet eli él index mte3ou 2
arr[3](" " + arr[2].name + " " + arr[2].surname);
arr[3](" World !!");

console.log('-------------------------');

let okk = ['Behassen', 'is', 'the', 1996];
console.log(okk);
okk.push('Be humble', 'kendrick lamar', 12);
console.log(okk);
okk.pop();
okk.pop();
console.log(okk);
okk.unshift("CaseOne");
console.log(okk);
okk.shift(okk);
console.log(okk);
let lola = okk.splice(0, 3);
console.log(lola);
lola.push('OH', 'Baby');
for (let i = 0; i < lola.length; i++) {
   if (lola[i].indexOf('B') !== -1) {
      console.log(lola[i]);
   }
}
