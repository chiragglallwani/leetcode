/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root) return 0;
    let level = 0;
    let queue = [root];
    while(queue.length){
        let l = queue.length;
        level +=1;
        while(l--){
            let node = queue.shift(root);
            console.log(node.children)
            for(let item of node.children){
                queue.push(item);
            }
        }
    }

    return level;
};