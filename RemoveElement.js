var removeElement = function (nums, val) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
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

console.log(removeElement([3, 2, 2, 3], 3));
