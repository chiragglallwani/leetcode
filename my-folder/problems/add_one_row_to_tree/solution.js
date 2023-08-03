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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */
var addOneRow = function(root, val, depth) {
    if(!root) return val;

    if(depth ==1){
        let newNode = new TreeNode(val);
        newNode.left = root;
        root = newNode
        return root;
    }

    let level = 0;
    let q = [root];
    while(q.length){
        let l = q.length;
        level +=1;
        while(l--){
            let node = q.shift();
            if(node.left) q.push(node.left);
            if(node.right) q.push(node.right);
            if(depth - 1 === level){
                let newLeftNode = new TreeNode(val);
                let newRightNode = new TreeNode(val);
                newLeftNode.left = node.left;
                newRightNode.right = node.right;
                node.left = newLeftNode;
                node.right = newRightNode
        }
        }
    }
    return root;
};