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
  let hasTarget = false;
  const def = (node, sum) => {
    if (node) {
      if (!node.left && !node.right) {
        if (sum + node.val === targetSum) {
          hasTarget = true;
        }
      }
      if (node.left) def(node.left, sum + node.val);
      if (node.right) def(node.right, sum + node.val);
    }
  };
  def(root, 0);
  return hasTarget;
}
