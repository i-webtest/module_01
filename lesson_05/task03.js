const getReverseString = (str) => {
  const result = str.trim()[0].toUpperCase() + str.trim().substr(1).toLowerCase();
  return alert(`Результат: ${result.split('').reverse().join('')}`);
};

getReverseString(prompt('Введите слово или фразу:'));
