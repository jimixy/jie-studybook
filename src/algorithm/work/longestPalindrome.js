/**
 * 最长回文串
 * https://leetcode-cn.com/problems/longest-palindrome/
 */

const longestPalindrome = function (s) {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }
  let bothSide = 0;
  let center = 0;
  map.forEach((value) => {
    const rem = value % 2;
    bothSide += value - rem;
    if (rem === 1) {
      center = 1;
    }
  });
  return bothSide + center;
};

longestPalindrome("abccccdd");
