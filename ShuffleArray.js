const shuffleArray = (array, n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(array[i], array[i + n]);
  }
  return result;
};

console.log(shuffleArray([2, 5, 1, 3, 4, 7], 3));
