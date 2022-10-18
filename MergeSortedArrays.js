// var merge = (nums1, m, nums2, n) => {
//   var i = m - 1; // 2
//   var j = n - 1; // 2
//   var k = m + n - 1; //5

//   while (i >= 0 && j >= 0) {
//     if (nums1[i] > nums2[j]) {
//       // 3>6
//       console.log(nums1[k]);
//       console.log(nums1);
//       nums1[k] = nums1[i];

//       console.log(nums1[i]);
//       i--;
//     } else {
//       nums1[k] = nums2[j];
//       console.log(nums1[k]);
//       console.log(nums2[j]);
//       j--;
//     }
//     k--;
//   }
//   while (j >= 0) {
//     nums1[k] = nums2[j];
//     j--;
//     k--;
//   }
//   return nums1;
// };

const merge = (nums1, m, nums2, n) => {
  var i = nums1.length - 1;

  if (m == 0) {
    return nums2;
  } else if (nums1.length >= 0) {
    while (nums1[i] == 0 && i != nums2.length - 1) {
      nums1.pop();
      i--;
    }
  }
  while (nums2.length > 0) {
    for (var i = 0; i < nums2.length; i++) {
      nums1.push(nums2[i]);
    }

    nums1.sort((a, b) => a - b);

    return nums1;
  }
};
console.log(merge([0], 0, [1], 1));

// var i = m - 1;
// var j = n - 1;
// var k = m + n - 1;
// while (i >= 0 && j >= 0) {
//   if (nums1[i] > nums2[j]) {
//     nums1[k] = nums1[i];
//     i--;
//   } else {
//     nums1[k] = nums2[j];
//     j--;
//   }
//   k--;
// }
// while (j >= 0) {
//   nums1[k] = nums2[j];
//   j--;
//   k--;
// }
// return nums1;
