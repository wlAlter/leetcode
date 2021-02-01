/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0;
  while (index < nums.length) {
    if (nums[index] == val) {
      nums.splice(index, 1);
    } else {
      index++;
    }
  }
  return nums.length;
};
let nums = [0, 1, 2, 2, 3, 0, 4, 2];

console.log(removeElement(nums, 2));
console.log(nums);
