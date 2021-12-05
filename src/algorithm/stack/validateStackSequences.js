/**
 * 验证栈序列
 * https://leetcode-cn.com/problems/validate-stack-sequences/
 */

function validateStackSequences(pushed, popped) {
  const stack = [];
  let j = 0;
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while (stack.length && stack[stack.length - 1] == popped[j]) {
      stack.pop();
      j++;
    }
  }
  return stack.length == 0;
}
