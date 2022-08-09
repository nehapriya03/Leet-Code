var isPalindrome = function (x) {
  //1221
  if (x < 0) return false;
  if (x < 10) return true;
  let y = x.toString();
  if (y.length == 2 && y[0] === y[1]) {
    return true;
  } else {
    for (let i = 0; i < y.length; i++) {
      if (y[i] !== y[y.length - 1 - i]) return false;
    }
  }

  return true;
};

console.log(isPalindrome(10));
