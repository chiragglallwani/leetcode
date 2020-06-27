class Solution {
    public List<List<Integer>> threeSum(int[] nums) 
    {
        List<List<Integer>> three_sum_list = new LinkedList<>();
        Set<List<Integer>> setList = new HashSet<>();
        Set<Integer> set = new HashSet<>();
        
        Arrays.sort(nums);
        
        int opp_number = 0;
        for(int i = 0; i <=nums.length - 2; i++)
        {
            for(int j = i+ 1; j <=nums.length - 1; j++)
            {
                opp_number = -(nums[i] + nums[j]);
                if(set.contains(opp_number))
                {
                    ArrayList<Integer> arr= new ArrayList();
                    arr.add(nums[i]);
                    arr.add(nums[j]);
                    arr.add(opp_number);
                    if(!setList.contains(arr))
                    {
                        three_sum_list.add(arr);
                        setList.add(arr);
                    }
                }
            }
            set.add(nums[i]);
        }
        return three_sum_list;
    }
}