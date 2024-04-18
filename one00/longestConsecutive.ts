/**
 * 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题
 * 
 * 
    示例 1：

    输入：nums = [100,4,200,1,3,2]
    输出：4
    解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。

    示例 2：

    输入：nums = [0,3,7,2,5,8,4,6,0,1]
    输出：9
 * 
 * @param nums 
 */

// function longestConsecutive(nums: number[]): number {
//   const maxNum = 1000000000;
//   const bucket: number[] = [];

//   for(let i=0; i<nums.length; i++) {
//     bucket[nums[i] + maxNum] = 1;
//   }

//   const lengths = [];
//   let acc = 0;
//   for(let i=0;i<maxNum * 2; i++) {
//     if (bucket[i] === 1) {
//         acc = acc + 1;
//     } else {
//         if (acc !== 0) {
//           lengths.push(acc);            
//         }
//         acc = 0;
//     }
//   }

//   return Math.max(...lengths);
// }

// function longestConsecutive(nums: number[]): number {
//   const maxNum = Math.max(...nums);
//   const minNum = Math.min(...nums);

//   const bucket: number[] = [];

//   for(let i=0; i<nums.length; i++) {
//     bucket[nums[i] - minNum] = 1;
//   }

//   const lengths = [];
//   let acc = 0;
//   for(let i=0;i < (maxNum - minNum + 1); i++) {
//     if (bucket[i] === 1) {
//         acc = acc + 1;
//     } else {
//         if (acc !== 0) {
//           lengths.push(acc);            
//         }
//         acc = 0;
//     }
//   }

//   return Math.max(...lengths, acc);
// }

// 使用了 sort 时间复杂度 O(nlgn)，而且时间和空间还取决于最大值和最小值O(max - min)
// function longestConsecutive(nums: number[]): number {

//   if (nums.length === 0) {
//     return 0;
//   }

//   const sortedNums = nums.sort((a, b) => a > b ? 1 : -1);

//   const lengths = [];
//   let acc = 1;
//   for(let i = 0; i < sortedNums.length; i++) {
//     if (i === 0) {
//       acc = 1;
//     } else {
//       if (sortedNums[i] - sortedNums[i - 1] === 1) {
//         acc += 1;
//       } else if (sortedNums[i] === sortedNums[i - 1]) {
//         acc = acc;
//       } else {
//         lengths.push(acc);
//         acc = 1;
//       }
//     }
//   }

//   return Math.max(...lengths, acc);
// }

// 外侧循环 O(n)，内侧循环O(n)，考虑极端情况 [1, 2, 3, 4] 为 n - 1 + n => 2n - 1
// [4, 3, 2, 1] n + n - 1
// 外循环判断减-，内循环+1，达到On的效果，核心在"存在前驱数就没有枚举的必要了，肯定不如之前的长"
function longestConsecutive(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  const numsSet = new Set();
  nums.forEach(num => numsSet.add(num));

  let maxLength = 0;
  for(let i=0; i<nums.length; i++) {
    let length = 1;

    // 存在前驱数就没有枚举的必要了，肯定不如之前的长
    if (!numsSet.has(nums[i] - 1)) {
      let nextNum = nums[i] + 1;
      while(numsSet.has(nextNum)) {
        length += 1;
        nextNum++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
}

// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
// console.log(longestConsecutive([100,4,200,1,3,2]))
console.log(longestConsecutive([0,1,2,4,8,5,6,7,9,3,55,88,77,99,999999999]))
// console.log(longestConsecutive([1,2,0,1]))
