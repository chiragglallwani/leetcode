/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (haystack.includes(needle)) { 
        split = haystack.split(needle) // ["he", "o"]
		return split[0].length   //"he".length === 2 
    }
    return -1
};