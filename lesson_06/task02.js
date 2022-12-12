const isPrime = (n) => {
  for (let i = 0; i < 50; i++) {
    if (i % n) continue;
    console.log(i);
  }
};

isPrime(10);
