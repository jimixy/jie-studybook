/**
 * 树的子结构
 * https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
 */

function isSubStructure(A, B) {
  if (A == null || B == null) return false;
  return dfs(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B);
}

function dfs(A, B) {
  if (B == null) {
    return true;
  }
  if (A == null) {
    return false;
  }
  return A.val == B.val && dfs(A.left, B.left) && dfs(A.right, B.right);
}
