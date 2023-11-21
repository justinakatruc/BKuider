class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  clearSpecificEdges(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => edge.node !== vertex2);
    }

    if (this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => edge.node !== vertex1);
    }
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;
    let totalWeight = 0;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          totalWeight += this.getWeight(previous[smallest], smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    path.push(smallest);
    while (previous[smallest]) {
      path.push(previous[smallest]);
      totalWeight += this.getWeight(previous[smallest], smallest);
      smallest = previous[smallest];
    }

    // Log the total weight
    console.log("Total Weight:", totalWeight);

    return path.reverse();
  }

  // Helper method to get the weight between two vertices
  getWeight(vertex1, vertex2) {
    const edges = this.adjacencyList[vertex1];
    const edge = edges.find(edge => edge.node === vertex2);
    return edge ? edge.weight : Infinity;
  }
}

var graph = new WeightedGraph();

graph.addVertex("gate1");
graph.addVertex("gate2");
graph.addVertex("gate3");
graph.addVertex("1a");
graph.addVertex("1b");
graph.addVertex("1c");
graph.addVertex("1d");
graph.addVertex("2a");
graph.addVertex("2b");
graph.addVertex("2c");
graph.addVertex("2d");
graph.addVertex("2e");
graph.addVertex("3a");
graph.addVertex("3b");
graph.addVertex("4a");
graph.addVertex("4b");
graph.addVertex("4c");
graph.addVertex("4d");
graph.addVertex("4e");
graph.addVertex("5a");
graph.addVertex("5b");
graph.addVertex("6a");
graph.addVertex("6b");
graph.addVertex("7*");
graph.addVertex("7a");
graph.addVertex("7b");
graph.addVertex("7c");
graph.addVertex("7d");
graph.addVertex("7e");
graph.addVertex("m7");
graph.addVertex("8a");
graph.addVertex("8b");
graph.addVertex("8c");
graph.addVertex("8d");
graph.addVertex("8e");
graph.addVertex("9a");
graph.addVertex("9b");
graph.addVertex("9c");
graph.addVertex("9d");
graph.addVertex("9e");
graph.addVertex("10a");
graph.addVertex("10b");
graph.addVertex("10c");
graph.addVertex("10d");
graph.addVertex("10e");

graph.addVertex("2d.4d");

graph.addEdge("gate1", "1a",3);
graph.addEdge("gate1","1b",10);
graph.addEdge("1a","1b",6);
graph.addEdge("1a","1d",11);
graph.addEdge("1a","2b",12);
graph.addEdge("1b","2c",11);
//graph.addEdge("1c","1d",4); (not walkable)
graph.addEdge("1c","2a",2);
graph.addEdge("1d","2b",2);
graph.addEdge("2a","2b",4);
graph.addEdge("2a","3b",8);
graph.addEdge("2b","2c",5);
graph.addEdge("2b","4c",11);
graph.addEdge("2c","2d",2);
graph.addEdge("2d","2e",3);
graph.addEdge("2d","4d",11);
// graph.addEdge("2e","4e",11); (not walkable)
graph.addEdge("3a","3b",5);
graph.addEdge("3a","5a",7);
graph.addEdge("3b","4b",4);
graph.addEdge("4a","5b",2);
graph.addEdge("4a","4b",2);
graph.addEdge("4b","4c",7);
graph.addEdge("4c","4d",7);
graph.addEdge("4c","7e",9);
graph.addEdge("4d","4e",3);
graph.addEdge("4e","gate2",10);
graph.addEdge("5a","5b",4);
graph.addEdge("5a","6b",5);
graph.addEdge("5b","7c",8);
graph.addEdge("6a","7a",4);
graph.addEdge("6a","6b",5);
graph.addEdge("6b","7b",4);
graph.addEdge("7*","8a",6);
graph.addEdge("7*","7a",3);
graph.addEdge("7a","7b",5);
graph.addEdge("7b","7c",4);
graph.addEdge("7b","8c",6);
graph.addEdge("7c","7d",2);
graph.addEdge("7d","m7",3);
graph.addEdge("7d","8d",6);
graph.addEdge("m7","8e",7);
graph.addEdge("m7","7e",4);
graph.addEdge("7e","gate2",8);
graph.addEdge("7e","gate3",15);
graph.addEdge("8a","8b",2);
graph.addEdge("8a","9d",2);
graph.addEdge("8b","9e",2);
graph.addEdge("8b","8c",5);
graph.addEdge("8c","8d",6);
graph.addEdge("8d","8e",6);
graph.addEdge("9e","9d",2);
graph.addEdge("9e","10d",8);
graph.addEdge("9d","9c",3);
graph.addEdge("9c","9b",3);
graph.addEdge("9c","10c",9);
graph.addEdge("9b","9a",5);
graph.addEdge("9b","10b",8);
graph.addEdge("10a","10b",4);
graph.addEdge("10b","10c",3);
graph.addEdge("10c","10d",6);
graph.addEdge("10d","10e",14);
graph.addEdge("10e","gate3",6);
graph.addEdge("10e","8e",10);

