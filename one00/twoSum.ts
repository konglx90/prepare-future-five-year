// https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked
function twoSum(nums: number[], target: number): number[] {
  for(let i = 0; i < nums.length - 1; i++) {
  for(let j = i+1; j < nums.length; j++) {
    if (nums[i] + nums[j] === target) {
      return [i, j]
    }
  }
}
return [-1, -1];
};

console.log(twoSum([1, 2, 3, 6], 9));