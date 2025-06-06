const removeDuplicate = (arr) => {
  const newArr = new Set(arr);
  return [...newArr];
};

console.log(removeDuplicate([1, 2, 2, 3, 2, 6, 9, 8, 3]));
