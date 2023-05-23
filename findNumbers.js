const findNumbers = (arr) => {
  const result = arr.filter((num) => num.toString().length % 2 === 0).length;
  return result;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
