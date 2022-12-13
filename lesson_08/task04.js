const leapYear = (n, m) => {
  const isLeap = (year) => {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
      return year;
    } else {
      return false;
    }
  };
  const yearRange = [];

  for (let i = n; i <= m; i++) {
    yearRange.push(i);
  }

  const arr = [];

  yearRange.forEach((year) => {
    if (isLeap(year)) arr.push(year);
  });

  return arr;
};

leapYear(1980, 2022);
console.log(leapYear(1980, 2022));
