/**
 * 1288. 删除被覆盖区间
 * https://leetcode-cn.com/problems/remove-covered-intervals/
 */
function removeCoveredIntervals(intervals) {
  let res = 0;
  intervals.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });
  let [start, end] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (start <= cur[0] && cur[1] <= end) {
      // 找到覆盖区间
      res++;
    } else if (cur[0] <= end && cur[1] >= end) {
      // 相交区间，合并
      end = cur[1];
    } else if (end < cur[0]) {
      [start, end] = cur;
    }
  }
  return intervals.length - res;
}
