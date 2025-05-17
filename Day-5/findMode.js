const findMode = (arr) => {
  let count = {};
  let maxNum = 0;
  let mode;
  for (let i of arr) {
    count[i] = (count[i] || 0) + 1;

    if (count[i] > maxNum) {
      maxNum = count[i];
      mode = i;
    }
  }
  return `Occurance of ${mode} is ${maxNum} times`;
};

console.log(findMode([1, 2, 3, 4, 2, 3, 2]));
