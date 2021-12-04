/**
 * 移除无效的括号
 * https://leetcode-cn.com/problems/remove-invalid-parentheses/
 */

function minRemoveToMakeValid(s) {
  const stack = [];
  const res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(i);
    } else if (s[i] === ")") {
      if (stack.length) {
        stack.pop();
      } else {
        res.push(i);
      }
    }
  }
  const filter = stack.concat(res);
  const res = s.split("");
  for (let i = 0; i < filter.length; i++) {
    res[filter[i]] = "";
  }
  return res.join("");
}
