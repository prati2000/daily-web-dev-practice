const findMedian = (arr) => {
  arr.sort((a, b) => a - b);
  console.log(arr);
  let length = arr.length;
  let mid = Math.floor(arr.length / 2);

  if (length % 2 === 0) {
    return (arr[mid] + arr[mid - 1]) / 2;
  } else {
    return arr[mid];
  }
};

console.log(findMedian([4, 2, 7, 8]));
console.log(findMedian([0, -4, 2, -1, 8]));
console.log(findMedian([7, 10, 2, 8, 0, 8]));
console.log(findMedian([1, 3, 5, 7, 9, 11]));
