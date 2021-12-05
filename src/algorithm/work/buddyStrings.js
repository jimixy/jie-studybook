/**
 * 亲密字符串
 * https://leetcode-cn.com/problems/buddy-strings/
 * 分析：
 * 1. 如果两个字符串长度不同，则不亲密
 * 2. 如果两个字符串相等，则判断其中一个字符串里面是否有重复字符
 * 3. 如果两个字符串不等，则判断是否有两个不同的字符, 并且这两个字符交换位置后是否相同
 *
 */

function buddyStrings(A, B) {
  if (A.length !== B.length) {
    return false;
  }
  if (A === B) {
    let set = new Set();
    for (let i = 0; i < A.length; i++) {
      if (set.has(A[i])) {
        return true;
      }
      set.add(A[i]);
    }
    return false;
  }
  let first = -1;
  let second = -1;
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== B[i]) {
      if (first === -1) {
        first = i;
      } else if (second === -1) {
        second = i;
      } else {
        return false;
      }
    }
  }
  return A[first] === B[second] && A[second] === B[first];
}

const result = buddyStrings("abcd", "badc");
