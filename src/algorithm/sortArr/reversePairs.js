/**
 * 数组中的逆序对
 * https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/
 * 原理：
 * 利用归并排序，后面区间的的元素归并上来时，和前面区间剩余元素形成逆序对；
 */

function reversePairs(arr) {
  const temp = arr.slice();
  const sort = (arr, l, r, temp) => {
    if (l >= r) return 0;
    let mid = Math.floor((l + r) / 2);
    let res = 0;
    res += sort(arr, l, mid, temp);
    res += sort(arr, mid + 1, r, temp);
    if (arr[mid] > arr[mid + 1]) {
      res += merge(arr, l, mid, r, temp);
    }
    return res;
  };
  return sort(arr, 0, arr.length - 1, temp);
}

function merge(arr, l, mid, r, temp) {
  for (let i = l; i <= r; i++) {
    temp[i] = arr[i];
  }
  let i = l,
    j = mid + 1,
    res = 0;
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
      res += mid - i + 1;
      arr[k] = temp[j];
      j++;
    }
  }
  return res;
}

const result = reversePairs([7, 5, 6, 4]);
console.log(result);
