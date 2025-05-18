const truncateString = (str, num) => {
  //   let newStr = "";
  //   for (let i = 0; i < str.length; i++) {
  //     if (i < num) {
  //       newStr = newStr + str.charAt(i);
  //     }
  //   }
  //   return newStr + "...";
  if (num <= 0) {
    return str;
  } else if (str.length > 0) {
    return str.slice(0, num) + "...";
  }
};

console.log(truncateString("Hey, My name is Pratishtha Singh", 13));
