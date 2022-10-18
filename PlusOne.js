var plusOne = function (digits) {
  var last = digits[digits.length - 1];
  if (last === 9 && digits.length === 1) {
    digits[0] = 1;
    digits.push(0);
  } else if (last === 9 && digits.length > 1) {
    for (var i = digits.length - 1; i >= 0; i--) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i] += 1;
        break;
      }
    }
  } else {
    digits[digits.length - 1] += 1;
  }
  if (digits[0] === 0) {
    digits.unshift(1);
  }

  return digits;
};

console.log(plusOne([9, 9, 9]));
