/**
 * https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
 * @param nums 
 * @returns 
 */

function lengthOfLIS(nums) {
  if (nums.length === 0) return 0;
  
  const n = nums.length;
  const dp = new Array(n).fill(1); // 每个数字本身至少是长度 1 的子序列
  
  for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        console.log('i:',nums[i], 'j:', nums[j]);
          if (nums[j] < nums[i]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
              
          }
      }
      console.log("dp:", dp);
      console.log("======================")
  }
  
  return Math.max(...dp);
}

let n = lengthOfLIS([10,9,2,5,3,7,101,18]); // 4
console.log(n);