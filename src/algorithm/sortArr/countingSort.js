/**
 * 计数排序
 * 原理：
 * 1. 创建一个长度为范围内最大值+1的数组，索引为0的元素为0，索引为1的元素为1，索引为2的元素为2，依次类推
 * 2. 遍历数组，将每个元素的值赋值给数组对应的索引，索引值+1
 * 3. 遍历数组，将数组中的值依次赋值给原数组
 */
const countingSort = (arr) => {
  const max = Math.max(...arr);
  const countArr = new Array(max + 1).fill(0);
  arr.forEach((item) => {
    countArr[item]++;
  });
  let index = 0;
  for (let i = 0; i < countArr.length; i++) {
    while (countArr[i] > 0) {
      arr[index] = i;
      index++;
      countArr[i]--;
    }
  }
  return arr;
};

const arr = [2, 5, 3, 4, 10, 3];
console.log(countingSort(arr));
