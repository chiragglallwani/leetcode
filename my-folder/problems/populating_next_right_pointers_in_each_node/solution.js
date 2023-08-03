/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return null;

    let q = [root];
    while(q.length){
        let l = q.length;
        let prevnode = null;
        while(l--){
            let node = q.shift();
            if(node.left){
                q.push(node.left);
            }
            if(node.right){
                q.push(node.right);
            }
            if(prevnode){
                prevnode.next = node;
            }
            prevnode = node;
        }
    }

    return root;
};