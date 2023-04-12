/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let slow_ptr = head, fast_ptr = head;

    while(fast_ptr && fast_ptr.next){
        slow_ptr = slow_ptr.next;
        fast_ptr = fast_ptr.next.next;
    }
    return slow_ptr;
};