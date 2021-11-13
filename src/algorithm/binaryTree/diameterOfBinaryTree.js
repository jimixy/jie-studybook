/**
 * 二叉树的直径
 * https://leetcode-cn.com/problems/diameter-of-binary-tree/
 */

const diameterOfBinaryTree = function (root) {
  let max = 0;
  function dfs(node) {
    if (!node) return 0;
    const left = dfs(node.left);
    const right = dfs(node.right);
    max = Math.max(max, left + right);
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return max;
};

/** 测试 */
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

/**
 * array 转 tree
 */
const createBinaryTree = function (arr) {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let index = 1;
  while (queue.length) {
    const node = queue.shift();
    if (arr[index]) {
      node.left = new TreeNode(arr[index]);
      queue.push(node.left);
    }
    index++;
    if (arr[index]) {
      node.right = new TreeNode(arr[index]);
      queue.push(node.right);
    }
    index++;
  }
  return root;
};

/**
 * tree 转 array
 */
const printBinaryTree = function (root) {
  if (!root) return;
  const queue = [root];
  const result = [];
  while (queue.length) {
    const node = queue.shift();
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
};

const root = createBinaryTree([1, 2, 3, 4, 5, 6, 7]);
const diameter = diameterOfBinaryTree(JSON.parse(JSON.stringify(root)));
console.log(diameter);
