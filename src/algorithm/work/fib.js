/**
 * 剑指 Offer 10- I. 斐波那契数列
 * https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 */

function fib(n) {
  const cache = {};
  function double(n) {
    if (cache[n]) {
      return cache[n];
    }
    if (n < 2) {
      return n;
    }
    return (cache[n] = (double(n - 1) + double(n - 2)) % 1000000007);
  }
  return double(n);
}
