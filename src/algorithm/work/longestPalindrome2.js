/**
 * 最长回文子串
 * https://leetcode-cn.com/problems/longest-palindrome/
 */

function longestPalindrome(s) {
  let res = "";
  const len = s.length;
  for (let i = 0; i < len; i++) {
    // 找到s[i]为中心的最长回文串
    const s1 = palindrome(s, i, i);
    // 找到s[i]和s[i+1]为中心的最长回文串
    const s2 = palindrome(s, i, i + 1);
    res = res.length > s1.length ? res : s1;
    res = res.length > s2.length ? res : s2;
  }
  return res;
}

const palindrome = (s, l, r) => {
  const len = s.length;
  while (l >= 0 && r < len && s[l] === s[r]) {
    l--;
    r++;
  }
  return s.substring(l + 1, r);
};

console.log(2342, longestPalindrome("abccccdd"));
