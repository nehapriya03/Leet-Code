var isValid = function (s) {
  var stack = [];
  var map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (var i = 0; i < s.length; i++) {
    var c = s[i];
    if (c in map) {
      stack.push(c);
    } else {
      if (stack.length === 0) {
        return false;
      }
      var last = stack.pop();
      if (map[last] !== c) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid("{[]}"));
