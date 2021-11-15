/**
 * 斐波那契数列
 * https://leetcode-cn.com/problems/fibonacci-number/
 */

const fib = (n) => {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
};

// 记忆化递归
const fib2 = (n) => {
  const cache = {};
  const helper = (n) => {
    if (n <= 1) return n;
    if (cache[n]) return cache[n];
    cache[n] = helper(n - 1) + helper(n - 2);
    return cache[n];
  };
  return helper(n);
};

// 自底向上
const fib3 = (n) => {
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
