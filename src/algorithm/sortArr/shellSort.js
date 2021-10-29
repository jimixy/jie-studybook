var arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];

/**
 * 希尔排序
 * 原理：先逐步分组进行粗调，再进行直接插入排序
 * 原因：
 * 1.在大多数元素已经有序的情况下，插入排序的工作量较小；
 * 2.在元素数量较少的情况下，插入排序的工作量较小；
 * 总结：希尔排序是不稳定的排序
 */
function shellSort(arr) {
  let len = arr.length;
  let gap = 1;
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j;
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  return arr;
}

var result = shellSort(arr);
console.log(result);
