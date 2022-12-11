const getString = (str) => {
  return alert(`Результат: ${str.trim()[0].toUpperCase() + str.trim().substr(1).toLowerCase()}`);
};

getString(prompt('Введите слово или фразу:'));
