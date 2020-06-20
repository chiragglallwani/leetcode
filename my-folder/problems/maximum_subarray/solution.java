class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0], curSub = 0;
        for(int n : nums){
            if(curSub < 0){
                curSub = 0;
            }
            curSub += n;
            maxSum = Math.max(maxSum, curSub);
        }
        return maxSum;
    }
}