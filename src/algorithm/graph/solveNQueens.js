function solveNQueens(n) {
  const arr = new Array(n).fill(0).map(() => new Array(n).fill("."));
  const res = [];
  /**
   * 图的遍历
   * 每次增加行
   */
  const dfs = (arr, row) => {
    if (row === arr.length) {
      res.push(arr.map((k) => k.join("")));
      return;
    }
    for (let col = 0; col < arr[row].length; col++) {
      if (!isValid(arr, row, col)) {
        continue;
      }
      arr[row][col] = "Q";
      dfs(arr, row + 1);
      arr[row][col] = ".";
    }
  };
  /**
   * 判断是否合法
   * 1. 判断列是否有Q
   * 2. 判断左斜上方是否有Q
   * 3. 判断右斜上方是否有Q
   */
  const isValid = (arr, row, col) => {
    // 1
    for (let i = 0; i < row; i++) {
      if (arr[i][col] === "Q") {
        return false;
      }
    }
    // 2
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (arr[i][j] === "Q") {
        return false;
      }
    }
    // 3
    const n = arr[row].length;
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (arr[i][j] === "Q") {
        return false;
      }
    }
    return true;
  };
  dfs(arr, 0);
  return res;
}

const result = solveNQueens(4);
console.log(result);
