/**
 * 比较含退格的字符串
 * https://leetcode-cn.com/problems/backspace-string-compare/
 */

var backspaceCompare = function (s, t) {
  const str1 = [];
  const str2 = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      str1.pop();
    } else {
      str1.push(s[i]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      str2.pop();
    } else {
      str2.push(t[i]);
    }
  }
  return str1.join("") === str2.join("");
};
