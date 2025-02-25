/**
 * This function finds the k-th largest element in an array using the Quickselect algorithm.
 * Quickselect is a selection algorithm to find the k-th smallest element in an unordered list.
 * It is related to the quicksort sorting algorithm.
 * 
 * The idea is to use a pivot to partition the array into two parts, 
 * then recursively select the k-th largest element in the appropriate part.
 * 
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * 
 * @param nums - The array of numbers.
 * @param k - The k-th largest element to find.
 * @returns The k-th largest element in the array.
 */

function findKthLargest(nums: number[], k: number): number {
  const n = nums.length;
  return quickselect(nums, 0, n - 1, n - k);
}

function quickselect(nums: number[], left: number, right: number, k: number): number {
  if (left === right) {
      return nums[k];
  }

  const pivot = nums[left];
  let i = left - 1, j = right + 1;

  while (i < j) {
      do { i++; } while (nums[i] < pivot);
      do { j--; } while (nums[j] > pivot);
      if (i < j) {
          [nums[i], nums[j]] = [nums[j], nums[i]];
      }
  }

  if (k <= j) {
      return quickselect(nums, left, j, k);
  } else {
      return quickselect(nums, j + 1, right, k);
  }
}
