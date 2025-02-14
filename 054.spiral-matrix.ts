/**
 * https://leetcode.cn/problems/spiral-matrix/description/
 */

/**
 * 遍历规则：
 * 我们维护 四个边界：
	•	top（上边界）
	•	bottom（下边界）
	•	left（左边界）
	•	right（右边界）

  遍历规则：
    1.	从左到右（➡️）：遍历 top 行，然后 top++。
    2.	从上到下（⬇️）：遍历 right 列，然后 right--。
    3.	从右到左（⬅️）：遍历 bottom 行，然后 bottom--。（⚠️ 需判断是否越界）
    4.	从下到上（⬆️）：遍历 left 列，然后 left++。（⚠️ 需判断是否越界）
*/

function spiralOrder(matrix: number[][]): number[] {
  if (matrix.length === 0) return [];
  let top = 0, bottom = matrix.length - 1;
  let left = 0, right = matrix[0].length - 1;
  let res: number[] = [];

  while (top <= bottom && left <= right) {
    for (let i = left; i <=right; i++) res.push(matrix[top][i]);
    top++;
    for (let i = top; i <=bottom; i++) res.push(matrix[i][right]);
    right--;
    for (let i = right; i >=left && top <= bottom; i--) res.push(matrix[bottom][i]);
    bottom--;
    for (let i = bottom; i >=top && left <= right; i--) res.push(matrix[i][left]);
    left++;
  }
  return res;
}