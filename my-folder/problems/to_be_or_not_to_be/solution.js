/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe(value1) {
            if(val !== value1) throw Error("Not Equal");
            else return true;
        },
        notToBe(value1){
            if(val === value1) throw Error("Equal");
            else return true;
        }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */