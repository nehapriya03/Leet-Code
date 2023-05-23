const singleNumber = (nums) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (arr.includes(nums[i])) {
      arr.splice(arr.indexOf(nums[i]), 1);
      console.log(arr, "here");
    } else {
      arr.push(nums[i]);
      console.log(arr);
    }
  }
  return arr[0];
};

console.log(singleNumber([1]));
