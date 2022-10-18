function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let tail = dummy;

  while (list1 && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }

  if (list1 !== null) {
    tail.next = list1;
  } else if (list2 !== null) {
    tail.next = list2;
  }

  return dummy.next;
};

console.log(mergeTwoLists([1, 2, 4], [1]));
