/**
 * 二叉搜索树的第k大节点
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 */

function kthLargest(root, k) {
  let res = 0;
  const dfs = (node) => {
    if (!node) return;
    dfs(node.right);
    if (--k == 0) {
      res = node.val;
    }
    dfs(node.left);
  };
  dfs(root);
  return res;
}
