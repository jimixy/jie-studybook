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

function backspaceCompare2(S, T) {
  let s = "";
  let t = "";
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "#") {
      s = s.slice(0, -1);
    } else {
      s += S[i];
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] === "#") {
      t = t.slice(0, -1);
    } else {
      t += T[i];
    }
  }
  return s === t;
}
