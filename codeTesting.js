(nums = [2, 11, 7, 15]), (target = 9);

let arr = [];
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        arr.push(i, j);
      }
    }
  }
  console.log(arr);
  return arr;
};

twoSum(nums, target);