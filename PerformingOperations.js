const finalResult = (operations) => {
  let result = 0;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] === "++X" || operations[i] === "X++") {
      result++;
    } else if (operations[i] === "--X" || operations[i] === "X--") {
      result--;
    }
  }
  return result;
};

console.log(finalResult(["--X", "X++", "X++"]));
