class Solution {
    public int removeDuplicates(int[] nums) {
        int k=0;
    for(int n: nums) if(nums[k] != n) nums[++k] = n;
    return k+1;      
    }
}