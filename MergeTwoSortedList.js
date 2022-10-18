// var mergeSort = (list1, list2) => {
//   console.log(list1.length);
//   console.log(list2.length);

//   if (list1.length == 0) {
//     return list2;
//   } else if (list2.length == 0) {
//     return list1;
//   } else {
//     // var mid = Math.floor(list1.length / 2);

//     var left = list1;
//     var right = list2;
//     return merge(left, right);
//   }
// };

var mergeSort = (list1, list2) => {
  if (list1.length == 0) {
    return list2;
  } else if (list2.length == 0) {
    return list1;
  } else {
    var left = list1;
    var right = list2;
  }

  var result = [];
  var i = 0;
  var j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
};

console.log(mergeSort([1, 2, 4, 6], [1, 2, 4]));
