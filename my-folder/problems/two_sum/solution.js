/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashtable ={};
    for(let i = 0; i < nums.length; i++){
        if(hashtable[target - nums[i]] !== undefined) // if target -nums[i] = val has index in hashtable return index
            return [hashtable[target - nums[i]], i]
        else{
            hashtable[nums[i]] = i;
        }
    }
};