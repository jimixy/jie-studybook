/**
 * N叉树的前序遍历
 * https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/
 */

function preorder(root) {
  const res = [];
  const dfs = (node) => {
    if (!node) return;
    if (node.val !== null) res.push(node.val);
    for (let i = 0; i < node.children.length; i++) {
      dfs(node.children[i]);
    }
  };
  dfs(root);
  return res;
}

/** 解法二 */
function preorder(root) {
  const res = [];
  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (!node) continue;
    res.push(node.val);
    for (let i = node.children.length; i >= 0; i--) {
      if (node.children[i]) stack.push(node.children[i]);
    }
  }
  return res;
}
