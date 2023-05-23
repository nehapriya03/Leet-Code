class Node {
  constructor(val) {
    this.key = val; //number or char string
    this.left = null; //data type of circle is Node
    this.right = null; //data type of circle is Node
  }
}

const averageOfLevels = function (root) {
  let queue = [];
  if (root === null) {
    return;
  } else {
    queue.push(root.key);
    while (queue.length > 0) {
      //   if (root.left && root.right) {
      queue.push((root.left.key + root.right.key) / 2);
    }
  }
  return queue;
};

root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(averageOfLevels(root));
