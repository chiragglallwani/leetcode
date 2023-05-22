/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let chars = {};
    for(let char of nums){
        chars[char] = chars[char] + 1 || 1;
    }
    return parseInt(Object.keys(chars).filter(ele => chars[ele] === Math.max.apply(null, Object.values(chars))));
    
};