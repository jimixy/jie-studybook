/**
 * 全排列Ⅱ
 * https://leetcode.cn/problems/permutations-ii/description/
 */
function permuteUnique(nums) {
  nums.sort();
  const res = [];
  const dfs = (arr, path, visited) => {
    if (arr.length === path.length) {
      res.push(path.slice());
      return;
    }
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) {
        continue;
      }
      // 当前值和上一个值相同，而且上一个值已经使用用过了
      if (i > 0 && arr[i] === arr[i - 1] && visited[i - 1]) {
        continue;
      }
      path.push(arr[i]);
      visited[i] = true;
      dfs(arr, path, visited);
      visited[i] = false;
      path.pop();
    }
  };
  dfs(nums, [], []);
  return res;
}
