/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let numsMap = new Map()
    let start = nums[0]
    let seqNums = []
    if(nums.length === 1) return [`${nums[0]}`]
    for(let index = 1; index < nums.length; index++){
        if(nums[index] - nums[index - 1] > 1){
            numsMap.set(start, nums[index - 1])
            start = nums[index]
        }
        if(index === nums.length - 1) numsMap.set(start, nums[index])
    }
    for(let [beg, end] of numsMap){
        if(beg === end) seqNums.push(`${beg}`)
        else seqNums.push(`${beg}->${end}`)
    }
    return seqNums;
    
    // Iterate over the nums array from index 1
    // if nums[index] - nums[index - 1] > 1
        // numsMap.set(start, nums[index-1]) --> "0->4"
        // start = nums[index]
    // if(index === nums.length - 1) numsMap.set(start, nums[index])

// for(let [start, end] of numsMap)
    //seqNums.push(`"{start}->{end}"`)
    
};