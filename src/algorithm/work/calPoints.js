/**
 * 棒球比赛
 * https://leetcode-cn.com/problems/baseball-game/
 */

function calPoints(ops) {
  const arr = [];
  let sum = 0;
  for (let i = 0; i < ops.length; i++) {
    let val = ops[i];
    if (val === "+") {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    } else if (val === "D") {
      arr.push(arr[arr.length - 1] * 2);
    } else if (val === "C") {
      arr.pop();
    } else {
      arr.push(+val);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
