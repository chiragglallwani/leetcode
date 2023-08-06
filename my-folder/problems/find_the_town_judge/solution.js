/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(trust.length == 0 && n == 1) return 1;
    if(trust.length == 0 && n > 1) return -1;
    let judge = -1;
    let adjList= {};
    for(let personTrust of trust){
        if(adjList[personTrust[0]]){
            adjList[personTrust[0]] = [...adjList[personTrust[0]],personTrust[1]]
        }
        else{
            adjList[personTrust[0]] = [personTrust[1]]
        }
    }

    for(let i = 1; i <= n; i++){
        if(adjList[i] === undefined){
            judge = findElement(i, adjList, n)
        }
    }

    return judge
};

function findElement(element, adjList, n){
    for(let i=1; i<= n; i++){
        if(adjList[i] != undefined){
            if(!adjList[i].includes(element)) return -1;
        }
    }
    return element;
}