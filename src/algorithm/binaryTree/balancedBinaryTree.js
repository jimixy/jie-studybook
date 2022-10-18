/**
 * 平衡二叉树
 * https://leetcode-cn.com/problems/balanced-binary-tree/
 * 步骤：
 * 1. 判断根节点是否为空
 * 2. 判断左子树是否为空
 * 3. 判断右子树是否为空
 * 4. 判断左子树和右子树的高度差是否大于1
 */
const balancedBinaryTree = function (root) {
  if (!root) return true;
  const left = getHeight(root.left);
  const right = getHeight(root.right);
  return (
    Math.abs(left - right) <= 1 &&
    balancedBinaryTree(root.left) &&
    balancedBinaryTree(root.right)
  );
};

const getHeight = function (root) {
  if (!root) return 0;
  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
};

/**
 * 方法二
 * 利用递归的方式，判断左右子树的高度差是否大于1，如果大于1，则返回false，否则返回true
 */
const balancedBinaryTree1 = function (root) {
  const recur = (root) => {
    if (!root) return 0;
    const left = recur(root.left);
    if (left == -1) return -1;
    const right = recur(root.right);
    if (right == -1) return -1;
    return Math.abs(left - right) < 2 ? Math.max(left, right) + 1 : -1;
  };
  return recur(root) != -1;
};

/**
 * 方式三
 */
function isBalanced(root) {
  let flag = true;
  const maxDepth = (root) => {
    if (root == null) {
      return 0;
    }
    if (!flag) return;
    const leftMaxDepth = maxDepth(root.left);
    const rightMaxDepth = maxDepth(root.right);
    if (Math.abs(rightMaxDepth - leftMaxDepth) > 1) {
      flag = false;
    }
    return 1 + Math.max(leftMaxDepth, rightMaxDepth);
  };
  maxDepth(root);
  return flag;
}

/** 测试 */
const TreeNode = function (val) {
  this.val = val;
  this.left = this.right = null;
};

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

const arr = [3, 9, 20, null, null, 15, 7];
const arr1 = [1, 2, 2, 3, 3, null, null, 4, 4];
const root = createBinaryTree(arr);
console.log(balancedBinaryTree(root));
const root1 = createBinaryTree(arr1);
console.log(balancedBinaryTree1(root1));
