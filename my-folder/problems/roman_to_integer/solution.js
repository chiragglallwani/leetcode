/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let roman = {'I': 1, 'V':5, 'X': 10, 'L':50, 'C': 100, 'D':500, 'M':1000}, sum = 0;

    if(roman[s]) return roman[s]
    else {
        // VIII = 8
        // XIII = 13
        // MCMXCIV = 1994
        for(let index = s.length - 1; index >= 0; index--){
            if(s.charAt(index - 1) && roman[s.charAt(index - 1)] < roman[s.charAt(index)]){
                sum += roman[s.charAt(index)] - roman[s.charAt(index - 1)];
                index--;
            }
            else{
                sum += roman[s.charAt(index)];
            }
        }
        return sum;
    }
};