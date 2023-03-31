/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(wordsDict, word1, word2) {
    let minDiff = Infinity;
    let firstIdx = null;
    let secondIdx = null;
    for(let i = 0; i < wordsDict.length; i++) {
        let word = wordsDict[i];
        if(word == word1) firstIdx = i;
        if(word == word2) secondIdx = i;
        
        if(firstIdx !== null && secondIdx !== null) {
            minDiff = Math.min(minDiff, Math.abs(firstIdx - secondIdx));    
        }
    }
    return minDiff;
};