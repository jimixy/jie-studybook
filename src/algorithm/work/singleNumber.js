/**
 * 只出现一次的数字
 * https://leetcode-cn.com/problems/WGki4K/
 */

var singleNumber = function (nums) {
  let freq = new Map();
  nums.forEach((k) => {
    freq.set(k, (freq.get(k) || 0) + 1);
  });
  const m = freq.entries();
  for (let [k, v] of m) {
    if (v === 1) {
      return k;
    }
  }
};

singleNumber([2, 2, 3, 2]);
