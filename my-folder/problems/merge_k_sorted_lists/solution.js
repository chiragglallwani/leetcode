/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    if(lists.length === 0 || lists == null) return null;

    return sortedKLinkedLists(lists, 0, lists.length-1);
};

var sortedKLinkedLists = function(lists, start, end){
    if(start >= end) return lists[start];

    let mid = Math.floor(start + (end - start)/2);
    
    let l1 = sortedKLinkedLists(lists, start, mid);
    let l2 = sortedKLinkedLists(lists, mid+1,end);

    return merge(l1,l2);
}

var merge = function(l1,l2){
    if(l1 === null) return l2;
    if(l2 === null) return l1;

    if(l1.val < l2.val){
        l1.next = merge(l1.next,l2);
        return l1;
    }else{
        l2.next = merge(l1, l2.next);
        return l2;
    }
}