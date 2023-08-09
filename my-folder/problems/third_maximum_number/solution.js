/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let distinctNums = [... new Set(nums)].sort((a,b) => a - b);
    console.log(distinctNums)
    if(distinctNums.length > 2) return distinctNums[distinctNums.length - 3];
    else return distinctNums[distinctNums.length - 1];
};