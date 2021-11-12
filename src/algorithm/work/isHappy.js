/**
 * 快乐数
 * https://leetcode-cn.com/problems/happy-number/
 */

const isHappy = (n) => {
  const set = new Set();
  while (!set.has(n)) {
    set.add(n);
    n = getSum(n);
  }
  return n === 1;
};

const getSum = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return sum;
};
