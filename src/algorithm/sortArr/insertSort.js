var arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];

/**
 * 插入排序
 * 原理：
 * 1、将左侧的数据看作排好序的数字，右侧的数据看作未排序的数字；
 * 2、每次将右侧的数字和左侧所有的数字做一个对比，确定它在左侧的位置；
 */
function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j - 1 >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  console.log(arr);
}

insertSort(arr);

/**
 * 插入排序的优化1
 * 原理：
 * 1、合并比较的条件
 */
function insertSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j - 1 >= 0 && arr[j - 1] > arr[j]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  console.log(arr);
}

// insertSort2(arr);

/**
 * 插入排序的优化2
 * 原理：
 * 1、减少右侧和左侧数字比较时候的移动次数；
 */
function insertSort3(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;
    for (; j - 1 >= 0 && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
  console.log(arr);
}

const arr3 = [5, 2, 3, 1];
// insertSort3(arr3);

/**
 * 使用插入排序对数组区间进行排序
 */
function insertSort4(arr, left, right) {
  for (let i = left; i <= right; i++) {
    let temp = arr[i];
    let j = i;
    for (; j - 1 >= left && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
  console.log(arr);
}

const arr4 = [5, 2, 3, 1];
// insertSort4(arr4, 1, 3);
