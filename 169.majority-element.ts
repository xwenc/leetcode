/**
 * https://leetcode.cn/problems/majority-element/
 */


/**
 * 	•	由于 多数元素 的 出现次数 > ⌊n/2⌋，意味着它出现的次数比所有其他元素的总和还要多。
    •	摩尔投票法 维护一个 candidate（候选多数元素）和 count 计数：
    1.	count == 0 时，更新 candidate = 当前元素。
    2.	遍历数组：
      •	如果 nums[i] == candidate，count +1
      •	否则，count -1
    3.	遍历结束后，candidate 一定是多数元素（因为它比其他所有元素的总和还多）。返回 candidate。
 */

function majorityElement(nums: number[]): number {
  let candidate = nums[0];
  let count = 1;
  for(let i = 1; i < nums.length; i++) {
    if(count === 0) {
      candidate = nums[i];
    }
    count += nums[i] === candidate ? 1 : -1;
  }
  return candidate;
}