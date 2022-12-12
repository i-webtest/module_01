const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

const addPrefix = (arr, pref) => {
  arr = [];
  console.log('arr: ', arr);
  pref = 'Mr ';

  for (let i = 0; i < names.length; i++) {
    arr[i] = pref + names[i];
  }
};

addPrefix(names, 'Mr');
