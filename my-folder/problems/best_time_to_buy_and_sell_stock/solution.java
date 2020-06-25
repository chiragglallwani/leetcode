class Solution {
    public int maxProfit(int[] prices) {
       int profit = 0;
        int i = 0;
        while(i < prices.length-1)//for(int i  = 0; i < prices.length - 1; i++)
        {
            int j = i+ 1;
            while(j < prices.length)
            {
                if(prices[j] > prices[i])
                {
                        if(prices[j] - prices[i] > profit)
                            profit = prices[j] - prices[i];
                }
                j++;
            }
            i++;
        }
        return profit;
    }
}