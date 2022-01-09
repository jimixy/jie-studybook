/**
 * 394. 字符串解码
 * https://leetcode-cn.com/problems/decode-string/
 */

function decodeString(s) {
  let stack = [];
  let num = 0;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (c >= "0" && c <= "9") {
      num = 10 * num + parseInt(c);
    } else if (c === "[") {
      stack.push(str);
      stack.push(num);
      str = "";
      num = 0;
    } else if (c === "]") {
      const times = stack.pop();
      str = stack.pop() + str.repeat(times);
    } else {
      str += c;
    }
  }
  return str;
}

decodeString("3[a2[c]]");
