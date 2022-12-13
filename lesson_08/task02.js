const getRandomNumber = (el, n, m) => {
  const elements = [];
  for (let i = 0; i < el; i++) {
    elements.push(Math.ceil(Math.random() * (m - n) + n));
  }
  return elements;
};
getRandomNumber(5, 1, 100);

console.log(getRandomNumber(5, 1, 100));
