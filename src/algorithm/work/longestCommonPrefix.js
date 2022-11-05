/**
 * 最长公共前缀
 * https://leetcode.cn/problems/longest-common-prefix/description/
 * */

var longestCommonPrefix = function (strs) {
  const m = strs.length;
  const n = strs[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < m; j++) {
      const current = strs[j];
      const prev = strs[j - 1];
      if (i > current.length || i > prev.length || current[i] !== prev[i]) {
        return strs[j].substring(0, i);
      }
    }
  }
  return strs[0];
};
