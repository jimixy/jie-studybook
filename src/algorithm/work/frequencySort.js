/**
 * 根据字符出现频率排序
 * https://leetcode-cn.com/problems/sort-characters-by-frequency/
 */

function frequencySort(s) {
  const map = s
    .split("")
    .reduce(
      (sum, item) => (sum.set(item, (sum.get(item) || 0) + 1), sum),
      new Map()
    );
  return [...map]
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => key.repeat(value))
    .join("");
}

/** 解法二 */
function frequencySort(s) {
  let res = "";
  const map = new Map();
  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }
  const countArr = [...map].sort((a, b) => b[1] - a[1]);
  for (const [char, count] of countArr) {
    res += char.repeat(count);
  }
  return res;
}
