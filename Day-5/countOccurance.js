const countOccurance = (arr) => {
  let counts = {};
  for (let i of arr) {
    counts[i] = (counts[i] || 0) + 1;
  }
  return counts;
};

console.log(countOccurance([1, 2, 3, 1, 2, 3]));
