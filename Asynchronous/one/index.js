function getSalary(callback) {
  setTimeout(() => {
    callback(3000);
  }, 1000);
}

function subtractTax(salary, callback) {
  setTimeout(() => {
    callback(salary * 0.85);
  }, 1000);
}

function subtractRent(salary, callback) {
  setTimeout(() => {
    callback(salary - 500);
  }, 1000);
}

function getDisposalIncome(callback) {
  getSalary((salary) => {
    subtractTax(salary, salary => {
      subtractRent(salary, salary => {
        callback(salary);
      });
    });
  });
}

getDisposalIncome((salary) => {
  console.log(salary);
});




















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
