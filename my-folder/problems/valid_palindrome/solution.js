/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    //remove all alphanumerics and convert to lowercase
    s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();

    sReverse = s.split("").reverse().join("");
    return s === sReverse;
};