/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    if(s.length === 0) return t;
    s = [...s].sort((a, b) => a.localeCompare(b)).join("");
    t = [...t].sort((a, b) => a.localeCompare(b)).join("");
    console.log(s)
    let i = 0, j = 0;
    let char = ""
    while((j < t.length)){
        if(s[i] !== t[j]){
            char = t[j].toString();
            break;
        }
        i++;
        j++;
    }
    return char;
};