/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const numsMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (numsMap.has(nums[i]) && (Math.abs(numsMap.get(nums[i]) - i) <= k)) return true
        numsMap.set(nums[i], i)
    }
    return false
};