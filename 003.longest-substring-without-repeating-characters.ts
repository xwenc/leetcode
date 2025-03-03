/**
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/
 * 
 * 	1.	维护一个滑动窗口 Set：
    •	left 指向滑动窗口左边界，right 遍历字符串扩展窗口。
    •	用 Set 记录当前窗口内的字符，避免重复。
    2.	移动 right，扩展窗口：
    •	如果 s[right] 不在 Set 中，加入窗口，更新 maxLength。
    •	如果 s[right] 在 Set 中，说明有重复字符，需要缩小窗口：
    •	删除 s[left]，left++，直到 s[right] 不再重复。
    3.	继续扩展 right，直到遍历完整个字符串。
 */

function lengthOfLongestSubstring(s: string): number {
  let left = 0, right = 0;
  let maxLength = 0;
  const set = new Set<string>();

  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right]);
      maxLength = Math.max(maxLength, right - left + 1);
      right++;
    } else {
      set.delete(s[left]);
      left++;
    }
  }

  return maxLength;
}