const isEmptyObj = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return "Object not empty";
    }
  }
  return "Object is empty";
};

console.log(isEmptyObj({ name: "vinod" }));
console.log(isEmptyObj({}));
console.log(isEmptyObj({ keyWithNull: null }));
console.log(isEmptyObj({ keyWithUndefined: undefined }));
