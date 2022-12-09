{
  const rain = Math.random() * 1;
  console.log('rain: ', Math.round(rain));
  if (Math.round(rain) === 1) {
    alert('Пошёл дождь. Возьмите зонт!');
  } else if (Math.round(rain) === 0) {
    alert('Дождя нет!');
  }
}

{
  const result = () => {
    let mathematics = +prompt('Введите кол-во баллов по математике:');
    let rus = +prompt('Введите кол-во баллов по русскому языку:');
    let informatics = +prompt('Введите кол-во баллов по информатике:');
    const minPoints = 265;
    const sum = mathematics + rus + informatics;

    if (sum >= minPoints) {
      alert('Поздравляю, вы поступили на бюджет!');
    } else {
      alert('Вы поступили на платной основе!');
    }
  };

  result();
}

{
  const getSomeCash = () => {
    let cash = +prompt('Сколько денег вы хотите снять?');

    if (cash % 100 === 0) {
      alert('Возьмите ваши деньги!');
    } else if (isNaN(cash)) {
      alert('Введите число!');
      return getSomeCash();
    } else {
      alert('Некорректная сумма! К сожалению в банкомате имеются купюры только по 100 рублей...');
      return getSomeCash();
    }
  };

  getSomeCash();
}
