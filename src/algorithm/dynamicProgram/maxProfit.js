/**
 * 买股票的最佳时机
 * https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/
 */

const maxProfit = (prices) => {
  let max = 0;
  let minValue = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minValue) {
      minValue = prices[i];
    } else if (prices[i] - minValue > max) {
      max = prices[i] - minValue;
    }
  }
  return max;
};
