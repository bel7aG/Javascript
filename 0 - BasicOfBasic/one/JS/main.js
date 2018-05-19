document.write(Number.MAX_VALUE + "<br>");
document.write(Number.MIN_VALUE + "<br>");

firstString = "Belhassen";
secondString = "Gharsallah";
content = firstString + secondString;
document.write("<br>" + content);

document.write("<br>length of string = esem.length tatik length of string = &nbsp&nbsp&nbsp&nbsp" + content.length);
document.write("<br> copier esem.substring(mn ana position, él fin) &nbsp&nbsp&nbsp&nbsp&nbsp" + content.substring(3, 9));

document.write("<br>" + content.charAt(content.length-1))
document.write("<br><strong>indexOf('l') &nbsp : " + content.indexOf('l') +"</strong>")

document.write("<br><strong>lastIndexOf('l') &nbsp : " + content.lastIndexOf('l') +"</strong><br><br><br>")

var string_number = "5";
var number = 10;
total = number + string_number;
multiple = string_number * number;
document.write("<br><strong> 10 + \"5\" number + string_number=  &nbsp : " + total +"</strong><br>")

multiple = string_number * number;
document.write("<br><strong> 10 * \"5\" =  &nbsp : number * string_number = " + multiple +"</strong><br>")

total = number + Number(string_number - 3);
document.write("<br><strong> 10 + \"5\" convert String to Number with ==> Number(string_number - 3)=  &nbsp : " + total +"</strong><br>")

var number_to_string = String(number);
document.write("<br><strong>convert Number to string with ==> String(number)=  &nbsp :  " + (String(number) + String(number)) +"</strong><br>")

document.write("<br><strong> 10  number &nbsp  + 10 number: " + (number + number) +"</strong><br>")
document.write("<br><strong> 10 number + String(number)  =  " + (number + String(number)) +"</strong><br>")


var float_var = 3.1414141414141414; //16 noumrou ba3d el facel
document.write("<br><br><br>float_var = " + float_var);

var float_str = float_var.toFixed(5); //   var.toFixed(3dad lar9am eli bch yodhehroulek bad el fasel) ==> ou traja3 string;
document.write("<br><strong>variable.toFixed = &nbsp&nbsp&nbsp" + float_str + " Just 5 arçam ba3d el facel var float_str = float_var.toFixed(5) ==> traja3 string<strong>");

document.write("<br>typeof(float_var) = &nbsp" + typeof(float_var));
document.write("<br>typeof(float_str) = &nbsp" + typeof(float_str));


document.write("<br>parseInt(float_var) &nbsp" + parseInt(float_var));// tconverti el float lel intger
document.write("<br>parseInt(float_var) &nbsp" + parseInt(float_str));

//boolean
bool_var = Boolean(23);

document.write("<br><br><br>Boolean(23) is " + bool_var);   //true
document.write("<br>Boolean(-1) is " + Boolean(-1));        //true

document.write("<br>Boolean(0) is " + Boolean(0));          //false
document.write("<br>Boolean(NaN) is " + Boolean(NaN));      //false


//compare

document.write("<br><br><br><strong style=\" color : red; font-size: 2em; \">compare <>==!=<=>=</strong><br>");
var one = 5;
var two = 10;

document.write("<strong> is 5 > 10" +(one > two) + "<br>");
document.write("<strong> is 5 >= 10" +(one >= two) + "<br>");
document.write("<strong> is 5 < 10" +(one < two) + "<br>");
document.write("<strong> is 5 <= 10" +(one <= two) + "<br>");
document.write("<strong> is 5 == 10" +(one == two) + "<br>");
document.write("<strong> is 5 != 10" +(one != two) + "<br>");

var saben = new Array("Have Fuck", "SonOfBitch", 4, 3);

document.write("T[0]" + saben[0] + "<br><br>");


for (var i = 0; i < saben.length; i++) {
    document.write("<br> T[" + (i+1) + "] = "  + saben[i] + "&nbsp&nbsp&nbsp <strong style=\" color: blue; font-size: 1.5em; text-decoration: underline; \">" + typeof(saben[i]) + "</strong>");
}

gentelman = new Array('Hellow ', 2, 4, new Array('a', 'b', 'c', 'd'));
for(i in gentelman){
    if(i<3){
        document.write("<br>T["+ i + "] = &nbsp&nbsp&nbsp" + gentelman[i] + "&nbsp&nbsp" + typeof(gentelman[i]));
    }else{
        document.write("<br>T["+ i + "] = &nbsp&nbsp&nbsp" + gentelman[i] + " &nbsp&nbsp&nbsp fih ==> &nbsp&nbsp" + gentelman[i][0] + gentelman[i][1] + gentelman[i][2] + gentelman[i][3] + "&nbsp&nbsp" + typeof(gentelman[i]));
    }

}

// function

function addToNumber(numOne, numTwo){
    var S = numOne + numTwo;
    return S;
}

document.write("<br>" + addToNumber(5, 105));
