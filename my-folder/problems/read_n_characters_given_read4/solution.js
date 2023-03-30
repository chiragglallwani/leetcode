/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
    /**
     * @param {character[]} buf Destination buffer
     * @param {number} n Number of characters to read
     * @return {number} The number of actual characters read
     */
    return function(buf, n) {
        let temp = Array(4), eof = false, cnt = 0;
        
        while (cnt < n && !eof) {
            let read = read4(temp);
            console.log(read);
            for (let i = 0; i < read && cnt < n; i++) {
                buf[cnt++] = temp[i];
            }
            
            eof = read < 4;
        }
        
        return buf;
    };
};