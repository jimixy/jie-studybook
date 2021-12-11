/**
 * 从前序与中序遍历序列构造二叉树
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * 分析：
 * 前序遍历：根节点在第一个位置，左子树在第一个位置的左边，右子树在第一个位置的右边
 * 中序遍历：左子树在左边，根节点在中间，右子树在右边
 */

function buildTree(preorder, inorder) {
  // 当preorder和inorder均为空的时候说明已经到了空节点
  if (!preorder.length || !inorder.length) return null;
  // 获取根节点
  const root = preorder[0];
  // 找到preorder[0]对应inorder中的位置
  const index = inorder.indexOf(preorder.shift());
  // 依据preorder的顺序来构建左右子树，必须先构造左子树，再构造右子树
  const leftTree = buildTree(preorder, inorder.slice(0, index));
  const rightTree = buildTree(preorder, inorder.slice(index + 1));
  return {
    val: root,
    left: leftTree,
    right: rightTree,
  };
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
const tree = buildTree(preorder, inorder);
console.log(tree);
