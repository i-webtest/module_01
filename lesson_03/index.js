{
  const goods = 'стул';
  let quantityGoods = 5;
  const priceGoods = 3000;
  const category = 'мебель';

  const totalSum = quantityGoods * priceGoods;

  // console.log(`Наименование товара: ${goods}`);
  // console.log(`Общая стоимость: ${totalSum} рублей`);
}

{
  const goodsOther = 'ноутбук Macbook Pro';
  const categoryOther = 'компьютеры';
}

{
  const nameGoods = prompt('Наименование товара');
  const countGoods = +prompt('Количество товара');
  const categoryGoods = prompt('Категория товара');
  const priceGoods = +prompt('Цена товара');
  const totalPrice = countGoods * priceGoods;
  console.log(`Наименование товара:  ${typeof nameGoods}`);
  console.log(`Количество товара: ${typeof countGoods}`);
  console.log(`Категория товара: ${typeof categoryGoods}`);
  console.log(`Цена товара: ${typeof priceGoods}`);
  console.log(`На складе ${countGoods} единицы товара "${nameGoods}" на сумму ${totalPrice} рублей`);
}
