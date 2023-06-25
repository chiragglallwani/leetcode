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
var isBalanced = function(root) {
    if(!root) return true;

    let lt = height(root.left);
    let rt = height(root.right);

    if(Math.abs(lt -rt) <= 1 && isBalanced(root.left) == true && isBalanced(root.right) == true) return true;

    return false;
};

var height = function(root){
    if(root == null){
        return true;
    }

    return Math.max(height(root.left), height(root.right)) + 1;
}