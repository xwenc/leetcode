/**
 * https://leetcode.cn/problems/permutations-ii/description/
 */

/**
 * 	1.	先排序 nums，保证相同的数字相邻，方便去重。
    2.	使用 used 数组 记录当前数字是否被使用过：
      •	若当前数字已被使用，则跳过。
      •	若当前数字与前一个数字相同，并且前一个数字还未被使用，则跳过（避免重复）。
    3.	回溯遍历所有可能排列。
 */

function permuteUnique(nums: number[]): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const used: boolean[] = new Array(nums.length).fill(false);
  nums.sort((a, b) => a - b);
  const dfs = () => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs();
      path.pop();
      used[i] = false;
    }
  };
  dfs();
  return res;
}

// Test
console.log(permuteUnique([1, 1, 2])); // [[1,1,2],[1,2,1],[2,1,1]]
console.log(permuteUnique([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]