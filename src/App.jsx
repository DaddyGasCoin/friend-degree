// import ListNames from "../components/NameComponents/ListNames"
import ListNames from "../components/NameComponents/ListNames"

function App() {

  return (
    <div className="App">
      <ListNames />
    </div>
  )
}

export default App


// function bfs(graph, start, end) {
//   // create a queue for storing nodes to visit
//   let queue = [];

//   // add the starting node to the queue
//   queue.push(start);

//   // create a set for storing visited nodes
//   let visited = new Set();

//   // create a variable to store the path
//   let path = [];

//   // while there are nodes in the queue
//   while (queue.length > 0) {
//     // get the first node in the queue
//     let node = queue.shift();

//     // if the node has not been visited
//     if (!visited.has(node)) {
//       // check if the node is the end node
//       if (node === end) {

//         path.push(end);
//         // return the path to the end node
//         return path;
//       }

//       // mark the node as visited
//       visited.add(node);

//       // add the current node to the path
//       path.push(node);

//       // add the node's neighbors to the queue
//       for (let neighbor of graph[node]) {
//         queue.push(neighbor);
//       }
//     }
//   }

//   // if no path is found, return null
//   return null;
// }



// // Sample input
// var graph = {
//   'A': ['B', 'C'],
//   'B': ['A', 'D', 'E'],
//   'C': ['A', 'F'],
//   'D': ['B'],
//   'E': ['B', 'F'],
//   'F': ['C', 'E']
// };

// // Sample output
// var isConnected = bfs(graph, 'A', 'F');
// console.log(isConnected); // true
