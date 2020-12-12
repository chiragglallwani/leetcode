/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reverseInt = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    if(reverseInt > 2**31) return 0;
    return reverseInt* Math.sign(x);
};