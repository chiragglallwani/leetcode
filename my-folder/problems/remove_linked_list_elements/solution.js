/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head) return head;
    let dummy = new ListNode(-1);
    dummy.next = head; //[-1, 1,2,6,3,4,5,6]
    let prev = dummy; //[-1, 1,2,6,3,4,5,6]
    let curr = head; //[1,2,6,3,4,5,6]
    console.log(dummy);
    console.log(prev);
    console.log(curr);
    while(curr){
        if(curr.val == val){
            prev.next = curr.next;
            curr = curr.next;

        }else{
            prev = curr;
            curr = curr.next;
        }
    }
    return dummy.next;
};