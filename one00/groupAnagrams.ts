/**
 * https://leetcode.cn/problems/group-anagrams/description/?envType=study-plan-v2&envId=top-100-liked
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
 * 字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 * 输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * @param strs 
 */
function groupAnagrams(strs: string[]): string[][] {
//   const numedGroup = strs
//       .map(item => item.split('').reduce(
//         (acc, cur) => 2 ** (cur.charCodeAt(0) - 96) + acc,
//       0));
  const numedGroup = strs
      .map(item => item.split("").sort().join());

  const hasGrouped = {};
  const ret: string[][] = [];
  for(let i = 0; i < numedGroup.length; i++) {
    if (!hasGrouped[i]) {
      ret.push([strs[i]])
      hasGrouped[i] = 1;
    }
    for(let j = i + 1; j < numedGroup.length; j++) {
      if (numedGroup[i] === numedGroup[j] && !hasGrouped[j]) {
        hasGrouped[j] = 1;
        ret[ret.length - 1].push(strs[j]);
      }
    }
  }

  return ret;
};

// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat","ac","bd","aac","bbd","aacc","bbdd","acc","bdd"]))