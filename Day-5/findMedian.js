const findMedian = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
};

console.log(findMedian([7, 4, 2, 7, 8]));
console.log(findMedian([0, -4, 2, -1, 8]));
console.log(findMedian([7, 10, 2, 8, 0, 8]));
