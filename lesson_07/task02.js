const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getAverageValue = (allСashbox) => {
  const total = allСashbox.reduce((acc, c) => acc + c);
  return Math.floor(total / allСashbox.length);
};

console.log(getAverageValue(allСashbox));
