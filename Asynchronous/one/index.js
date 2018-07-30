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
