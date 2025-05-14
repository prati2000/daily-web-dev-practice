let str = "my name is panda";

//Approach-1

// function generateHash() {
//   if (str.trim().length === 0) {
//     return false;
//   }
//   let strArr = str.trim().split(" ");
//   let result = "";
//   for (let i in strArr) {
//     let word = strArr[i];
//     if (word.length > 0) {
//       let capitalized = word[0].toUpperCase() + word.slice(1);
//       result += capitalized;
//     }
//   }
//   return "#" + result;
// }

// console.log(generateHash(str));

// Approach-2

function generateHash(str) {
  if (str.trim().length === 0) {
    return false;
  }
  str = str.trim().split(" ");
  str = str.map((elem) => elem.replace(elem[0], elem[0].toUpperCase()));
  str = "#" + str.join("");
  //   console.log(str);
  return str;
}

console.log(generateHash(str));
