/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    if (element == val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};
let nums = [3, 2, 2, 3];

console.log(removeElement(nums, 3));
console.log(nums);
