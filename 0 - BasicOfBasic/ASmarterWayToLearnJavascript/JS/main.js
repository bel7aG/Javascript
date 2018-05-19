
document.getElementById("text").innerHTML = "Belhassen Gharsallah";

//change Color
document.getElementById("myButton").onclick  = function() {
   document.getElementById("clicked").style.color = "rgb(255, 0, 0)";
}
//changeText
document.getElementById("changeText").onmouseover = function() {
      document.getElementById("textChanged").innerHTML = "<h1 style =\"color: blue;\">Text Changed</h1>";
}
//Add TEXT WHEN I CLICK TO ANY BUTTON FROM THE KEYBOARD
document.body.onkeydown = function() {
      document.getElementById("addText").innerHTML += "TextAdded";
}
//changeCircleColor-onmouseover
document.getElementById("circle").onmouseover = function() {
   document.getElementById("circle").style.background = "blue";

   document.getElementById("circle").style.display = "Block";
   document.getElementById("circle").style.opacity = "1";
}
////DasspearCircle-onmouseover
document.getElementById("circle").onmouseout = function() {
   document.getElementById("circle").style.display = "none";
}

//tekteb haja fel input ou tokhrej ménha automatiquement tetbadel
document.getElementById("someTextToUpperCase").onblur = function() {
   document.getElementById("someTextToUpperCase").value =
   document.getElementById("someTextToUpperCase").value.toUpperCase();
   document.getElementById("someTextToUpperCase").style = "font-family: batmanforeverAlternate; color: blue; letter-spacing: 10px;";
}


let str = "0 Hello , World";
//string.length

let strLength = str.length;
console.log(strLength, typeof(strLength));

   //string.replace()
let replace = str.replace("Hello", "GoodBye");
console.log(str.replace("Hello", "GoodBye"));

let replaceTwo = str.replace("aa");
console.log(`kk == ${replaceTwo, typeof(replaceTwo)}`);    //==> traja3lek  "0" w type string

let s = '';
s = s.replace('', 'Belhassen Oh yeah');
console.log(s);


   //string.charAt()  string.charCodeAt()
console.log(str.charAt(2));    //  the letter in the index 2
console.log(str.charCodeAt(0)); //  the ASCII code in the index 0

   //string.toUpperCase()  string.toLowerCase();
console.log(str.toUpperCase());//   all letter toUpperCase()
console.log(str.toLowerCase());//    all Letter toLowerCase()

   //string.big() up the size of string like the screen (t7ot string fi <b>string<big>)
console.log(str.big());
document.write("string.big() ==> " + str.big() + "<br>");

   //string.bold() string will be bold (thot string fi <b> string </b> == <strong></strong>)
console.log(str.bold());
document.write("string.bold() ==> " + str.bold() + "<br>");

   //string.italics()  ==> flop (bch tetnaha)
document.write("string.italics() ==> " + str.italics() + "<br>");

   //string.fontSize()           string.fontcolor()
document.write("string.fontSize() ==> " + str.fontsize(40).fontcolor("blue") + "<br>");

   //string.anchor("location of file") ==> thot el string fi woset balise <a href=" loation of file  "></a>
console.log(str.anchor("../CSS/master.css"));

   // Template Literal ES6 `    `
let age = `22`, name = `Belhassen`, surname = `Gharsallah`;
document.write(`My name is ${name} my surname is ${surname} my age is ${age}`);
let putTogether = "";
   //string.concat("")
console.log(putTogether = name.concat(` ${surname}`));

   // string.indexOf('')    string.lastIndexOf('')
console.log(putTogether.indexOf("hassen")); // traja3   -1  if mafamech menou el carater
console.log(putTogether.lastIndexOf(surname)); //: traja3   -1  if mafamech menou el carater tabda mélé5ér ama l'index yo93éd howa howa

//Comparing strings
let charOne = `a`;
let charTwo = `b`;
let charThree = `Draamaa`
if (charOne < charTwo) {
   console.log(`${charOne} < ${charTwo}
   because ${charTwo.charCodeAt(charTwo)} > ${charOne.charCodeAt(charOne)} `);
}

for (let i = 0; i < charThree.length; i++) {
   if(charThree[i] != `m`) {
      console.log(charThree[i]);
   }
}
