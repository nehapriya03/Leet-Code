class Node {
  constructor(val) {
    this.key = val; //number or char string
    this.left = null; //data type of circle is Node
    this.right = null; //data type of circle is Node
  }
}

// var maxDepth = function (node) {
//   let ldepth;
//   let rdepth;
//   if (!node) return 0;
//   else {
//     if (node.left) {
//       ldepth = maxDepth(node.left);
//       console.log(ldepth);
//     }
//     if (node.right) {
//       rdepth = maxDepth(node.right);
//     }
//   }
//   if (ldepth > rdepth) {
//     console.log("ldepth: ", ldepth);
//     return ldepth + 1;
//   } else {
//     console.log("rdepth: ", rdepth);
//     return rdepth + 1;
//   }
// };

// root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);
// maxDepth(root);

var maxDepth = (node) => {
  if (!node) return 0;
  //   return maxDepth(node.left) + 1;
  console.log(maxDepth(node.left));
  return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
};

// const maxDepth = (root) => {
//   let maxDepth1 = 0; //2
//   let BFS = (node, level) => {
//     if (node === null) return;
//     if (level > maxDepth1) maxDepth1 = level; //maxDepth 3
//     BFS(node.left, level + 1); //3
//     BFS(node.right, level + 1); //2
//   };
//   BFS(root, 1);
//   return maxDepth1;
// };

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(maxDepth(root));
