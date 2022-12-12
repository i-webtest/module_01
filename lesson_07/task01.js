const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];

const filter = (arr) => {
  // const newArr = arr.filter((elem) => elem !== failedStudents);
  const newArr = arr.filter((item) => !failedStudents.includes(item));
  console.log('newArr: ', newArr);
};

filter(allStudents);
