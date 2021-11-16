/**
 * 回文子串
 * https://leetcode-cn.com/problems/palindromic-substrings/
 * 分析：
 * 1. 回文字串的中心是一个字符，因此可以从中心向两边扩散，每次扩散一个字符，
 * 2. 如果扩散的字符与中心字符相同，则继续扩散，直到扩散到不相同的字符为止，
 * 3. 如果扩散的字符与中心字符不同，则不需要继续扩散，直接返回
 * 4. 如果扩散到最后，则说明扩散到了最后，返回扩散的字符个数
 */

const countSubstrings = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    count += checkPalindrome(s, i, i);
    count += checkPalindrome(s, i, i + 1);
  }
  return count;
};

const checkPalindrome = (s, left, right) => {
  let count = 0;
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    count++;
    left--;
    right++;
  }
  return count;
};
