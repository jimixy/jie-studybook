/**
 * 路径总和 II
 * https://leetcode.cn/problems/path-sum-ii/description/
 */
function pathSum(root, targetSum) {
  const res = [];
  const dfs = (root, sum, path) => {
    if (!root) return null;
    const remain = sum - root.val;
    if (!root.left && !root.right) {
      if (remain === 0) {
        res.push([...path, root.val]);
      }
      return;
    }
    path.push(root.val);
    dfs(root.left, remain, path);
    dfs(root.right, remain, path);
    path.pop();
    return root;
  };
  dfs(root, targetSum, []);
  return res;
}
