/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numsobj = {};
    for(let num of nums){
        numsobj[num] = numsobj[num] + 1 || 1;
    }
    return Object.values(numsobj).find(element => element > 1) > 1 ? true: false;
    //return Math.max(parseInt(Object.values(numsobj))) > 1 ? true : false;
};