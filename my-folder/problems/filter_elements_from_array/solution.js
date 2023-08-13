/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let table = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i],i)){
            table.push(arr[i])
        }
    }
    return table;
};