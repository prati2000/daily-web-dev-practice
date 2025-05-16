const countVowels = (str) => {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  for (let char of arr) {
    if (vowels.includes(char.toLowerCase())) count++;
  }
  return count;
};

console.log(countVowels("hellooo WOorld!"));
