let cleanestCities = ['rades', 'caifornia', 'seattle', 'cleavland'];
/*let put = prompt('your city is one of the cleanest ?');

put = put.toLowerCase();
if (cleanestCities.indexOf(put) !== -1) {
   console.log(`${cleanestCities[cleanestCities.indexOf(put)]} it's One Of the Most Cleanest City in this world`);
} else {
   console.log(`${put} is not One of the cleanest City in the World.`);
}
*/
//String.slice( index, until el (index + 1) mté3 win théb té9éf);
let name = "Belhassen";
let firstChar = name.slice(0, 1);
console.log(firstChar); // B
let lastChar  = name.slice(name.length-1, name.length);
console.log(lastChar); // n
if (name.length > 3) {
   let threeFirstLetter = name.slice(0, 3); //
   console.log(threeFirstLetter); //Bel
} else {
   console.log("you name is under 4 letter")
}
//String.slice(él index éli bch tabda tcopy menou ou icopilek ék bé9i él kol loukén fama valeur barka f slice)
let str = "!lola";
let ola = str.slice(1);
console.log(ola); //ola
for (let i = 0; i < str.length; i++) {
   if (str.charAt(i) === "!") {
      console.log("Exclamation point found!");
   }
}
console.log(typeof(str.charCodeAt(0)) + "  " + typeof(str.charAt(0))); //number  string
