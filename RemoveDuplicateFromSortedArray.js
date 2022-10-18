var removeDuplicates = function (nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  while (i != 0) {
    nums.push("_");
    i--;
  }
  console.log(i);

  return nums.length;
};
