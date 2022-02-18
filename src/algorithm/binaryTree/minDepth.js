/**
 * 二叉树的最小深度
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 */
function minDepth(root) {
  if (!root) {
    return 0;
  }
  const queue = [root];
  let level = 0;
  let minDepth = Infinity;
  while (queue.length) {
    const len = queue.length;
    level++;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      // 没有子节点
      if (!node.left && !node.right) {
        minDepth = Math.min(minDepth, level);
      }
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
  return minDepth;
}
