/**
 * 快速排序
 * 算法复杂度：O(nlogn)
 * 原理：
 * 1. 选择一个基准元素，通常选择第一个元素或者最后一个元素。
 * 2. 将所有比基准元素小的放在它前面，所有比基准元素大的放在它后面，相同的丢到后面，这个算法叫做分治法。
 * 3. 对基准元素的左右两部分递归地进行第二步，直到所有元素排序完毕。
 */
const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};

// 第二种快排
const quickSort2 = (arr) => {
  if (arr == null || arr.length == 0) return;
  sort(arr, 0, arr.length - 1);
  return arr;
};

const sort = (arr, start, end) => {
  if (start >= end) return;
  let left = start,
    right = end;
  // 1. 获取中点，不是初始点
  const pivot = arr[Math.floor((start + end) / 2)];
  // 2. left <= right 不是 left < right
  while (left <= right) {
    // 3. arr[left] < pivot 不是 <=
    while (left <= right && arr[left] < pivot) {
      left++;
    }
    while (left <= right && arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      [arr[right], arr[left]] = [arr[left], arr[right]];
      left++;
      right--;
    }
  }
  sort(arr, start, right);
  sort(arr, left, end);
};

const arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];
const result = quickSort2(arr);
console.log(1, result);
