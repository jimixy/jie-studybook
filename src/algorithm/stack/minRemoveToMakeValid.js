/**
 * 移除无效的括号
 * https://leetcode-cn.com/problems/remove-invalid-parentheses/
 * 分析：
 * 1. 如果是左括号，则直接入栈
 * 2. 如果是右括号，则检查栈顶是否为左括号，如果是，则弹出栈顶元素，否则，推入待删除数组
 * 3. 将所有没有被匹配的括号置为空字符串
 */

function minRemoveToMakeValid(s) {
  // 初始化栈
  const stack = [];
  // 待删除数组
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
  const data = s.split("");
  for (let i = 0; i < filter.length; i++) {
    data[filter[i]] = "";
  }
  return data.join("");
}
