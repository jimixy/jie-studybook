/**
 * 括号生成
 * https://leetcode.cn/problems/generate-parentheses/description/
 */
function generateParenthesis(n) {
  const res = [];
  const backtrack = (left, right, temp) => {
    // 若左括号剩下的多，说明不合法？
    if (right < left) {
      return;
    }
    // 数量小于 0 肯定不合法
    if (left < 0 || right < 0) {
      return;
    }
    if (left === 0 && right === 0) {
      res.push(temp.join(""));
      return;
    }
    temp.push("(");
    backtrack(left - 1, right, temp);
    temp.pop();
    temp.push(")");
    backtrack(left, right - 1, temp);
    temp.pop();
  };
  backtrack(n, n, []);
  return res;
}
