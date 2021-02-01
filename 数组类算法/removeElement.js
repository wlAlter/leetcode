/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let swapIndex = nums.length - 1;
  let index = 0;
  while (index <= swapIndex) {
    if (nums[index] == val) {
      nums[index] = nums[swapIndex];
      nums[swapIndex] = val;
      swapIndex--;
    } else {
      index++;
    }
  }
  return swapIndex + 1;
};
// let nums = [1];
let nums = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(nums, 2));
console.log(nums);
