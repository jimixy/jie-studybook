/**
 * 二叉树的锯齿形层序遍历
 * https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 */

function zigzagLevelOrder(root) {
  if (!root) return [];
  const res = [];
  const queue = [root];
  let flag = true;
  while (queue.length) {
    const temp = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (flag) {
        temp.push(node.val);
      } else {
        temp.unshift(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    flag = !flag;
    res.push(temp);
  }
  return res;
}
