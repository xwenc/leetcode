/**
 * https://leetcode.cn/problems/number-of-digit-one/
 */

function countDigitOne(n: number): number {
  let length = 1;
  let count = 9;

  while(n > count) {
      length += 1;
      count  = 10 ** length - 1;
  }

  return length;
};
// Test
console.log(countDigitOne(13)); // 6
console.log(countDigitOne(0)); // 0
console.log(countDigitOne(10)); // 2
console.log(countDigitOne(200)); // 2