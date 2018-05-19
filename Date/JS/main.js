//date
let date;
const today = new Date();
console.log(today);
let birthday;
birthday = new Date('12-31-1995 11:25:00');
birthday = new Date('9/10/1981');
console.log(birthday);

date = today.getDay(); //day of week

date = today.getDate(); // day of month
date = today.getMonth() + 1;  // 0 .. 11
date = today.getFullYear();
date = today.getHours();
date = today.getMilliseconds();
date = today.getSeconds();
date = today.getTime(); //number of seconds
console.log(date);


birthday.setDate(30);
birthday.setMonth(11);
birthday.setHours(11);
birthday.setFullYear(1995);
birthday.setSeconds(44);
birthday.setMilliseconds(997);
console.log(birthday);
