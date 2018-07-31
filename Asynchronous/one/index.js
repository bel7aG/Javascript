            /*1*/
/*
function sync(callback) {
  setTimeout(() => {
    const res = deferred();
    callback(res);
  }, 0);
  console.log('sync');
}

function deferred() {
  return 'deferred';
}

sync((result) => {
  console.log(result)
});
*/

            /*2*/
/*
function getSalaryOld(callback) {
  setTimeout(() => {
    callback(3000);
  }, 1000);
}

function subtractTaxOld(salary, callback) {
  setTimeout(() => {
    callback(salary * 0.85);
  }, 1000);
}

function subtractRentOld(salary, callback) {
  setTimeout(() => {
    callback(salary - 500);
  }, 1000);
}

function getDisposalIncomeOld(callback) {
  getSalaryOld(salary_1 => {
    subtractTaxOld(salary_1, salary_2 => {
      subtractRentOld(salary_2, salary_3 => {
        callback(salary_3);
      });
    });
  });
}

getDisposalIncomeOld(disposable => {
  console.log(disposable);
});
*/
        /*3*/

function getSalaryES6(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary);
    }, 1000);
  });
}

function getSalarySum() {
  return Promise.all([
    getSalaryES6(1000),
    getSalaryES6(760),
    getSalaryES6(950),
    getSalaryES6(4000)
  ]).then(salaries => salaries.reduce((prev, cur) => prev + cur, 0));
}

function subtractTaxES6(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary * 0.75);
    }, 1000);
  });
}

function subtractRentES6(salary) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(salary - 500);
    }, 1000);
  });
}
const getDisposalIncomeES6 = () => (
  getSalarySum()
  .then(subtractTaxES6)
  .then(subtractRentES6)
);



getDisposalIncomeES6().then(desposable => {
  console.log(desposable);
});
