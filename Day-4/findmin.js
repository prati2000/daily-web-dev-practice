//Approach 1
// const findMin = (arr) => {
//   let newArr = arr.sort((a, b) => a - b);
//   console.log(newArr);
//   return newArr[0];
// };

//Approach 2

const findMin = (arr) => {
  let num = 0;
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) num = arr[i];
    }
  return num;
};

console.log(findMin([2, 4, 7, 0]));
console.log(findMin([-1, -4, 0, -19]));
