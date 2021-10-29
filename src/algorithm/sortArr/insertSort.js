var arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];

/**
 * 插入排序
 * 原理：
 * 1、将左侧的数据看作排好序的数字，右侧的数据看作未排序的数字；
 * 2、每次将右侧的数字和左侧所有的数字做一个对比，确定它在左侧的位置；
 */
function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      } else {
        break;
      }
    }
  }
  return arr;
}

// var result = insertSort(arr);
// console.log(result);

/**
 * 插入排序的优化1
 * 原理：
 * 1、合并比较的条件
 */
function insertSort2(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j >= 0 && arr[j - 1] > arr[j]; j--) {
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }
  return arr;
}

// var result = insertSort2(arr);
// console.log(result);

/**
 * 插入排序的优化2
 * 原理：
 * 1、减少右侧和左侧数字比较时候的移动次数；
 */
function insertSort3(arr) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i];
    let j = i;
    for (; j >= 0 && arr[j - 1] > temp; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = temp;
  }
  return arr;
}

var result = insertSort3([3]);
console.log(result);
