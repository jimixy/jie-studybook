var arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];

/**
 * 选择排序
 * 算法复杂度：O(n^2)
 * 原理：
 * 1. 每次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置
 * 2. 再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 * 3. 以此类推，直到所有元素均排序完毕。
 */
function selectionSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  console.log(arr);
}

selectionSort(arr);
