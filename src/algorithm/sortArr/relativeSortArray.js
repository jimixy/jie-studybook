/**
 * 1122. 数组的相对排序
 * https://leetcode-cn.com/problems/relative-sort-array/
 */

function relativeSortArray(arr1, arr2) {
  const counts = new Array(1001).fill(0);
  for (let n of arr1) {
    counts[n]++;
  }
  const res = [];
  for (let n of arr2) {
    while (counts[n]) {
      res.push(n);
      counts[n]--;
    }
  }
  for (let i = 0; i < counts.length; i++) {
    while (counts[i]) {
      res.push(i);
      counts[i]--;
    }
  }
  return res;
}

/**
 * 解法二
 */
function relativeSortArray(arr1, arr2) {
  const arr = [];
  const len1 = arr1.length;
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < len1; j++) {
      if (arr2[i] == arr1[j]) {
        const item = arr1.splice(j, 1);
        arr.push(item);
        j--;
      }
    }
  }
  arr1.sort((a, b) => a - b);
  return [...arr, ...arr1];
}
