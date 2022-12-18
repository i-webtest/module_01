'use strict';

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add(name, price, quantity = 1) {
    this.items.push({
      name,
      price,
      quantity,
    });

    this.increaseCount();
  },

  increaseCount() {
    this.count = this.items.reduce((acc, item) => acc + item.quantity, 0);
  },

  calculateItemPrice() {
    return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    const str = JSON.stringify(this.items);
    console.log('str: ', str);

    console.log(cart.totalPrice);
  },
};

cart.add('MacBook Pro', 170000);
cart.add('Apple Magic Mouse', 8000);
cart.add('Apple Magic Keyboard', 12000);
cart.add('Apple Pencil', 10000);

cart.print();
