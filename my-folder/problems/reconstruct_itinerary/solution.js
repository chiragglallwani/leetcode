/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  // Requirement: return the itinerary that has the smallest lexical order when read as a single string.
    tickets.sort((a,b) => a[1].localeCompare(b[1]));

    // initialise
    let adjList = new Map();
    let edges = tickets.length;
    for (let i = 0; i < tickets.length; i++) {
        let [from, to] = tickets[i];
        adjList.set(from, []);
        adjList.set(to, []);
    }
    // fill adjacency list
    for (let i = 0; i < tickets.length; i++) {
        let [from, to] = tickets[i];
        adjList.get(from).push({dest: to, flied: false});
    }
    
    // Perform dfs backtracking on the adjacency list starting from JFK
    let res = [];
    dfs(adjList, "JFK", ["JFK"], res, edges);
    return res;

    // Time Complexity: O(V * E)
    // Space Complexity: O(V+E), for adjacency list
};

const dfs = (adjList, vertex, curPath, res, edges) => {
    if (res.length > 0) return;
    if (curPath.length === edges + 1) {
        res.push(...curPath.slice());
        return;
    }   
    let neighbours = adjList.get(vertex);
    for (let neighbour of neighbours) {
        if (neighbour.flied == false) {
            curPath.push(neighbour.dest);
            neighbour.flied = true;

            // move to next neighbouring node
            dfs(adjList, neighbour.dest, curPath, res, edges);
            
            // backtrack
            neighbour.flied = false;
            curPath.pop();    
        }
    }
    // Use DFS to explore every possible path, use backtracking to reset values during invalid paths.
}