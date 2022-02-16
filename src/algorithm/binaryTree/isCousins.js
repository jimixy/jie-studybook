/**
 * 993. 二叉树的堂兄弟节点
 * https://leetcode-cn.com/problems/cousins-in-binary-tree/
 */

function isCousins(root, x, y) {
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    let sum = x + y;
    // 层序遍历
    for (let i = 0; i < len; i++) {
      const { left, right, val } = queue.shift();
      // 同一个父节点下的
      if (
        left &&
        right &&
        ((left.val === x && right.val === y) ||
          (left.val === y && right.val === x))
      ) {
        return false;
      }
      if (val === x || val === y) {
        sum -= val;
      }
      if (sum === 0) return true;
      left && queue.push(left);
      right && queue.push(right);
    }
  }
  return false;
}
