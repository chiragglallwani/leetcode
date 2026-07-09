# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeNodesRecursively(self, dummyNode: Optional[ListNode], list1: Optional[ListNode], list2: Optional[ListNode]):
        if not list1:
            dummyNode.next = list2
            return
        elif not list2:
            dummyNode.next = list1
            return
        else:
            print("list1 and list2")
            if list1.val <= list2.val:
                dummyNode.next = list1
                self.mergeNodesRecursively(dummyNode.next, list1.next, list2)
            else:
                dummyNode.next = list2
                self.mergeNodesRecursively(dummyNode.next, list1, list2.next)
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        dummyNode = ListNode(-1)
        self.mergeNodesRecursively(dummyNode, list1, list2)
        return dummyNode.next
         