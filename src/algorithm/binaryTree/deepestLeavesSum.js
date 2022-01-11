/**
 * 1302. 层数最深叶子节点的和
 * https://leetcode-cn.com/problems/deepest-leaves-sum/
 */

function deepestLeavesSum(root) {
  const queue = [root];
  let obj = {};
  let level = 0;
  while (queue.length) {
    const len = queue.length;
    // 计算当前层的值
    level++;
    // 统计每层的值
    obj[level] = 0;
    // 层序遍历
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      obj[level] += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return obj[level];
}
