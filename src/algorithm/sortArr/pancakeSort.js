/**
 * 煎饼排序
 * https://leetcode-cn.com/problems/pancake-sorting/
 */

function pancakeSort(cakes) {
  let res = [];
  sort(cakes, cakes.length);
  function sort(cakes, n) {
    if (n == 1) return;
    let maxCake = 0;
    let maxCakeIndex = 0;
    for (let i = 0; i < n; i++) {
      if (cakes[i] > maxCake) {
        maxCakeIndex = i;
        maxCake = cakes[i];
      }
    }
    reverse(cakes, 0, maxCakeIndex);
    res.push(maxCakeIndex + 1);
    reverse(cakes, 0, n - 1);
    res.push(n);
    sort(cakes, n - 1);
  }
  return res;
}

function reverse(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
}

function pancakeSort2(cakes) {
  let res = [];
  for (let i = cakes.length - 1; i >= 0; i--) {
    let maxIndex = 0;
    for (let j = 0; j <= i; j++) {
      if (cakes[j] > cakes[maxIndex]) {
        maxIndex = j;
      }
    }
    // 将最大的煎饼翻转到第一个
    reverse(cakes, 0, maxIndex);
    // 记录翻转次数
    res.push(maxIndex + 1);
    // 反转数组，将最大的数放在最后
    reverse(cakes, 0, i);
    // 记录翻转次数
    res.push(i + 1);
  }
  return res;
}
