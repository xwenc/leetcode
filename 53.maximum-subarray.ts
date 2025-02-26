/**
 * https://leetcode.cn/problems/maximum-subarray/description/
 */

/**
 * 解法 1：动态规划（Kadane’s Algorithm）

  思路
    •	定义 dp[i] 为 以 i 结尾的最大子数组和：
    •	递推公式：

  dp[i] = \max(nums[i], dp[i-1] + nums[i])

    •	nums[i] 自己一个数大，还是加上前面的和更大？
    •	只需要维护一个变量 maxSum 记录 最大值，不需要额外数组。
 */

function maxSubArray(nums: number[]): number {
  let maxSum = nums[0];
  let dp = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp = Math.max(nums[i], dp + nums[i]);
    maxSum = Math.max(maxSum, dp);
  }
  return maxSum;
}

/**
 * 解法 2：分治法（Divide & Conquer）

  思路
    •	分治策略：
    1.	把数组分为 左半部分 和 右半部分。
    2.	递归求解：
    •	左半部分的最大子数组和。
    •	右半部分的最大子数组和。
    •	跨越中间的最大子数组和（即 crossMax）。
    3.	取 三者中的最大值。
 */

function maxSubArray2(nums: number[]): number {
  return divide(nums, 0, nums.length - 1);
}

function divide(nums: number[], left: number, right: number): number {
  if (left === right) return nums[left];
  let mid = left + ((right - left) >> 1);
  let leftMax = divide(nums, left, mid);
  let rightMax = divide(nums, mid + 1, right);
  let crossMax = cross(nums, left, right, mid);
  return Math.max(leftMax, rightMax, crossMax);
}

function cross(nums: number[], left: number, right: number, mid: number): number {
  let leftMax = -Infinity;
  let rightMax = -Infinity;
  let sum = 0;
  for (let i = mid; i >= left; i--) {
    sum += nums[i];
    leftMax = Math.max(leftMax, sum);
  }
  sum = 0;
  for (let i = mid + 1; i <= right; i++) {
    sum += nums[i];
    rightMax = Math.max(rightMax, sum);
  }
  return leftMax + rightMax;
}