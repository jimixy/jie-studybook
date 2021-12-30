/**
 * 797. 所有可能的路径
 * https://leetcode-cn.com/problems/all-paths-from-source-to-target/
 */

function allPathsSourceTarget(graph) {
  const res = [];
  const path = [];
  dfs(graph, 0, path, res);
  return res;
}

function dfs(graph, cur, path, res) {
  path.push(cur);
  if (cur === graph.length - 1) {
    res.push([...path]);
  } else {
    graph[cur].forEach((next) => {
      dfs(graph, next, path, res);
    });
  }
  path.pop();
}
