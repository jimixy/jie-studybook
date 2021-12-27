/**
 * 二叉搜索树的最近公共祖先
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof/
 */

function lowestCommonAncestor(root, p, q) {
  if (!root) return null;
  if (root == p || root == q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left == null && right == null) {
    return null;
  }
  if (left && right) {
    return root;
  }
  return left || right;
}
