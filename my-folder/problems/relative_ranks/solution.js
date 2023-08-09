/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    let hashArray = new Array();
    for(let i = 0; i < score.length; i++){
        hashArray.push([score[i], i]);
    }
    hashArray.sort((a,b) => b[0] - a[0]);
    let output = new Array(score.length);
    for(let i = 0; i < output.length; i++){
        if(i == 0){
            output[hashArray[i][1]] = "Gold Medal"
        }
        else if(i == 1){
            output[hashArray[i][1]] = "Silver Medal"
        }
        else if(i == 2){
            output[hashArray[i][1]] = "Bronze Medal"
        }
        else {
            output[hashArray[i][1]] = (i+1).toString();
        }
    }
    return output;
};