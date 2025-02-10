/**
 * https://leetcode.cn/problems/sort-an-array/
 */


function sortArray(nums: number[]): number[] {
  // 快速排序主函数
  function quickSort(arr: number[], left: number, right: number) {
      if (left >= right) return;
      
      const pivotIndex = partition(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
  }
  
  // 分区函数（选择最右侧元素作为pivot）
  function partition(arr: number[], left: number, right: number): number {
      const pivot = arr[right];
      let i = left - 1;
      
      for (let j = left; j < right; j++) {
          if (arr[j] < pivot) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]];
          }
      }
      
      [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
      return i + 1;
  }
  
  quickSort(nums, 0, nums.length - 1);
  return nums;
}

// Test
const res = sortArray([5,2,3,1]); // [1,2,3,5]

console.log(res);