var searchInsert = function (nums, target) {
  if (nums.length == 0) {
    return 0;
  } else if (nums.includes(target)) {
    return nums.indexOf(target);
  } else {
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] > target) {
        return i;
      } else {
        continue;
      }
    }
    return i;
  }
};

console.log(searchInsert([1, 3, 5, 6], 7));
