/**
 * 罗马数字转整数
 */
var romanToInt = function (s) {
  var obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = s[i];
    const next = s[i + 1];
    if (next && obj[next] > obj[cur]) {
      sum += obj[next] - obj[cur];
      i++;
    } else {
      sum += obj[cur];
    }
  }
  console.log(sum);
  return sum;
};

romanToInt("MCDLXXVI");
