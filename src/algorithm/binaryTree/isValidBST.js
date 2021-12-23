/**
 * 合法二叉搜索树
 * https://leetcode-cn.com/problems/legal-binary-search-tree-lcci/
 */

function isValidBST(root) {
  let pre = Number.MIN_SAFE_INTEGER;
  let isSearchTree = true;
  const dfs = (node) => {
    if (!node || !isSearchTree) {
      return;
    }
    dfs(node.left);
    if (node.val <= pre) {
      isSearchTree = false;
    } else {
      pre = node.val;
    }
    dfs(node.right);
  };
  dfs(root);
  return isSearchTree;
}
