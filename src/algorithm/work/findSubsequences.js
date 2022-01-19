/**
 * 491. 递增子序列
 * https://leetcode-cn.com/problems/increasing-subsequences/
 */

function findSubsequences(nums) {
  const res = [];
  const set = new Set();
  const dfs = (start, cur) => {
    if (cur.length > 1) {
      if (!set.has(cur.toString())) {
        set.add(cur.toString());
        res.push(cur);
      }
    }
    for (let i = start; i < nums.length; i++) {
      if (cur.length === 0 || cur[cur.length - 1] <= nums[i]) {
        console.log(start, i, cur, nums[i]);
        dfs(i + 1, [...cur, nums[i]]);
      }
    }
  };
  dfs(0, []);
  return res;
}

/** 解法二 */
function findSubsequences(nums) {
  const res = [];
  const len = nums.length;
  const set = new Set();
  const dfs = (start, path) => {
    if (path.length > 1) {
      const str = path.toString();
      if (!set.has(str)) {
        res.push(path.slice());
        set.add(str);
      }
    }
    for (let i = start; i < len; i++) {
      const prev = path[path.length - 1];
      const cur = nums[i];
      if (path.length == 0 || prev <= cur) {
        path.push(cur);
        dfs(i + 1, path);
        path.pop();
      }
    }
  };
  dfs(0, []);
  return res;
}
