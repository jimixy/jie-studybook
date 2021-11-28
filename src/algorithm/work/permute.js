/**
 * 全排列
 * https://leetcode-cn.com/problems/permutations/
 */

var permute = function (nums) {
  // 结果集
  let res = [];
  // 路径
  let path = [];
  // 路径：记录在path中
  // 选择列表：nums中不存在于pah的那些元素
  // 结束条件：nums中的元素全都path中出现
  let dfs = (nums, path) => {
    if (path.length == nums.length) {
      return res.push(path.concat());
    }
    for (let i = 0; i < nums.length; i++) {
      // 排除不合法的选择
      if (path.indexOf(nums[i]) > -1) {
        continue;
      }
      // 做选择
      path.push(nums[i]);
      // 进入下层决策树
      dfs(nums, path);
      // 取消选择
      path.pop();
    }
  };
  dfs(nums, path);
  return res;
};

permute([1, 2, 3]);
