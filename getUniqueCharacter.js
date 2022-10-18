function getUniqueCharacter(s) {
  for (i = 0; i < s.length; i++) {
    if (s.indexOf(s[i] == s.lastIndexOf(s[i]))) {
      return i;
    } else {
      retun - 1;
    }
  }

  // Write your code here
}

console.log(getUniqueCharacter("statistics"));
