/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let m = new Map();
    for (let char of s) {
        if (m.has(char)) m.delete(char);
        else m.set(char,1);
    }
    return (m.size === 0 || m.size === 1) ? true : false;
};