/**
 * 面试题 10.01. 合并排序的数组
 * https://leetcode-cn.com/problems/sorted-merge-lcci/
 */

function merge(A, m, B, n) {
  let i = m - 1,
    j = n - 1,
    p = m + n - 1;
  while (i >= 0 || j >= 0) {
    let l = i >= 0 ? A[i] : -Infinity;
    let r = j >= 0 ? B[j] : -Infinity;
    if (l > r) {
      A[p] = l;
      i--;
    } else {
      A[p] = r;
      j--;
    }
    p--;
  }
  return A;
}
