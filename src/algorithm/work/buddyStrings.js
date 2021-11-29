/**
 * 亲密字符串
 * https://leetcode-cn.com/problems/buddy-strings/
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
