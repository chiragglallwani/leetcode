/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let index = 0; //counter for the range of characters inside the prefix
	//for every element inside the array check if the character in the position of the index equals the same character in our anchor, 
	//as every character is forced to match we can consider the element at position 0 the anchor for comparison of each element, and if it does, increase our index
	while(strs.every(element => strs[0][index] !== undefined && strs[0][index] === element[index]) && ++index);
	return strs[0].substring(0,index); //extract the prefix from the anchor using index
};