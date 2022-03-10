/**
 * 字符串相加
 * https://leetcode-cn.com/problems/add-strings/
 */

function addStrings(num1, num2) {
  let result = "";
  let carry = 0;
  let i = num1.length - 1;
  let j = num2.length - 1;
  while (i >= 0 || j >= 0) {
    let x = i >= 0 ? parseInt(num1[i--]) : 0;
    let y = j >= 0 ? parseInt(num1[j--]) : 0;
    let sum = x + y + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
  return carry ? carry + result : result;
}
