/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    return nums.join() == [...nums].sort((a, b) => a - b).join() || nums.join() == [...nums].sort((a, b) => b - a).join();
};