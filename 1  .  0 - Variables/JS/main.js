//Variables
let stringType = "Baby";
let strObject = new String("lola");
console.log(typeof(stringType) + "\n" + typeof(strObject) + "\n\n");

let name = "Belhassen";
let lastName = "Gharsallah";
let age = 22;

console.log(`name = ${name}
lastName = ${lastName}
age = ${age}`);

//addStringWithNumber ==> String
console.log(`name + age ==> ${name + age} ${typeof(name+age)}`); // ==> retunr string

//undefined ==> variable without any value
var job, isMarried; //variable inline
console.log(`type of job = ${typeof(job)}`); // undefined
console.log(`value of job also = ${job}`); //undefined
//console.log(`  ${}`);
//Boolean
job = "teacher"; //string
isMarried = false; // Boolean
console.log(`typeof job  ${typeof(job)} and value = ${job}
typeof isMarried ${typeof(isMarried)} and value = ${isMarried}`);

age = "twenty Two"; //string
job = "web developer";
console.log(` age now is a ${age}`); //string
