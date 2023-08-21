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
var sortList = function(head) {
    if(!head) return null;

    let node = [];
    while(head){
        node.push(head);
        head = head.next;
    }

    node.sort((a,b) => a.val - b.val);
    for(let i = 0; i < node.length; i++){
        node[i].next = node[i+1] || null;
    }

    return node[0];
};