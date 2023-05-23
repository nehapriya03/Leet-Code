class Node {
  constructor(val) {
    this.key = val; //number or char string
    this.left = null; //data type of circle is Node
    this.right = null; //data type of circle is Node
  }
}

var checkTree = function (root) {
  return root.key === root.left.key + root.right.key;
};

root = new Node(10);
root.left = new Node(4);
root.right = new Node(6);

console.log(checkTree(root));
