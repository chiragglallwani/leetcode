/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let valuesFound = [];
    while(head){
        valuesFound.push(head.val);
        head = head.next;
    }

    let start = 0, end = valuesFound.length - 1;
    while(start <= end){
        if(valuesFound[start] !== valuesFound[end]) return false;
        start++, end--;
    }

    return true;
};