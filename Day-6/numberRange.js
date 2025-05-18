const numberRange = (num1, num2) => {
  const arr = [];
  for (i = num1; i <= num2; i++) {
    arr.push(i);
  }
  return arr;
};

console.log(numberRange(-1, 6));
console.log(numberRange(3, 5));
console.log(numberRange(8, 15));
