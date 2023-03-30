/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    //s=foo
    //t=bar
    // i = 2
    for(let i = 0; i < s.length; i++){
      let index1 = s.indexOf(s[i]); // 1
      let index2 = t.indexOf(t[i]); // 2
      if(t[index1] !== t[i] || s[index2] !== s[i]) return false
    }

    return true;
};