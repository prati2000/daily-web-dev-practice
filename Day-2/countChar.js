//Approach-1

// function countChar(str, char) {
//   let result = 0;
//   str = str.toUpperCase();
//   char = char.toUpperCase();
//   for (let i of str) {
//     if (i === char) result++;
//   }
//   return result;
// }

// console.log(countChar("MissIssippiiii", "i"));

//Approach-2

function countChar(str, char) {
  str = str.toLowerCase();
  char = char.toLowerCase();
  totalCount = str.split("").reduce((acc, currchar) => {
    if (char === currchar) {
      acc++;
    }
    return acc;
  }, 0);
  return totalCount;
}
console.log(countChar("MissIssippi", "i"));
