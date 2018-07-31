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

function getDisposalIncomeES6() {
  const salaryPromise = getSalaryES6();
  const taxPromise = salaryPromise.then(salary_1 => subtractTaxES6(salary_1));
  const rentPromise = taxPromise.then(salary_2 => subtractRentES6(salary_2));
  return rentPromise;
}

getDisposalIncomeES6().then(desposable => {
  console.log(desposable);
});
