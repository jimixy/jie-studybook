/**
 * 删除最外层的括号
 * https://leetcode-cn.com/problems/remove-outermost-parentheses/
 */

var removeOuterParentheses = function (s) {
  let res = "";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ")") {
      stack.pop();
    }
    if (stack.length) {
      res += s[i];
    }
    if (s[i] == "(") {
      stack.push("(");
    }
  }
  return res;
};

const result = removeOuterParentheses("(()())(())");
