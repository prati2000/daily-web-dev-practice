// function findMax(arr) {
//   let temp = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > temp) {
//       temp = arr[i];
//     }
//   }
//   return temp;
// }

function findMax(arr) {
  let result = Math.max(...arr);
  return result;
}

console.log(findMax([2, 5, 7, 10]));
console.log(findMax([-2, -5, -7, -10]));
console.log(findMax([-1, -5, 7, 1]));
console.log(findMax([1]));
