/**
 * 124. 二叉树中的最大路径和
 * https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/
 */

function maxPathSum(root) {
  let max = Number.MIN_SAFE_INTEGER;
  const dfs = (node) => {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    max = Math.max(max, node.val + left + right);
    const outputMax = node.val + Math.max(0, left, right);
    return outputMax > 0 ? outputMax : 0;
  };
  dfs(root);
  return max;
}
