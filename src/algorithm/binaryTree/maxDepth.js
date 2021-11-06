/**
 * 二叉树的深度
 * https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
 */
var maxDepth1 = function (root) {
  let result = 0;
  const calculateDeep = (node, level) => {
    if (node == null) {
      result = Math.max(result, level);
      return;
    }
    calculateDeep(node.left, level + 1);
    calculateDeep(node.right, level + 1);
  };
  calculateDeep(root, 0);
  return result;
};

var maxDepth2 = function (root) {
  const calculateDeep = (node) => {
    if (node == null) {
      return 0;
    }
    return Math.max(calculateDeep(node.left), calculateDeep(node.right)) + 1;
  };
  return calculateDeep(root);
};
