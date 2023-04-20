/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let chars = {};
    for (let char of nums){
        chars[char] = chars[char] + 1 || 1;
    }
    console.log(chars);
    return parseInt(Object.keys(chars).filter(value => chars[value] === Math.max.apply(
        null, Object.values(chars))));
};