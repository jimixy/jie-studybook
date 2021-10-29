var arr = [8, 9, 1, 7, 2, 3, 5, 4, 6, 0];

/**
 * 希尔排序
 * @param {Array} arr
 * @return {Array}
 */
function shellSort(arr) {
  let len = arr.length;
  let gap = 1;
  while (gap < len.length) {
    gap = gap * 3 + 1;
  }
  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let temp = arr[i];
      let j = i - gap;
      while (j >= 0 && arr[j] > temp) {
        arr[j + gap] = arr[j];
        j -= gap;
      }
      arr[j + gap] = temp;
    }
    gap = Math.floor(gap / 3);
  }
  return arr;
}

// function shellSort(arr) {
//   let len = arr.length;
//   let gap = 1;
//   while (gap < len / 5) {
//     gap = gap * 3 + 1;
//   }
//   for (gap; gap > 0; gap = Math.floor(gap / 5)) {
//     for (let i = gap; i < len; i++) {
//       let temp = arr[i];
//       let j;
//       for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
//         arr[j] = arr[j - gap];
//       }
//       arr[j] = temp;
//     }
//   }
//   return arr;
// }

var result = shellSort(arr);
console.log(result);
