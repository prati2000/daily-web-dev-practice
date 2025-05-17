const startsWith = (str, subStr) => {
  // return str.startsWith(subStr);

  return str.toLowerCase().slice(0, subStr.length) === subStr.toLowerCase();
};

console.log(startsWith("hello world", "hello"));
console.log(startsWith("hello world", "hEllo"));
console.log(startsWith("hello world", "world"));
console.log(startsWith("hello world", "woRld"));
