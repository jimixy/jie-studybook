/**
 * 二叉树的遍历
 */

// 非递归
function traversal(root, type) {
  if (!root) return [];
  const order = {
    pre: ["val", "left", "right"],
    in: ["left", "val", "right"],
    post: ["left", "right", "val"],
  };
  const result = [];
  const stack = [root];
  while (stack.length) {
    const item = stack.pop();
    if (typeof item == "number") {
      result.push(item);
    } else {
      const itemArr = order[type];
      for (let i = itemArr.length; i >= 0; i--) {
        const key = itemArr[i];
        if (item[key]) {
          stack.push(item[key]);
        }
      }
    }
  }
  return result;
}

// 前序遍历
function preorderTraversal(root) {
  return traversal(root, "pre");
}

// 中序遍历
function inorderTraversal(root) {
  return traversal(root, "in");
}

// 后序遍历
function postorderTraversal(root) {
  return traversal(root, "post");
}

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
    const node = queue.pop();
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

const root = createBinaryTree([1, null, 2, 3]);
preorderTraversal(root);
