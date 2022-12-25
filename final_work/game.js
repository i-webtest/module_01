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

      get finalResult() {
        alert(`Количество шариков\n\nИгрок: ${this.player}\nБот: ${this.computer}`);
      },
    };

    return function start() {
      const playerMove = () => {
        const randomNumber = getRandomIntInclusive(0, 1);
        const computerEven = randomNumber === 0;

        const playerProgress = +prompt(`На сколько шариков хотите сыграть?\nСейчас у вас ${balloons.player} шариков.`);

        if (playerProgress < 1 || playerProgress > balloons.player) {
          alert(
            `Вы не можете ввести ноль или число больше вашего количества шариков! Сейчас у вас ${balloons.player} шариков.`,
          );

          return playerMove();
        }

        if ((playerProgress % 2 === 0 && computerEven) || (playerProgress % 2 !== 0 && !computerEven)) {
          balloons.player -= playerProgress;
          balloons.computer += playerProgress;
          alert('Компьютер угадал!');
        } else {
          balloons.player += playerProgress;
          balloons.computer -= playerProgress;
          alert('Компьютер не угадал!');
        }
      };
    };
  };

  window.MRL = game();
})();
