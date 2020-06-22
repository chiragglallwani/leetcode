class Solution {
    public int searchInsert(int[] nums, int target) {
        int found_index = 0;
        for(int i = 0; i < nums.length; i++){
            if(nums[i] == target){
              found_index = i;
                break;
            }else if(nums[0] > target){
                found_index = 0;
                break;
            }
            else if(nums[nums.length - 1] < target){
                found_index = nums.length;
                break;
            }
            else if (nums[i] != target && nums[i] > target){
                found_index = i;
                break;
            }
        }
        return found_index;
    }
}