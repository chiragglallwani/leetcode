/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var reverseInt = parseInt(Math.abs(x).toString().split('').reverse().join(''));
    
    if(x === reverseInt){
        return true;
    }
    else{
        return false;
    }
};