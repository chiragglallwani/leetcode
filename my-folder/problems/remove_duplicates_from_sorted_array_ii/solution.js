/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 3) return nums.length;
    let count = 2;
    for(let i = 2; i< nums.length; i++){
        if(nums[i] != nums[count-2] || nums[i] != nums[count-1]) nums[count++] = nums[i];
    }
    return count;
};