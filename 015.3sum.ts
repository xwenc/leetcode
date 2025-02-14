/**
 * https://leetcode.cn/problems/3sum/description/
 */

/**
 *  1.	排序数组：将 nums 从小到大排序，方便去重 + 使用双指针。
    2.	固定一个数 nums[i]，然后用 双指针 找 nums[j] + nums[k] = -nums[i]：
    •	指针 j 从 i+1 开始，k 从数组尾部开始
    •	根据 sum = nums[i] + nums[j] + nums[k]：
    •	sum = 0，找到一个解，加入结果
    •	sum > 0，说明数太大，k--
    •	sum < 0，说明数太小，j++
    3.	跳过重复元素：
    •	nums[i]、nums[j]、nums[k] 遇到重复值时，跳过，避免重复组合。

    时间复杂度： O(N²)，因为排序 O(NlogN)，双指针遍历 O(N²)
    空间复杂度： O(1)（不算结果数组）
 */

function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b); // 从小到大排序
  const res: number[][] = [];
  
  for(let i = 0; i < nums.length; i++) {
    if(i > 0 && nums[i] === nums[i - 1]) continue; // 跳过重复元素
    let left = i + 1, right = nums.length - 1;
    while(left < right) {
      const num = nums[i] + nums[left] + nums[right];
      if(num === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while(left < right && nums[left] === nums[left - 1 ]) left++; // 跳过重复元素
        while(left < right && nums[right] === nums[right + 1]) right--; // 跳过重复元素
      } else if (num > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return res;
}