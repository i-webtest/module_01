'use strict';

const recFunc = (arr) => {
  const number = Math.round(Math.random() * 10);

  arr.push(number);

  let sum = arr.reduce((a, b) => a + b, 0);

  if (sum < 50) {
    recFunc(arr);
  } else if (sum > 50) {
    return arr;
  }
  console.log('arr: ', arr);
};

recFunc([]);
