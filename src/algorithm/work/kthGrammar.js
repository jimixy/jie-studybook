/**
 * 第K个语法符号
 * https://leetcode-cn.com/problems/k-th-symbol-in-grammar/
 * 分析：
 * 1. 如果N为1，则返回0
 * 2. 如果K为偶数，则返回第N-1个语法符号的第K/2个语法符号
 * 3. 如果K为奇数，则返回1-第N-1个语法符号的第(K+1)/2个语法符号
 */

function kthGrammar(N, K) {
  if (N == 1 && K == 1) return 0;
  // 求父结点的值；(K+1)/2为父结点的序号
  const a = kthGrammar(N - 1, Math.ceil(K / 2));
  if (K % 2 == 1) {
    return a;
  }
  // K为奇数则其值与父结点相同
  return 1 - a;
}

console.log(kthGrammar(4, 4));
