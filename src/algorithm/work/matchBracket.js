/**
 * 20. 有效的括号
 * https://leetcode-cn.com/problems/valid-parentheses/
 */
const isValid = function (s) {
  const arr = [];
  let isMatch = true;
  const mapper = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    const isLeft = mapper[item];
    if (isLeft) {
      arr.push(item);
    } else {
      const prev = arr.pop();
      if (item != mapper[prev]) {
        isMatch = false;
      }
    }
  }
  if (arr.length) {
    isMatch = false;
  }
  console.log(isMatch);
  return isMatch;
};

isValid("[{]");
