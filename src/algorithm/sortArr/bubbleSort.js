var arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];

/**
 * 冒泡排序
 * 原理：每次把大的数字放到最后
 * 每次比较相邻的元素，如果前一个比后一个大，就交换他们两个。
 */
const bubbleSort = (arr) => {
  for (let i = arr.length; i >= 0; i--) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  console.log(arr);
};

bubbleSort(arr);
