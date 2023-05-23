const maximumWealth = (accounts) => {
  let max = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    if (sum > max) {
      console.log(max);
      max = sum;
    }
  }
  return max;
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
);

// [[1,2,3],[3,2,1]]
// [[1,5],[7,3],[3,5]]
// [[2,8,7],[7,1,3],[1,9,5]]
