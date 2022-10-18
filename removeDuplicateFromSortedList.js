var deleteDuplicates = function (head) {
  let left = head;
  let next = head;

  while (left != null) {
    while (next != null && next.val === left.val) {
      next = next.next;
    }
    left.next = next;
    left = next;
    if (next != null) next = next.next;
  }
  return head;
};
console.log(deleteDuplicates([1, 1, 2]));
