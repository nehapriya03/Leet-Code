const sortedSquares = (arr) => {
  const result = arr.map((num) => num * num).sort((a, b) => a - b);
  return result;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
