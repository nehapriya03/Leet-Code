class Node {
  constructor(val) {
    this.key = val; //number or char string
    this.left = null; //data type of circle is Node
    this.right = null; //data type of circle is Node
  }
}

let result = [];
function printInorder(node) {
  //inorder left,node,right
  if (node === null) return;
  if (node.left) {
    printInorder(node.left);
  }
  if (node.key) {
    result.push(node.key);
  }
  if (node.right) {
    printInorder(node.right);
  }

  return result;
}

let result2 = [];
function printPreorder(node) {
  //preorder node,left,right
  if (node === null) return;
  if (node.key) {
    result2.push(node.key);
  }
  if (node.left) {
    printPreorder(node.left);
  }
  if (node.right) {
    printPreorder(node.right);
  }

  return result2;
}

const postorderTraversal = (root) => {
  const ans = [];
  const postOrderDFS = (node) => {
    if (!node) return;
    if (node.left) postOrderDFS(node.left);
    if (node.right) postOrderDFS(node.right);
    ans.push(node.key);
    return;
  };
  postOrderDFS(root);
  return ans;
};

var root = new Node(1);
// root.left = new Node(null);
// root.right = new Node(2);
// root.right.left = new Node(3);
// console.log(printInorder(root));
// console.log(printPreorder(root));
console.log(postorderTraversal(root));
