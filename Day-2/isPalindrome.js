const isPalindrome = (str) => {
  str = str.trim().split(" ").join("").toLowerCase();
  let strNew = str.split("").reverse().join("");
  if (str === strNew) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
};

console.log(isPalindrome("Hey  yeh"));
console.log(isPalindrome("racecar"));
