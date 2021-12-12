/**
 * 完全二叉树的节点个数
 * https://leetcode-cn.com/problems/count-complete-tree-nodes/
 */

function countNodes(root) {
  if (!root) return 0;
  const leftHeight = countHeight(root.left);
  const rightHeight = countHeight(root.right);
  if (leftHeight === rightHeight) {
    // 相当于 Math.pow(2, leftHeight) + countNodes(root.right)
    return (1 << leftHeight) + countNodes(root.right);
  } else {
    return (1 << rightHeight) + countNodes(root.left);
  }
}

function countHeight(root) {
  let height = 0;
  while (root) {
    height++;
    root = root.left;
  }
  return height;
}
