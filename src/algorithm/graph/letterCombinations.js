/**
 * 电话号码的字母组合
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/description/
 */
function letterCombinations(digits) {
  const res = [];
  if (!digits.length) {
    return res;
  }
  const maps = [
    "",
    "",
    "abc",
    "def",
    "ghi",
    "jkl",
    "mno",
    "pqrs",
    "tuv",
    "wxyz",
  ];
  const backtrack = (digits, start, temp) => {
    const len = digits.length;
    if (temp.length === digits.length) {
      // 到达回溯树底部
      res.push(temp.join(""));
      return;
    }
    for (let i = start; i < len; i++) {
      const digit = maps[digits[i]];
      for (let j = 0; j < digit.length; j++) {
        temp.push(digit[j]);
        backtrack(digits, i + 1, temp);
        temp.pop();
      }
    }
  };
  backtrack(digits, 0, []);
  return res;
}
