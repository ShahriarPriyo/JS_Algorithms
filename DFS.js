// use iterative way to solve the problem

const depthFirstPoint=(graph,source)=>{
    const stack = [source]; //initial stack will be a 

    while(stack.length>0){
       const current = stack.pop(); 
       console.log(current);

       for(let neighbor of graph[current]){
        stack.push(neighbor); //traverse the neighbor of current node
     }
  }

    
}

// use recursive way to solve same problem 

// const depthFirstPoint = (graph,source) => {
//     console.log(source);
//     for (const neighbor of graph[source]) {
//         depthFirstPoint(graph, neighbor);
//     }
// }



//main theory of DFS: traverse the deep of a node and again back to alternative neighbor

const graph ={
    a:['b','c'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

depthFirstPoint(graph,'a')