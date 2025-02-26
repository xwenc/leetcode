/**
 * https://leetcode.cn/problems/nth-digit/
 */

function findNthDigit(n: number): number {
    let length = 1; // 当前数字的位数
    let count = 9;  // 该位数范围内的数字总个数
    let start = 1;  // 该位数范围的起始数字

    // 找到 n 所属的数位范围
    while (n > length * count) {
        n -= length * count;
        length++;   
        count *= 10;
        start *= 10;
    }

    // 确定目标数字
    let num = start + Math.floor((n - 1) / length);
    let digitIndex = (n - 1) % length;

    // 返回目标数字的某一位
    return Number(num.toString()[digitIndex]);
}

  
