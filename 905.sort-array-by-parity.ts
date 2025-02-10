/**
 * https://leetcode.cn/problems/sort-array-by-parity/
 * 按奇偶排序数组，将所有偶数放在开头，所有奇数放在末尾。
 * 该函数使用双指针技术来实现排序。
 * 
 * @param nums - 要按奇偶排序的数字数组。
 * @returns 排序后的数组，所有偶数在开头，所有奇数在末尾。
 */
function sortArrayByParity(nums: number[]): number[] {
  // 双指针法
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
      // 找到左侧第一个奇数
      while (left < right && nums[left] % 2 === 0) {
          left++;
      }
      
      // 找到右侧第一个偶数
      while (left < right && nums[right] % 2 !== 0) {
          right--;
      }
      
      // 交换
      if (left < right) {
          [nums[left], nums[right]] = [nums[right], nums[left]];
          left++;
          right--;
      }
  }

  return nums;
}