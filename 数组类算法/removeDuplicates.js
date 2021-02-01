/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let prev = 0,
    next = 0;
  while (next < nums.length) {
    if (nums[prev] != nums[next]) {
      prev += 1;
      nums[prev] = nums[next];
    }
    next++;
  }
  return prev + 1;
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
console.log(nums);
