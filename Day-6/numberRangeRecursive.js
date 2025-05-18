const numberRangeRecursive = (num1, num2) => {
  if (num1 > num2) return [];
  return [num1, ...numberRangeRecursive(num1 + 1, num2)];
};

console.log(numberRangeRecursive(2, 5));
console.log(numberRangeRecursive(-4, 5));
console.log(numberRangeRecursive(-14, -5));
