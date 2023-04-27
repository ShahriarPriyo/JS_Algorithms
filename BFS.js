// Solve the problem in iterative way

const breadthFirstPoint=(graph,source) =>{
    const queue = [source];
    
    while(queue.length>0){
      const current = queue.shift(); //remove first item cause it follows FIFO
      console.log(current);

      for (const neighbor of graph[current]) {
        queue.push(neighbor);
      }
    }
}


const graph = {
    a:['c','b'],
    b:['d'],
    c:['e'],
    d:['f'],
    e:[],
    f:[]
}

breadthFirstPoint(graph,'a');