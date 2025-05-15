function calculateAverage(arr) {
  let total = arr.reduce((acc, num) => acc + num, 0);
  return total / arr.length;
}

console.log(calculateAverage([3, 5, 7, 8, 9]));
