/**
 *  https://leetcode.cn/problems/two-sum/
 * 
 * 	•	使用哈希表（Map）存储已遍历的元素及其索引，并在遍历过程中查找是否存在 target - nums[i]。
 *	•	如果存在，则直接返回索引，否则存入 map，继续遍历。
 */

 function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff)!, i];
    }
    map.set(nums[i], i);
  }
  return [];
 }