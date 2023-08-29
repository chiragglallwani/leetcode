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
var insertionSortList = function(head) {
    let nums = [], idx = 0;
    while(head){
        nums[idx] = head.val;
        idx++;
        head = head.next;
    }

    for(let i = 1; i < nums.length; i++){
        let temp = nums[i];
        let red = i - 1;
        while(nums[red] > temp && red >= 0){
            nums[red+1] = nums[red];
            red--;
        }
        nums[red+1] = temp;
    }

    let dummyHead = nums.reverse().reduce((acc,curr) => {
        if(acc == null) acc = new ListNode(curr);
        else acc = new ListNode(curr, acc);
        return acc;
    }, null)

    return dummyHead;
};