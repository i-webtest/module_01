const getRandomNumber = (el) => {
  const elements = [];
  for (let i = 0; i < el; i++) {
    elements.push(Math.ceil(Math.random() * 100));
  }
  return elements;
};
getRandomNumber(5);

console.log(getRandomNumber(5));
