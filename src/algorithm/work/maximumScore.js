/**
 * 移除石子的最大得分
 * https://leetcode-cn.com/problems/maximum-score-from-removing-stones/
 */

function maximumScore(a, b, c) {
  const store = [a, b, c];
  store.sort((a, b) => a - b);
  const two = store[0] + store[1];
  if (two <= store[2]) {
    return two;
  } else {
    return parseInt((two + store[2]) / 2);
  }
}
