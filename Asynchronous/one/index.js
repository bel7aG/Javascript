function getSalary() {
  return 3000;
}

function subtractTax(salary) {
  return salary * 0.85;
}

function subtractRent(salary) {
  return salary - 500;
}

function getDisposalIncome() {
  let salary = getSalary();
  salary = subtractTax(salary);
  salary = subtractRent(salary);
  return salary;
}

console.log(getDisposalIncome());




















// function sync(callback) {
//   setTimeout(() => {
//     const res = deferred();
//     callback(res);
//   }, 0);
//   console.log('sync');
// }
//
// function deferred() {
//   return 'deferred';
// }
//
// sync((result) => {
//   console.log(result)
// });
