class Solution {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> map = new HashMap<>();
        int len = s.length();
        int ans = 0;
        for(int i = 0, j= 0; i<len; i++)
        {
            if(map.containsKey(s.charAt(i)))
            {
                j = Math.max(map.get(s.charAt(i)), j);
            }
            ans = Math.max(ans, i-j+1);
            map.put(s.charAt(i),i+1);
        }
        return ans;
    }
}