graph.addEdge("2d.4d","2d",6);
graph.addEdge("2d.4d","4d",6);
//specialconnector
graph.addVertex("c4-re");
graph.addVertex("c5-re");
graph.addVertex("c6-re");

graph.addEdge("c4-re","c5-re",3);
graph.addEdge("c5-re","c6-re",3);


graph.addVertex("b1-116");
graph.addVertex("b1-312");
graph.addVertex("b2-ls");

graph.addEdge("b1-312","b2-ls",5);
graph.addEdge("b1-116","b2-ls",5);

graph.addVertex("b4-d");
graph.addVertex("b6-b");

graph.addEdge("b4-d","b6-b",5);

//cantin
graph.addVertex("cantin");
graph.addVertex("b6-a");
graph.addVertex("b6-b");
graph.addVertex("b4-e");

graph.addEdge("b6-a","cantin",3);
graph.addEdge("b6-b","cantin",5);
graph.addEdge("b4-e","cantin",6);
graph.addEdge("3a","cantin",2);

//nhaxetht
// graph.addVertex("nhaxetht");

// graph.addEdge("10e","nhaxetht",4);
// graph.addEdge("8e","nhaxetht",6);

//nhaxeltk
// graph.addVertex("nhaxeltk");
// graph.addVertex("b3-101");

// graph.addEdge("1c","nhaxeltk",10);
// graph.addEdge("b3-101","nhaxeltk",5);

//nhaxegv
graph.addVertex("nhaxegv");
graph.addVertex("a3");

graph.addEdge("gate2","nhaxegv",3);
graph.addEdge("7e","nhaxegv",3);
graph.addEdge("a3","nhaxegv",3);

//phongdaotao
graph.addVertex("phongdaotao");

graph.addEdge("gate2","phongdaotao",9);
graph.addEdge("4e","phongdaotao",3);

//sanbongda
graph.addVertex("sanbongda");

graph.addEdge("sanbongda","2b",20);
graph.addEdge("sanbongda","2c",19);
graph.addEdge("sanbongda","2d",20);
graph.addEdge("sanbongda","4c",20);
graph.addEdge("sanbongda","4d",20);

//c1
graph.addVertex("c1");

graph.addEdge("6a","c1",10);
graph.addEdge("7*","c1",6);
graph.addEdge("8a","c1",6);

//c2
graph.addVertex("c2");

graph.addEdge("10e","c2",10);
graph.addEdge("8d","c2",7);

//c3
graph.addVertex("c3");

graph.addEdge("10d","c3",7);
graph.addEdge("9e","c3",5);


//c7
graph.addVertex("c7");

graph.addEdge("gate3","c7",21);
graph.addEdge("10d","c7",2);