var lengthOfLastWord = function (s) {
  var words = s.split(" ");
  console.log(words);
  for (var i = 0; i < words.length; i++) {
    if (words[i] == "") {
      words.splice(i, 1);
      i--;
    }
  }
  var lastWord = words[words.length - 1];
  return lastWord.length;
};

console.log(lengthOfLastWord("  fly me   to   the moon  "));
