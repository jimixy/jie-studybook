/**
 * 最长回文串
 * https://leetcode-cn.com/problems/longest-palindrome/
 */

const longestPalindrome = function (s) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }
  let sum = 0,
    hasOdd = false;
  for (let k in map) {
    const left = map[k] % 2;
    if (left !== 0) {
      hasOdd = true;
    }
    sum += map[k] - left;
  }
  if (sum % 2 === 0 && hasOdd) {
    sum += 1;
  }
  console.log(sum);
  return sum;
};

longestPalindrome("abccccdd");
