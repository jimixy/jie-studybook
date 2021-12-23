/**
 * 完全二叉树的节点个数
 * https://leetcode-cn.com/problems/count-complete-tree-nodes/
 */

function countNodes(root) {
  if (!root) return 0;
  const leftHeight = countHeight(root.left);
  const rightHeight = countHeight(root.right);
  if (leftHeight === rightHeight) {
    // 相当于 Math.pow(2, leftHeight) + countNodes(root.right)
    return (1 << leftHeight) + countNodes(root.right);
  } else {
    return (1 << rightHeight) + countNodes(root.left);
  }
}

function countHeight(root) {
  let height = 0;
  while (root) {
    height++;
    root = root.left;
  }
  return height;
}

/** 解法二 */
function countNodes(root) {
  let l = root,
    r = root;
  let hl = 0,
    hr = 0;
  while (l) {
    l = l.left;
    hl++;
  }
  while (r) {
    r = r.right;
    hr++;
  }
  // 如果左右子树的高度相同，说明是一颗满二叉树
  if (hl == hr) {
    return Math.pow(2, hl) - 1;
  }
  return 1 + countNodes(root.left) + countNodes(root.right);
}
