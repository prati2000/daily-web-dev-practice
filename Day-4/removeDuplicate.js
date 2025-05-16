//Approach 1

// const removeDuplicate = (arr) => {
//   let newArr = [...new Set(arr)];
//   return newArr;
// };

//Approach 2

// const removeDuplicate = (arr) => {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// };

//Approach 3

const removeDuplicate = (arr) => {
  return arr.reduce((acc, num) => {
    if (!acc.includes(num)) {
      acc.push(num);
    }
    return acc;
  }, []);
};

console.log(removeDuplicate([2, 4, 5, 1, 2, 4, 7, 8, 9]));
