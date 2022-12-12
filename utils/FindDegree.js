
function bfs(graph, start, end) {
    // create a queue for storing nodes to visit
    let queue = [];
    queue.push(start);

    let visited = new Set();

    // create a variable to store the path
    let path = [];

    // while there are nodes in the queue
    while (queue.length > 0) {
        let node = queue.shift();

        if (!visited.has(node)) {
            // check if the node is the end node
            if (node === end) {

                path.push(end);
                return path;
            }

            visited.add(node);

            // add the current node to the path
            path.push(node);

            for (let neighbor of graph[node]) {
                queue.push(neighbor);
            }
        }
    }

    // if no path is found, return null
    return null;
}

export default bfs