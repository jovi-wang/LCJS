/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

    const nodeSeen = new Set();
    let current = head;
    while(current!==null){
        if(nodeSeen.has(current)) return current;
        else nodeSeen.add(current);

        current=current.next;
    }
    return null;
};