graph.addVertex("c1");
graph.addVertex("c1-101b");
// graph.addVertex("c1-kvthuctapnguoi");
// graph.addVertex("c1-kvmayedm");
// graph.addVertex("c1-kvchuyengiaocn");
// graph.addVertex("c1-kvthuctapduc");
// graph.addVertex("c1-vatlieuvaxuly");
graph.addVertex("c1-102a");
graph.addVertex("c1-102b");
graph.addVertex("c1-103");
graph.addVertex("c1-104");
graph.addVertex("c1-105");
graph.addVertex("c1-108");
graph.addVertex("c1-109");
graph.addVertex("c1-110");
graph.addVertex("c1-111");
graph.addVertex("c1-201a");
graph.addVertex("c1-201b");
graph.addVertex("c1-202");
graph.addVertex("c1-203");
graph.addVertex("c1-204");
graph.addVertex("c1-205");
graph.addVertex("c1-206");

graph.addVertex("c1-s");
graph.addVertex("c1-a");
graph.addVertex("c1-b");
graph.addVertex("c1-c");
graph.addVertex("c1-d");
graph.addVertex("c1-f");
graph.addVertex("c1-g");
graph.addVertex("c1-h");

//entrance
//ground
graph.addEdge("7*","c1",1);
graph.addEdge("7*","c1-b",1);
//middle
graph.addEdge("c1-b","c1-s",1);
//right
graph.addEdge("c1-b","c1-101b",1);
graph.addEdge("c1-b","c1-d",1);
//left
graph.addEdge("c1-b","c1-a",1);
graph.addEdge("c1-b","c1-102b",1);
graph.addEdge("c1-a","c1-102b",0);
graph.addEdge("c1-a","c1-102a",1);
graph.addEdge("c1-a","c1-c",1);
graph.addEdge("c1-c","c1-102a",0);
graph.addEdge("c1-c","c1-103",0);
graph.addEdge("c1-c","c1-104",2);
graph.addEdge("c1-104","c1-105",1);

//inside
graph.addEdge("c1-s","c1-f",1);
graph.addEdge("c1-s","c1-101b",1);
graph.addEdge("c1-f","c1-g",2);
graph.addEdge("c1-g","c1-108",1);
graph.addEdge("c1-108","c1-109",2);
graph.addEdge("c1-109","c1-110",1);
graph.addEdge("c1-110","c1-111",0);

//floor2
//left
graph.addEdge("c1-s","c1-203",1);
graph.addEdge("c1-203","c1-202",1);
graph.addEdge("c1-202","c1-201b",0);
graph.addEdge("c1-201b","c1-201a",2);

//right
graph.addEdge("c1-s","c1-204",0);
graph.addEdge("c1-204","c1-205",1);
graph.addEdge("c1-205","c1-206",2);