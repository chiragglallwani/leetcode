/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode firstList = l1, secondList = l2, current = dummyHead;
        int carry = 0;
        while(firstList != null || secondList != null)
        {
            int x = (firstList != null) ? firstList.val : 0;
            int y = (secondList != null) ? secondList.val : 0;
            int sum = carry + x + y;
            carry = sum / 10;
            current.next = new ListNode(sum % 10);
            current = current.next;
            if( firstList != null) firstList = firstList.next;
            if(secondList != null) secondList = secondList.next;
        }
        
        if(carry > 0){
            current.next = new ListNode(carry);
        }
        return dummyHead.next;
    }
}