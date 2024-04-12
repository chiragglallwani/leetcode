/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length < 2) return intervals

    intervals.sort((a,b) => a[0] - b[0])
    let result = []
    let prev = intervals[0]

    for(let i = 1; i < intervals.length; i++){
        if(prev[1] >= intervals[i][0]){
            prev = [prev[0], Math.max(prev[1], intervals[i][1])]
        }
        else{
            result.push(prev)
            prev = intervals[i]
        }
    }

    result.push(prev)

    return result
};