// const sumOfSqaure = (arr) => {
//   let result = 0;
//   for (i of arr) {
//     result = i * i + result;
//   }
//   return result;
// };

//Approach 2

const sumOfSqaure = (arr) => {
  return arr.reduce((acc, num) => (acc = acc + num * num), 0);
};

console.log(sumOfSqaure([1, 2, 1]));
