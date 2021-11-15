/**
 * 不同的路径II
 * https://leetcode-cn.com/problems/unique-paths-ii/
 * 分析：
 * 从左上角开始，每次只能向右或者向下走，
 * 如果遇到障碍物，则不能走，直接返回0
 * 如果遇到终点，则返回1
 * 如果没有遇到障碍物，则返回左上角的值加上右上角的值
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0] === 1) return 0;
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;
  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (obstacleGrid[i][j] === 1) {
        dp[i][j] = 0;
      } else if (i > 0 && j > 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      } else if (i > 0) {
        dp[i][j] = dp[i - 1][j];
      } else if (j > 0) {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[m - 1][n - 1];
};
