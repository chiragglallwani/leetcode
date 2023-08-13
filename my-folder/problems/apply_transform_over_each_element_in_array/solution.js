/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let table = [];
    for(let i = 0; i < arr.length; i++){
        table[i] = fn(arr[i],i);
    }
    return table;
};