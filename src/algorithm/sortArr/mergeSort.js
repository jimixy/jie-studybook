/**
 * 归并排序
 * 算法复杂度：O(nlogn)
 */

/**
 * 自顶向下的归并排序
 */
function mergeSort(arr, l = 0, r = arr.length - 1) {
  if (l >= r) return arr;
  let mid = Math.floor((l + r) / 2);
  mergeSort(arr, l, mid);
  mergeSort(arr, mid + 1, r);
  merge(arr, l, mid, r);
  return arr;
}

/** 合并两个有序的区间 arr[l, mid] 和 arr[mid + 1, r] */
function merge(arr, l, mid, r) {
  // 拷贝之前的数组
  const temp = arr.slice(l, r + 1);
  let i = l,
    j = mid + 1;
  for (let k = l; k <= r; k++) {
    // 左侧已经全部排序完毕
    if (i > mid) {
      arr[k] = temp[j - l];
      j++;
      // 右侧已经全部排序完毕
    } else if (j > r) {
      arr[k] = temp[i - l];
      i++;
      // 左侧的数字小于右侧的数字
    } else if (temp[i - l] < temp[j - l]) {
      arr[k] = temp[i - l];
      i++;
      // 右侧的数字小于左侧的数字
    } else {
      arr[k] = temp[j - l];
      j++;
    }
  }
  return arr;
}

const result = mergeSort3([1, 8, 9, 7, 2, 3, 5, 4, 6, 0]);

console.log(result);

/**
 * 归并排序的优化
 * 原理：
 * 1、判断是否需要merge
 * 2、只创建一个临时空间
 */
function mergeSort2(arr) {
  // 优化3: 只创建一个临时空间
  const temp = arr.slice();
  const sort = (arr, l, r, temp) => {
    if (l >= r) return arr;
    let mid = Math.floor((l + r) / 2);
    sort(arr, l, mid, temp);
    sort(arr, mid + 1, r, temp);
    // 优化1：当arr本身就是有序的时候，不需要再次排序
    if (arr[mid] > arr[mid + 1]) {
      merge2(arr, l, mid, r, temp);
    }
    return arr;
  };
  return sort(arr, 0, arr.length - 1, temp);
}

function merge2(arr, l, mid, r, temp) {
  for (let i = l; i <= r; i++) {
    temp[i] = arr[i];
  }
  let i = l,
    j = mid + 1;
  for (let k = l; k <= r; k++) {
    if (i > mid) {
      arr[k] = temp[j];
      j++;
    } else if (j > r) {
      arr[k] = temp[i];
      i++;
    } else if (temp[i] <= temp[j]) {
      arr[k] = temp[i];
      i++;
    } else {
      arr[k] = temp[j];
      j++;
    }
  }
  return arr;
}

/**
 * 自底向上的归并排序
 */
function mergeSort3(arr) {
  const temp = arr.slice();
  const len = arr.length;
  for (let size = 1; size < len; size = 2 * size) {
    for (let i = 0; i + size < len; i += 2 * size) {
      if (arr[i + size - 1] > arr[i + size]) {
        merge2(
          arr,
          i,
          Math.min(i + size - 1, len - 1),
          Math.min(i + 2 * size - 1, len - 1),
          temp
        );
      }
    }
  }
  return arr;
}
