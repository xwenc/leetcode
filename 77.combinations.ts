//https://leetcode.cn/problems/combinations/description/

/**
 * 	1.	回溯法（Backtracking）：
      •	递归选择 k 个数形成组合。
      •	每次从 start 位置选择一个数加入组合，并递归处理剩余的选择。
      •	递归结束条件：当前组合长度等于 k。
    2.	剪枝优化：
      •	若剩余数字不足以填满 k 个数，则提前结束循环，减少计算量。
 */

function combine(n: number, k: number): number[][] {
  const res: number[][] = [];
  const path: number[] = [];
  const dfs = (start: number) => {
    if (path.length === k) {
      res.push([...path]);
      return;
    }
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  };
  dfs(1);
  return res;
}

// Test

console.log(combine(4, 2)); // [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combine(1, 1)); // [[1]]
console.log(combine(5, 3)); // [[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5]]