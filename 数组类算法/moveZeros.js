/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let nums = [0, 1, 0, 3, 12];
var moveZeroes = function (nums) {
  let prev = 0,
    next = 1;
  while (next < nums.length) {
    // 第一次提交, 部分通过.纸上设计时, 过早收束了switch条件;
    if (nums[prev] == 0 && nums[next] != 0) {
      nums[prev] = nums[next];
      nums[next] = 0;
      prev += 1;
    }
    next++;
  }
};

moveZeroes(nums);
console.log(nums);
