'use strict';

(() => {
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const game = () => {
    const balloons = {
      player: 5,
      computer: 5,
      computerWon: 'Победил компьютер',
      playerWon: 'Вы победили',

      get finalResult() {
        alert(`Количество шариков\n\nИгрок: ${this.player}\nКомпьютер: ${this.computer}`);
      },
    };

    return function start() {
      let computerProgress = getRandomIntInclusive(1, balloons.computer);
      const playerProgress = +prompt(`На сколько шариков хотите сыграть? \nСейчас у вас ${balloons.player} шариков.`);

      if (isNaN(playerProgress)) {
        alert('Введите пожалуйста число!');

        return start();
      }

      if (playerProgress === 0) {
        const ask = confirm('Хотите закончить игру?');

        if (ask === true) {
          alert('Удачи!');
          return;
        } else {
          return start();
        }
      }

      if (playerProgress < 1 || playerProgress > balloons.player) {
        alert(
          `Вы не можете ввести ноль или число больше вашего количества шариков! Сейчас у вас ${balloons.player} шариков.`,
        );

        return start();
      }

      if (playerProgress > balloons.computer) {
        alert('У компьютера нет такого количества шариков, введите другое число...');

        return start();
      }

      if (
        (playerProgress % 2 === 0 && computerProgress === 0) ||
        (playerProgress % 2 !== 0 && computerProgress === 1)
      ) {
        balloons.player -= playerProgress;
        balloons.computer += playerProgress;

        if (computerProgress === 0) {
          computerProgress = 'Чётное число';
        } else {
          computerProgress = 'Нечётное число';
        }

        alert(`Вы загадали: ${playerProgress}\nКомпьютер загадал: ${computerProgress}\n\n${balloons.computerWon}`);

        balloons.finalResult;

        if (balloons.computer === 10) {
          alert('Выиграл компьютер!');

          return;
        }
      } else {
        balloons.computer -= playerProgress;
        balloons.player += playerProgress;

        if (computerProgress === 0) {
          computerProgress = 'Чётное число';
        } else {
          computerProgress = 'Нечётное число';
        }

        alert(`Вы загадали: ${playerProgress}\nКомпьютер загадал: ${computerProgress}\n\n${balloons.playerWon}`);

        balloons.finalResult;

        if (balloons.player === 10) {
          alert('Вы выиграли!');

          return;
        }
      }

      return start();
    };
  };

  window.MRL = game;
})();
