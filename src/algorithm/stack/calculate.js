/**
 * 基本计算器 II
 * https://leetcode-cn.com/problems/basic-calculator-ii/
 */

function calculate(s) {
  s = s.trim();
  const stack = [];
  let preSign = "+";
  let num = 0;
  const n = s.length;
  for (let i = 0; i < n; ++i) {
    const val = s[i];
    // 如果是数字，则累加
    if (s[i] >= "0") {
      num = num * 10 + parseInt(s[i]);
    }
    // 如果是符号，则计算之前的数字
    if (val == "+" || val == "-" || val == "/" || val == "*" || i === n - 1) {
      switch (preSign) {
        case "+":
          stack.push(num);
          break;
        case "-":
          stack.push(-num);
          break;
        case "*":
          stack.push(stack.pop() * num);
          break;
        default:
          stack.push(parseInt(stack.pop() / num));
      }
      preSign = s[i];
      // 如果是数字结束，则清空
      num = 0;
    }
  }
  let ans = 0;
  while (stack.length) {
    ans += stack.pop();
  }
  return ans;
}

const result = calculate(" 3+5 / 2 ");
console.log(result);
