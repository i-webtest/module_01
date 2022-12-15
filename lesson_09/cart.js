const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  getTotalPrice() {
    return this.totalPrice;
  },

  add(name, price, quantity = 1) {
    this.items.push({
      name,
      price,
      quantity,
    });

    this.calculateItemPrice();
    this.increaseCount();
  },

  increaseCount() {
    this.count = this.items.reduce((acc, item) => acc + item.quantity, 0);
  },

  calculateItemPrice() {
    this.totalPrice += this.items.reduce((acc, item) => item.price * item.quantity, 0);
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    const str = JSON.stringify(this.items);
    console.log('str: ', str);

    console.log(this.getTotalPrice());
  },
};

cart.add('MacBook Pro', 170000);
cart.add('Apple Magic Mouse', 8000);
cart.add('Apple Magic Keyboard', 12000);
cart.add('Apple Pencil', 10000);

cart.print();
