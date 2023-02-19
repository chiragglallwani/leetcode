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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return isTreeSymetric(root.left, root.right);
};

function isTreeSymetric(x, y){
    if(!x && !y) return true;
    if(!x || !y) return false;
    if(x.val === y.val) return isTreeSymetric(x.left, y.right) && isTreeSymetric(x.right, y.left);
    else return false;
}