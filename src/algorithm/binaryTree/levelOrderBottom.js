/**
 * 二叉树的层序遍历 II
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 */

function levelOrderBottom(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  while (queue.length) {
    const temp = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      temp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    res.unshift(temp);
  }
  return res;
}
