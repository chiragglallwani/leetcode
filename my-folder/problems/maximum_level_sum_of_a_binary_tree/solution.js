/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    if(!root) return 1;

    let q = [root];
    let maxSum = -Infinity;
    let level = 0;
    let minlevel = 0;

    while(q.length){
        let l = q.length;
        let total = 0;
        level +=1;
        while(l--){
            let node = q.shift();
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
            total += node.val;
        }
        if(total > maxSum){
            maxSum = total;
            minlevel = level;
        }
    }

    return minlevel;
};