const priceEur = +prompt('Введите стоимость покупки в евро');
const usd = 64;
const eur = usd / 2;

const converter = () => {
  let result = '';
  result = priceEur * eur;
  alert(`Результат в рублях: ${result}`);
};

converter();
