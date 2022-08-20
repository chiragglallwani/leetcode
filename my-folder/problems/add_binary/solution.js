/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let top = a.length - 1;
    let bottom = b.length -1;
    
    let answer = [];
    let carry = 0;
    
    while ((top >= 0 || bottom >= 0) || carry === 1) {
        
        // Ex. 1 + 1 + 0
        let sum = (a[top] ? parseInt(a[top]) : 0) + (b[bottom] ? parseInt(b[bottom]) : 0) + carry;
        
		// Any carry that may be coming from the previous loop gets erased here.
        carry = 0;
        
        // 2 % 2 = 0 -> There is a carry in this case.
        answer.unshift(sum % 2);
        
        if (sum > 1) carry = 1;
        
        top--;
        bottom--;
    }
    
    return answer.join("");
};