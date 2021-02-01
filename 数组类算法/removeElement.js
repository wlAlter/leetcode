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
// 85/113个通过测试用例
// input [0,1,2,2,3,0,4,2]
// output [0,1,2,3,0,4]
// 预期 [0,1,4,0,3]
// 忽略了删除元素后, array下标前移
