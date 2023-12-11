/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const start = Date.now();
  let p = new Promise(function (res) {
    const end = Date.now();
    const difference = end - start;
    res(difference);
  });
  return p;
}

module.exports = wait;
