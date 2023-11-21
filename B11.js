graph.addVertex("b11");
graph.addVertex("b11-101");
graph.addVertex("b11-102");
graph.addVertex("b11-103");
graph.addVertex("b11-104");
graph.addVertex("b11-105");
graph.addVertex("b11-106");
graph.addVertex("b11-107");
graph.addVertex("b11-108");
graph.addVertex("b11-109");
graph.addVertex("b11-110");
graph.addVertex("b11-201");
graph.addVertex("b11-202");
graph.addVertex("b11-203");
graph.addVertex("b11-204");
graph.addVertex("b11-205");
graph.addVertex("b11-206");
graph.addVertex("b11-207");
graph.addVertex("b11-208");
graph.addVertex("b11-209");
graph.addVertex("b11-210");
graph.addVertex("b11-rs");
graph.addVertex("b11-ls");


graph.addEdge("8c","b11",3);
graph.addEdge("8d","b11",8);
graph.addEdge("8c","b11-ls",2);
graph.addEdge("8c","b11-rs",1);
graph.addEdge("b11-ls","b11-rs",1);

graph.addEdge("b11-ls","b11-105",1);
graph.addEdge("b11-105","b11-106",1);
graph.addEdge("b11-106","b11-107",1);
graph.addEdge("b11-107","b11-108",1);
graph.addEdge("b11-108","b11-109",1);
graph.addEdge("b11-109","b11-110",1);

graph.addEdge("b11-rs","b11-104",1);
graph.addEdge("b11-104","b11-103",1);
graph.addEdge("b11-103","b11-102",1);
graph.addEdge("b11-102","b11-101",1);

graph.addEdge("b11-ls","b11-205",1);
graph.addEdge("b11-205","b11-206",1);
graph.addEdge("b11-206","b11-207",1);
graph.addEdge("b11-207","b11-208",1);
graph.addEdge("b11-208","b11-209",1);
graph.addEdge("b11-209","b11-210",1);

graph.addEdge("b11-rs","b11-204",1);
graph.addEdge("b11-204","b11-203",1);
graph.addEdge("b11-203","b11-202",1);
graph.addEdge("b11-202","b11-201",1);
