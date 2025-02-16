/**
 * https://leetcode.cn/problems/house-robber-ii/
 */

/**
 * 由于房屋是 环形排列，因此需要考虑 两种情况：
	1.	不抢劫最后一间房子（即 nums[0] ~ nums[n-2]）
	2.	不抢劫第一间房子（即 nums[1] ~ nums[n-1]）

  然后使用 打家劫舍 I 的解法 分别计算 两种情况下的最大金额，取其中的最大值。

  状态转移方程

  使用 动态规划：
    •	dp[i] 代表 抢劫到第 i 个房屋时的最大金额。
    •	dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])。
 */

    function rob(nums: number[]): number {
      if (nums.length === 1) return nums[0];
      function _rob(nums: number[]): number {
        let prev = 0;
        let curr = 0;
        for (let num of nums) {
          let temp = curr;
          curr = Math.max(prev + num, curr);
          prev = temp;
        }
        return curr;
      }
      return Math.max(_rob(nums.slice(0, nums.length - 1)), _rob(nums.slice(1)));
    }