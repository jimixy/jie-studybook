/**
 * 翻转二叉树
 * https://leetcode-cn.com/problems/invert-binary-tree/
 */
const reverseBinaryTree = function (root) {
  if (!root) return null;
  const left = reverseBinaryTree(root.left);
  const right = reverseBinaryTree(root.right);
  root.left = right;
  root.right = left;
  return root;
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

const root = createBinaryTree([4, 2, 7, 1, 3, 6, 9]);
const reverseTree = reverseBinaryTree(JSON.parse(JSON.stringify(root)));
console.log(printBinaryTree(root), printBinaryTree(reverseTree));
