/**
 * 56. 合并区间
 * https://leetcode-cn.com/problems/merge-intervals/
 */

function merge(intervals) {
  if (intervals.length === 0) {
    return [];
  }
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  let [start, end] = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1]);
    } else {
      res.push([start, end]);
      [start, end] = intervals[i];
    }
  }
  res.push([start, end]);
  return res;
}

/**
 * 解法二
 * 分析：
 * 1. 将区间按照起始点排序
 * 2. 如果区间有重叠，则合并后的区间结束点为区间结束点最大值
 */
function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [];
  let prev = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    if (cur[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], cur[1]);
    } else {
      res.push(prev);
      prev = cur;
    }
  }
  res.push(prev);
  return res;
}
