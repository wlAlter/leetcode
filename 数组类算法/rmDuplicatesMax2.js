/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let prev = 0,
    next = 0,
    dupl = 0;
  while (next < nums.length) {
    if (nums[prev] != nums[next]) {
      prev += 1;
      dupl = 0;
      nums[prev] = nums[next];
    } else {
      dupl++;
    }
    next++;
    console.log("dupl", dupl);
  }
  return prev;
};

let nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
console.log(removeDuplicates(nums));
console.log(nums);
