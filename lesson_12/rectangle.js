'use strict';

const rectangle = {
  width: 5,
  height: 5,

  set newWidth(num) {
    this.width = +num;
  },

  set newHeight(num) {
    this.height = +num;
  },

  get perimeter() {
    return `${(this.height + this.width) * 2}см`;
  },

  get square() {
    return `${this.height * this.width}см`;
  },
};

console.log(`Периметр прямоугольника равен ${rectangle.perimeter}`);
console.log(`Площадь прямоугольника равна ${rectangle.square}`);
