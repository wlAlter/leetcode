/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nums = [0, 1, 0, 3, 12];
var moveZeroes = function (nums) {
  let prev = 0,
    next = 1;
  while (next < nums.length) {
    if (nums[prev] == 0) {
      if (nums[next] != 0) {
        nums[prev] = nums[next];
        nums[next] = 0;
      }
    } else {
      if (nums[next] != 0) {
        prev += 1;
        next += 1;
      }
    }
    prev += 1;
    next += 1;
  }
};

moveZeroes(nums);
console.log(nums);
// 这次format失败了. 因为错误放置了prev+=1
