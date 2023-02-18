/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let list3 = new ListNode(-1);
    let t3 = list3;
    
    // while both list not empty iterate through each of them
    while (list1 !== null && list2 !== null){
        if(list1.val <= list2.val){
            t3.next = list1;
            list1 = list1.next;
        }else{
            t3.next = list2;
            list2 = list2.next;
        }
        t3 = t3.next;
    }
    t3.next = (list1===null)?list2:list1;
    return list3.next;
};