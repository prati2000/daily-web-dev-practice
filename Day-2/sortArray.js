// const sortArray = (arr) => {
//   return arr.sort((a, b) => a - b);
// };

const sortArray = (arr) => {
  const newArr = [];
  for (let i of arr) {
    for (let j of arr) {
      if (arr[i] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(sortArray([2, 5, 3, 8, 10]));
