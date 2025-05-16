const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%^&*()_-=+[]{}<>?,./~`':";

//selectors

const upper = document.getElementById("upper-case");
const lower = document.getElementById("lower-case");
const symbol = document.getElementById("symbols");
const number = document.getElementById("numbers");
const total = document.getElementById("total-char");
const passBox = document.getElementById("pass-box");

const generateRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePassword = (password = "") => {
  if (upper.checked) {
    password += generateRandomData(upperCase);
  }
  if (lower.checked) {
    password += generateRandomData(lowerCase);
  }
  if (symbol.checked) {
    password += generateRandomData(symbolSet);
  }
  if (number.checked) {
    password += generateRandomData(numberSet);
  }
  if (password.length <= total.value) {
    return generatePassword(password);
  }
  passBox.innerText = manageLength(password, total.value);
};

const manageLength = (str, num) => {
  if (str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  } else {
    return str;
  }
};

generatePassword();

document.getElementById("btn").addEventListener("click", function () {
  generatePassword();
});
