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
var deleteDuplicates = function(head) {
    var crr = head;
    while(crr){
        if(crr.next != undefined && crr.val == crr.next.val){
            crr.next = crr.next.next;
        }
        else{
            crr = crr.next;
        }
    }
    return head;
};