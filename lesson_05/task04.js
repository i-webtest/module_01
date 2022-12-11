const countGoods = 11;
const totalAmountBasket = 40000;
const fixBasket = 30000;
const percent = 3;
const excessAmountPercent = 15;
const promoCode = prompt('Введите промокод');
const promoCode2 = 'G3H2Z1';

const calculate = (total, num, promo) => {
  total = totalAmountBasket;
  num = countGoods;

  if (num > 10) {
    total = (totalAmountBasket / 100) * percent;
    console.log(`Вам предоставляется скидка 3% ко всей сумме: ${total}`);
  } else if (total > 30000) {
    total = ((totalAmountBasket - fixBasket) / 100) * excessAmountPercent;
    console.log(`Вам предоставляется скидка 15% к сумме превышения: ${total}`);
  } else if (promo === 'METHED') {
    total = (total / 100) * 10;
    console.log(`Вам предоставляется скидка 10%: ${total}`);
  } else if (promo === 'G3H2Z1' && total > 2000) {
    console.log(`Вам предоставляется скидка 500 рублей: ${total}`);
  }
};

calculate();
