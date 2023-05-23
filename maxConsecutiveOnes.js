const maxConsecutiveOnes = (nums) => {
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      console.log(count);
    } else {
      count = 0;
    }
    if (count > max) {
      max = count;
      console.log(max);
    }
  }
  return max; // 1
};

console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
