// A paragraph typically includes a topic sentence (which introduces the main idea), supporting sentences that elaborate on the topic sentence, and a concluding sentence that summarizes the paragraph's main point.

let str = "A paragraph typically includes a topic sentence ";

//Approach-1

// function findLongestWord(str) {
//   if (str.trim().length === 0) {
//     return false;
//   }
//   let newArr = str.split(" ");
//   let length = 0;
//   let longestLength = 0;
//   let result = "";
//   for (let char of newArr) {
//     length = char.length;

//     if (longestLength <= length) {
//       longestLength = length;
//       length = 0;
//       result = char;
//     }
//   }
//   return result;
// }

// console.log(findLongestWord(str));

//Approach -2

function findLongestWord(str) {
  let strArr = str.trim().split(" ");
  strArr.sort((a, b) => b.length - a.length);
  return strArr[0];
}

console.log(findLongestWord(str));
