/**
 * 二叉树最大宽度
 * https://leetcode-cn.com/problems/maximum-width-of-binary-tree/
 */

function widthOfBinaryTree(root) {
  if (!root) {
    return 0;
  }
  // 1n为大数
  let ans = 1n,
    que = [[0n, root]];
  while (que.length) {
    const width = que[que.length - 1][0] - que[0][0] + 1n;
    if (width > ans) {
      ans = width;
    }
    let tmp = [];
    for (const [i, q] of que) {
      q.left && tmp.push([i * 2n, q.left]);
      q.right && tmp.push([i * 2n + 1n, q.right]);
    }
    que = tmp;
  }
  return Number(ans);
}
