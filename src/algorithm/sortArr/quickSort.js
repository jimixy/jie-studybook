/**
 * 快速排序
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

const arr = [3, 5, 2, 1, 4, 6, 7, 8, 9, 10];

const result = quickSort(arr);
console.log(result);
