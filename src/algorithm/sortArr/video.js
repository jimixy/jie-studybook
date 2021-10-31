/**
 * 插入排序
 */
const insertSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;
    for (; j >= 0 && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
  console.log(arr);
};

const arr = [3, 6, 5, 4, 2, 1];
// insertSort(arr);

/**
 * 希尔排序
 */
const shellSort = (arr) => {
  let len = arr.length;
  let gap = 1; // 分组变量
  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j = i;
      for (; j >= gap && arr[j - gap] > temp; j -= gap) {
        arr[j] = arr[j - gap];
      }
      arr[j] = temp;
    }
  }
  console.log(arr);
};
shellSort(arr);
