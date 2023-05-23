const runningSum = (nums) => {
  let result = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
};

console.log(runningSum([1, 2, 3, 4]));
