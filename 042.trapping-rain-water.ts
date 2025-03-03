/**
 * https://leetcode.cn/problems/trapping-rain-water/
 * 
 * 	1.	使用双指针 left 和 right：
      •	left 从左向右遍历，right 从右向左遍历。
      •	维护 leftMax 和 rightMax，分别表示当前 left 和 right 位置的最高柱子。
      •	计算当前位置可存储的水量：
      •	如果 height[left] < height[right]，则 leftMax 决定水量，更新 left++。
      •	否则，rightMax 决定水量，更新 right--。
    2.	更新 leftMax 和 rightMax：
      •	如果 height[left] 或 height[right] 高于 leftMax 或 rightMax，更新它们。
      •	否则，计算当前位置的存水量 water += leftMax - height[left]（或 rightMax - height[right]）。
 */

function trap(height: number[]): number {
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= leftMax) {
        leftMax = height[left];
      } else {
        water += leftMax - height[left];
      }
      left++;
    } else {
      if (height[right] >= rightMax) {
        rightMax = height[right];
      } else {
        water += rightMax - height[right];
      }
      right--;
    }
  }

  return water;
}