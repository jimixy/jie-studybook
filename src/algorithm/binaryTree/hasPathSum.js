/**
 * 路径总和
 * https://leetcode-cn.com/problems/path-sum/
 */

function hasPathSum(root, sum) {
  if (root === null) return false;
  if (root.left === null && root.right === null) return root.val === sum;
  return (
    hasPathSum(root.left, sum - root.val) ||
    hasPathSum(root.right, sum - root.val)
  );
}

// 解法二
function hasPathSum(root, targetSum) {
  if (!root) return false;
  let hasTarget = false;
  const def = (node, sum) => {
    if (!node) return null;
    const total = sum + node.val;
    if (!node.left && !node.right) {
      if (total === targetSum) {
        hasTarget = true;
      }
    }
    def(node.left, total);
    def(node.right, total);
  };
  def(root, 0);
  return hasTarget;
}
