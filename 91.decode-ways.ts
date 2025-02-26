/**
 * https://leetcode.cn/problems/decode-ways/
 */

/**
 * 思路：
    •	dp[i] 代表 前 i 个字符 的解码方法数。
    •	考虑 s[i-1] 作为 单个字符 (1-9) 或 与前一位组合 (10-26)。

  状态转移
    1.	如果 s[i-1] ≠ '0'，则 dp[i] += dp[i-1] （单独解码）。
    2.	如果 s[i-2]s[i-1] ∈ [10, 26]，则 dp[i] += dp[i-2]（组合解码）。

  边界条件
    •	dp[0] = 1（空字符串的解码方式）。
    •	dp[1] = 1（只要 s[0] ≠ '0'）。
 */

function numDecodings(s: string): number {
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = s[0] === "0" ? 0 : 1;

  for (let i = 2; i <= n; i++) {
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }
    if (s[i - 2] === "1" || (s[i - 2] === "2" && s[i - 1] <= "6")) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
}
