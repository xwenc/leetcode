/**
 * https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array-ii/description/
 */

/**
 * ✅ 二分搜索（Binary Search）
	1.	初始化 left 和 right 指针：
	      •	left = 0, right = nums.length - 1
	2.	核心逻辑：
        •	nums[mid] > nums[right]
          → 说明 mid 在左侧递增部分，最小值一定在 右半部分，移动 left = mid + 1。
            •	nums[mid] < nums[right]
          → 说明 mid 在右侧递增部分，最小值可能是 mid，移动 right = mid。
            •	nums[mid] == nums[right]
          → 由于 right 可能是重复值，无法判断，直接 right-- 缩小搜索范围（最坏 O(N)）。
 */

function findMin(nums: number[]): number {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      right--;
    }
  }
  return nums[left];
}