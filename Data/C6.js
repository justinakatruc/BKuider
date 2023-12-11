graph.addVertex("c6");
graph.addVertex("c6-101");
graph.addVertex("c6-102");
graph.addVertex("c6-103");
graph.addVertex("c6-104");
graph.addVertex("c6-105");
graph.addVertex("c6-201");
graph.addVertex("c6-202");
graph.addVertex("c6-203");
graph.addVertex("c6-204");
graph.addVertex("c6-205");
graph.addVertex("c6-206");
graph.addVertex("c6-207");
graph.addVertex("c6-208");
graph.addVertex("c6-301");
graph.addVertex("c6-302");
graph.addVertex("c6-303");
graph.addVertex("c6-304");
graph.addVertex("c6-305");
graph.addVertex("c6-306");
graph.addVertex("c6-307");
graph.addVertex("c6-308");
graph.addVertex("c6-309");
graph.addVertex("c6-401");
graph.addVertex("c6-402");
graph.addVertex("c6-403");
graph.addVertex("c6-501");
graph.addVertex("c6-502");
graph.addVertex("c6-503");
graph.addVertex("c6-604");
graph.addVertex("c6-603");
graph.addVertex("c6-602");
graph.addVertex("c6-601");
graph.addVertex("c6-ls");
graph.addVertex("c6-rs");
graph.addVertex("c6-le");
graph.addVertex("c6-re");
graph.addVertex("c6-be");

//entrance
//ground
graph.addEdge("9a","c6",6);
graph.addEdge("c6-102","c6",1);

graph.addEdge("9a","c6-le",6);
graph.addEdge("9b","c6-re",8);
graph.addEdge("10a","c6-be",1);
graph.addEdge("10b","c6-re",2);

graph.addEdge("c6-le","c6-rs",1);
graph.addEdge("c6-le","c6-103",5);

graph.addEdge("c6-103","c6-104",1);
graph.addEdge("c6-104","c6-105",1);
graph.addEdge("c6-104","c6-ls",1);
graph.addEdge("c6-105","c6-ls",1);

graph.addEdge("c6-le","c6-102",1);
graph.addEdge("c6-102","c6-101",1);
graph.addEdge("c6-101","c6-re",3);
graph.addEdge("c6-101","c6-be",2);
graph.addEdge("c6-101","c6-rs",2);
graph.addEdge("c6-102","c6-103",1);

//floor2
graph.addEdge("c6-ls","c6-208",1);
graph.addEdge("c6-208","c6-207",1);
graph.addEdge("c6-207","c6-206",1);
graph.addEdge("c6-206","c6-205",1);
graph.addEdge("c6-205","c6-204",1);
graph.addEdge("c6-204","c6-203",1);
graph.addEdge("c6-203","c6-202",1);
graph.addEdge("c6-202","c6-201",1);
graph.addEdge("c6-201","c6-rs",1);

//floor3
graph.addEdge("c6-ls","c6-309",1);
graph.addEdge("c6-309","c6-308",1);
graph.addEdge("c6-308","c6-307",1);
graph.addEdge("c6-307","c6-306",1);
graph.addEdge("c6-306","c6-305",1);
graph.addEdge("c6-305","c6-304",1);
graph.addEdge("c6-304","c6-303",1);
graph.addEdge("c6-303","c6-302",1);
graph.addEdge("c6-302","c6-301",1);
graph.addEdge("c6-301","c6-rs",1);

//floor4
graph.addEdge("c6-ls","c6-403",2);
graph.addEdge("c6-403","c6-402",2);
graph.addEdge("c6-402","c6-401",2);
graph.addEdge("c6-401","c6-rs",2);

//floor5
graph.addEdge("c6-ls","c6-503",2);
graph.addEdge("c6-503","c6-502",2);
graph.addEdge("c6-502","c6-501",2);
graph.addEdge("c6-501","c6-rs",2);

//floor6
graph.addEdge("c6-ls","c6-604",1);
graph.addEdge("c6-604","c6-603",1);
graph.addEdge("c6-603","c6-602",1);
graph.addEdge("c6-602","c6-601",1);
graph.addEdge("c6-601","c6-rs",1);