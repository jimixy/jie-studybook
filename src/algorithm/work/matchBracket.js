const input = "{]";
const left = ["(", "{", "["];
const right = [")", "}", "]"];
const arr = [];
let isRight = true;
for (let i = 0; i < input.length; i++) {
  const value = input[i];
  if (left.includes(value)) {
    arr.push(value);
  } else {
    const item = arr.pop();
    const index = right.findIndex((k) => k == value);
    if (item != left[index]) {
      isRight = false;
      break;
    }
  }
}
if (arr.length) {
  isRight = false;
}
console.log(isRight);
