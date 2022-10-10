/**
 * 无重复字符的最长子串
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 * 解题方法：滑动窗口
 */
function lengthOfLongestSubstring(s) {
  let left = 0,
    right = 0,
    res = 0;
  const len = s.length;
  const map = new Map();
  while (right < len) {
    const letter = s[right];
    right++;
    map.set(letter, (map.get(letter) || 0) + 1);
    while (map.get(letter) > 1) {
      const letter = s[left];
      left++;
      map.set(letter, map.get(letter) - 1);
    }
    res = Math.max(res, right - left);
  }
  return res;
}
