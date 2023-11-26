graph.addVertex("b5");
graph.addVertex("b5-108");
graph.addVertex("b5-109");
graph.addVertex("b5-a");
graph.addVertex("b5-b");
graph.addVertex("b5-c");
graph.addVertex("b5-d");
graph.addVertex("b5-e");
graph.addVertex("b6-gdb6");

//entrance
graph.addEdge("b5-a","3l",4);
graph.addEdge("b5-a","b5-b",2);
graph.addEdge("b5-b","b5-c",2);
graph.addEdge("b5-c","b5-d",10);
graph.addEdge("b5-d","b5-e",4);

graph.addEdge("b6-gdb6","b5-b",7);
graph.addEdge("b6-gdb6","b5-c",7);
graph.addEdge("b6-gdb6","b5-d",4);
graph.addEdge("b6-gdb6","b5-109",4);

graph.addEdge("6a","b5-d",2);
graph.addEdge("6a","b5-e",4);

graph.addEdge("7*","b5-e",7);

//ground
graph.addEdge("b5-108","b5-109",5);
graph.addEdge("b5-c","b5-108",1);
graph.addEdge("b5-b","b5-108",3);
graph.addEdge("b5-a","b5-108",4);

graph.addEdge("b5-c","b5-109",6);
graph.addEdge("b5-b","b5-109",7);
graph.addEdge("b5-d","b5-109",5);

graph.addEdge("b5-d","b5",1);
graph.addEdge("b5-e","b5",1);