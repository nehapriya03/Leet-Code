const mostWordsFound = (sentences) => {
  let mostWords = 0;
  for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i].split(" ");
    if (words.length > mostWords) {
      mostWords = words.length;
    }
  }
  return mostWords;
};

console.log(
  mostWordsFound([
    "alice and bob love leetcode",
    "i think so too",
    "this is great thanks very much",
  ])
);
