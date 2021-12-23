/**
 * 二叉搜索树中第K小的元素
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 */

function kthSmallest(root, k) {
  const list = [];
  const dfs = (node) => {
    if (!node) return;
    dfs(node.left);
    list.push(node.val);
    dfs(node.right);
  };
  dfs(root);
  return list[k - 1];
}
