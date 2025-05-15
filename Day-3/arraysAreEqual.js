// function arraysAreEqual(arr1, arr2) {
//   let res = 0;
//   if (arr1.length !== arr2.length) return false;
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (i === j && arr1[i] === arr2[j]) {
//         res = res + 1;
//       }
//     }
//   }
//   if (res === arr1.length) {
//     return "equal";
//   } else {
//     return "NotEqual";
//   }
// }

function arraysAreEqual(arr1, arr2) {
  return arr1.every((currVal, index) => currVal === arr2[index]);
}

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysAreEqual([1, 4, 3], [1, 2, 3]));
console.log(arraysAreEqual([], []));
