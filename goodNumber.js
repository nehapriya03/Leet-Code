const goodNumber = (nums) => {
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = i; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        count++;
      }
    }
  }
  return count;
};

console.log(goodNumber([1, 2, 3, 1, 1, 3]));
