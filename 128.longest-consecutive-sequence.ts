/**
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/
 * 	•	利用 Set（哈希表）快速查询是否存在某个数
    •	只从序列的起点开始查找：
    •	只有当前数 - 1 不在 Set 中时，才开始找这个数的连续序列。
    •	这样能保证每个序列只会被计算一次，避免重复计算。
 */

function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);
  let longest = 0;
  for (const num of set) {
    if (!set.has(num - 1)) {
      let current = num;
      let currentLength = 1;
      while (set.has(current + 1)) {
        current++;
        currentLength++;
      }
      longest = Math.max(longest, currentLength);
    }
  }
  return longest;
}