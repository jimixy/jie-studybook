/**
 * 39. 组合总和
 * https://leetcode-cn.com/problems/combination-sum/
 */

function combinationSum(candidates, target) {
  const arr = [];
  dfs(candidates, 0, target, []);
  return arr;
  function dfs(group, index, target, temp) {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      arr.push(temp.slice());
      return;
    }
    for (let i = index; i < group.length; i++) {
      temp.push(group[i]);
      dfs(group, i, target - group[i], temp);
      temp.pop();
    }
  }
}
