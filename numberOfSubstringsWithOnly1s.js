const numberOfSubstringsWithOnly1s = (s) => {
  let count = 0;
  let i = 0;
  let j = 0;
  let k = 0;
  while (j < s.length) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] == 1) {
        count++;
      }
      if (s[i] == 1 && s[i + 1] == 1) {
        count++;
      }
      if (s[i] == 1 && s[i + 1] == 1 && s[i + 2] == 1) {
        count++;
      }
    }
    return count;
  }
};

console.log(numberOfSubstringsWithOnly1s([1, 0, 1, 1, 0, 1]));
