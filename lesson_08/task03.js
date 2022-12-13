const getRandomNumber = (elem, n, m, even) => {
  const elements = [];

  for (let i = 0; i < elem; i++) {
    elements.push(Math.ceil(Math.random() * (m - n) + n));
  }

  if (even === 'even') {
    return elements.filter((e) => e % 2 === 0);
  } else {
    return elements.filter((e) => e % 2 !== 0);
  }

  // return elements;
};
getRandomNumber(5, 1, 100, 'even');

console.log(getRandomNumber(5, 1, 100, 'even'));
