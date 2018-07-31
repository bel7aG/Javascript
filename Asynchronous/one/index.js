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

function getSalaryES6() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(3000);
    }, 1000);
  });
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
  getSalaryES6()
  .then(subtractTaxES6)
  .then(subtractRentES6)
);



getDisposalIncomeES6().then(desposable => {
  console.log(desposable);
});
