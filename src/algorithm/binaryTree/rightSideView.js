/**
 * 二叉树的右视图
 * https://leetcode-cn.com/problems/binary-tree-right-side-view/
 */

/** 深度遍历  */
function rightSideView(root) {
  const list = [];
  const dfs = (node, level) => {
    if (!node) return;
    if (list.length === level) {
      list.push(node.val);
    }
    level++;
    dfs(node.right, level);
    dfs(node.left, level);
  };
  dfs(root, 0);
  return list;
}

function rightSideView(root) {
  if (!root) return [];
  const queue = [root];
  const list = [];
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const node = queue.shift();
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      if (i == size - 1) {
        list.push(node.val);
      }
    }
  }
  return list;
}
