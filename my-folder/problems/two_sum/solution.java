import java.util.*;
class Solution {
    public int[] twoSum(int[] nums, int target) {
        
        int[] newArray = new int[2];
        for(int i  = 0; i < nums.length; i++)
        {
            int number1 = nums[i];
            for(int j = i + 1; j < nums.length; j++)
            {
                int number2 = nums[j];
                if((number1 + number2) == target)
                {
                    newArray[0] = i;
                    newArray[1] = j;
                    return newArray;
                }
                
            }
        }
        
       return newArray;
    }
}