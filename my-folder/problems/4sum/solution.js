/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a,b) => a - b);
    let result = [];
    let obj = new Set();
    for(let i =0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++ ){
            let leftPtr = j + 1, rightPtr =nums.length - 1;

            while(leftPtr < rightPtr){
                let sum = nums[i] + nums[j] + nums[leftPtr] + nums[rightPtr];
                if(sum === target){
                    let temp = `${nums[i]}${nums[j]}${nums[leftPtr]}${nums[rightPtr]}`;
                    if(!obj.has(temp)){
                        result.push([nums[i], nums[j], nums[leftPtr], nums[rightPtr]])
                        obj.add(temp)
                    }
                    leftPtr++;
                }
                else if(sum < target){
                    leftPtr++;
                }
                else{
                    rightPtr--;
                }
            }
        }
    }

    return result;
}