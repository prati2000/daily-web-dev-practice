const repeatString = (str, num) => {
  //   if (num === 1) {
  //     return str;
  //   } else if (num <= 0) {
  //     return "";
  //   } else {
  //     return str + repeatString(str, num - 1);
  //   }

  return num > 0 ? str.repeat(num) : str;
};

console.log(repeatString("abc ", 5));
console.log(repeatString("pari ", 3));
