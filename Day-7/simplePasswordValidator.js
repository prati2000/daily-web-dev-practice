const simplePasswordValidator = (str) => {
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasNumber = false;

  for (let char of str) {
    if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
      hasUpperCase = true;
    else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
      hasLowerCase = true;
    else if (!isNaN(Number(char))) hasNumber = true;
  }
  if (!hasLowerCase || !hasUpperCase || !hasNumber || str.length < 8)
    return false;
  return true;
};

console.log(simplePasswordValidator("hsdh7327GGJHG./"));
console.log(simplePasswordValidator("123./"));
