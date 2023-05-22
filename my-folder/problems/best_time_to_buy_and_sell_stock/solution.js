/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let left = 0, right = 1, maxProfit = 0;
  while(right < prices.length){
      if(prices[left] < prices[right]){
          profit = prices[right] - prices[left];
          maxProfit = Math.max(maxProfit, profit);
      }else{
          left = right;
      }
      right++;
  }
  return maxProfit
};