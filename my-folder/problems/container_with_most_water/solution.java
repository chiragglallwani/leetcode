class Solution {
    public int maxArea(int[] height) {
        int area = 0;
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;
        int left = 0;
        int right = height.length - 1;
        while(left < right)
        {
            min = Math.min(height[left], height[right]);
            max = Math.max(max, min * (right-left));
            if(height[left] < height[right])
            {
                left++;
            }
            else
                right--;
        }
        return max;
        /*int container_height = 0;
        if(height.length > 2)
        {
            int left = 0;
            
           while(left < height.length)
           {
               int right = height.length - 1;
               while(left < right)
               {
                   if(height[left] <  height[right])
                {
                    container_height = height[left];
                    if(container_height * (right - left) > area)
                        area = container_height * (right - left);
                }
                else
                {
                    container_height = height[right];
                    if(container_height * (right - left) > area)
                        area = container_height * (right - left);
                }
                   right--;
               }
               left++;
           }
        }
        else if(height.length == 2)
        {
            if(height[0] > height[1])
            {
                area = height[1];
            }
            else{
                area = height[0];
            }
        }
        else {
            area = 0;
        }
        return area;*/
    }
}
