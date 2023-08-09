/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sum = (n * (n + 1))/2;
    let arrSum = nums.reduce((acc, curr) => acc + curr,0);
    return sum - arrSum;
};