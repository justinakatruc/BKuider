graph.addVertex("a4");
graph.addVertex("a4-108");
graph.addVertex("a4-201");
graph.addVertex("a4-202");
graph.addVertex("a4-203");
graph.addVertex("a4-204");
graph.addVertex("a4-205");
graph.addVertex("a4-206");
graph.addVertex("a4-207");
graph.addVertex("a4-306");
graph.addVertex("a4-311");
graph.addVertex("a4-312");
graph.addVertex("a4-313");
graph.addVertex("a4-314");
graph.addVertex("a4-315");
graph.addVertex("a4-401");
graph.addVertex("a4-402");
graph.addVertex("a4-407");
graph.addVertex("a4-408");
graph.addVertex("a4-409");
graph.addVertex("a4-410");
graph.addVertex("a4-411");
graph.addVertex("a4-412");
graph.addVertex("a4-413");
graph.addVertex("a4-501");
graph.addVertex("a4-506");
graph.addVertex("a4-507");
graph.addVertex("a4-508");
graph.addVertex("a4-509");
graph.addVertex("a4-510");
graph.addVertex("a4-511");

graph.addVertex("a4-hta4");
graph.addVertex("a4-fs");
graph.addVertex("a4-bs");
graph.addVertex("a4-fe");
graph.addVertex("a4-be");

//groundentrance
graph.addEdge("4c","a4",7);
graph.addEdge("7e","a4",5);
graph.addEdge("4c","a4-fe",7);
graph.addEdge("7e","a4-fe",5);
graph.addEdge("7c","a4-be",3);
graph.addEdge("5b","a4-be",6);

graph.addEdge("a4-fe","a4-fs",1);
graph.addEdge("a4-fe","a4-hta4",3);
graph.addEdge("a4-fe","a4-be",5);
graph.addEdge("a4-be","a4-108",1);
graph.addEdge("a4-be","a4-bs",1);

graph.addEdge("a4-fs","a4-hta4",6);
graph.addEdge("a4-108","a4-hta4",5);

//floor2
graph.addEdge("a4-fs","a4-201",1);
graph.addEdge("a4-201","a4-202",1);
graph.addEdge("a4-202","a4-203",1);
graph.addEdge("a4-203","a4-204",1);
graph.addEdge("a4-204","a4-205",1);
graph.addEdge("a4-205","a4-206",1);
graph.addEdge("a4-206","a4-207",1);
graph.addEdge("a4-207","a4-bs",2);

//floor3
graph.addEdge("a4-fs","a4-306",1);
graph.addEdge("a4-306","a4-311",1);
graph.addEdge("a4-311","a4-312",1);
graph.addEdge("a4-312","a4-313",1);
graph.addEdge("a4-313","a4-314",1);
graph.addEdge("a4-314","a4-315",1);
graph.addEdge("a4-315","a4-bs",3);

//floor4
graph.addEdge("a4-fs","a4-401",1);
graph.addEdge("a4-401","a4-402",1);
graph.addEdge("a4-402","a4-407",1);
graph.addEdge("a4-407","a4-408",1);
graph.addEdge("a4-408","a4-409",1);
graph.addEdge("a4-409","a4-410",1);
graph.addEdge("a4-410","a4-411",1);
graph.addEdge("a4-411","a4-412",1);
graph.addEdge("a4-412","a4-413",1);
graph.addEdge("a4-413","a4-bs",4);

//floor5
graph.addEdge("a4-fs","a4-501",1);
graph.addEdge("a4-501","a4-506",1);
graph.addEdge("a4-506","a4-507",1);
graph.addEdge("a4-507","a4-508",1);
graph.addEdge("a4-508","a4-509",1);
graph.addEdge("a4-509","a4-510",1);
graph.addEdge("a4-510","a4-511",1);
graph.addEdge("a4-511","a4-bs",5);












