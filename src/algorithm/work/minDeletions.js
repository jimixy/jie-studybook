/**
 * 1647. 字符频次唯一的最小删除次数
 * https://leetcode-cn.com/problems/minimum-deletions-to-make-character-frequencies-unique/
 */

function minDeletions(s) {
  const counts = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - 97]++;
  }
  counts.sort((a, b) => b - a);
  let res = 0;
  for (let i = 1; i < counts.length; i++) {
    while (counts[i] && counts[i - 1] <= counts[i]) {
      counts[i]--;
      res++;
    }
  }
  return res;
}
