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
var isUnivalTree = function(root) {
     if(!root) return false;

     let univalue = root.val;
     let q = [root];

     while(q.length){
         let l = q.length;
         while(l--){
             let node = q.shift();
             if(node.left){
                 q.push(node.left);
             }
             if(node.right){
                 q.push(node.right);
             }
             if(node.val !== univalue) return false;
         }
     }
     return true;
};