/**
 *  https://leetcode.cn/problems/group-anagrams/description/
 * 	•	字母异位词排序后一定相等，因此：
    •	对每个字符串排序，得到标准化的键（key）。
    •	使用 哈希表（Map） 存储相同键的字符串，将它们分组。
    •	最终返回哈希表中的所有分组。
 */

function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  for (const str of strs) {
    const key = str.split("").sort().join("");
    if (map.has(key)) {
      map.get(key)!.push(str);
    } else {
      map.set(key, [str]);
    }
  }
  return Array.from(map.values());
}