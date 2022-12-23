'use strict';

(() => {
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const computerRunning = () => {
    const bot = getRandomIntInclusive(0, 2);
    let botResult = null;

    if (bot === 0) {
      botResult = 'камень';
    } else if (bot === 1) {
      botResult = 'ножницы';
    } else {
      botResult = 'бумага';
    }

    return botResult;
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,

      get finalResult() {
        alert(`Счёт: \n Компьютер: ${this.computer} \n Ваш: ${this.player}`);

        // return;
      },
    };

    return function start() {
      const playerProgress = prompt('Выберите: камень, ножницы, бумага');
      const computerProgress = computerRunning();

      if (playerProgress !== FIGURES_RUS[0] && playerProgress !== FIGURES_RUS[1] && playerProgress !== FIGURES_RUS[2]) {
        alert('Введите один из предложенных вариантов!');

        return start();
      }

      if (playerProgress === null) {
        const ask = confirm('Хотите закончить игру?');
        if (ask === true) {
          result.finalResult;
          return;
        } else {
          return start();
        }
      }

      if (
        (playerProgress === FIGURES_RUS[0] && computerProgress === FIGURES_RUS[1]) ||
        (playerProgress === FIGURES_RUS[2] && computerProgress === FIGURES_RUS[0]) ||
        (playerProgress === FIGURES_RUS[1] && computerProgress === FIGURES_RUS[2])
      ) {
        alert(`Вы выиграли! \n Вы: ${playerProgress} \n Компьютер: ${computerProgress}`);
        result.player++;

        const offer = confirm('Хотите ещё раз попробовать?');

        if (offer === true) {
          return start();
        } else {
          result.finalResult;
          return;
        }
      } else if (playerProgress === computerProgress) {
        alert(`Ничья... Победила дружба! \n Вы: ${playerProgress} \n Компьютер: ${computerProgress}`);

        const offer = confirm('Хотите ещё раз попробовать?');

        if (offer === true) {
          return start();
        } else {
          result.finalResult;
          return;
        }
      } else {
        alert(`Вы проиграли! \n Вы: ${playerProgress} \n Компьютер: ${computerProgress}`);
        result.computer++;

        const offer = confirm('Хотите ещё раз попробовать?');

        if (offer === true) {
          return start();
        } else {
          result.finalResult;
          return;
        }
      }
    };
  };

  window.RPS = game;
})();
