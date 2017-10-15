
function ListNode(val) {
     this.val = val;
     this.next = null;
 }

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let nodesSeen = new Set();
    while (head !== null) {
        if (nodesSeen.has(head)) {
            return true;
        } else {
            nodesSeen.add(head);
        }
        head = head.next;
    }
    return false;
};
//using two pointer
var hasCycle2 = function(head) {
    if (head === null || head.next === null) {
        return false;
    }
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
//LC237
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};