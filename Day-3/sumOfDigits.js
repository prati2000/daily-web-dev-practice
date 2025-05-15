const sumOfDigits = (num) => {
  let arr = Array.from(String(num), Number);
  return arr.reduce((acc, curr) => acc + curr, 0);
};

console.log(sumOfDigits(1234));
console.log(sumOfDigits(1786384234));
console.log(sumOfDigits(125434));
