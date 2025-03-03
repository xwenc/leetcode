/**
 * https://leetcode.cn/problems/container-with-most-water/description/
 * 
 * 1.	初始化双指针：
    •	左指针 left = 0，右指针 right = height.length - 1。
    •	计算当前容积 area = min(height[left], height[right]) × (right - left)。
   2.	移动较短的一边：
    •	由于容积由短板决定，移动较短的柱子可能找到更大的容积。
    •	如果 height[left] < height[right]，移动 left++；
    •	否则，移动 right--。
   3.	重复以上步骤，直到 left == right，找到最大容积。
 */

function maxArea(height: number[]): number {
  let left = 0, right = height.length - 1;
  let maxArea = 0;
  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxArea = Math.max(maxArea, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}

// Test cases
