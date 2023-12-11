graph.addVertex("c5");
graph.addVertex("c5-101");
graph.addVertex("c5-102");
// graph.addVertex("c5-103");
graph.addVertex("c5-104");
// graph.addVertex("c5-105");
graph.addVertex("c5-106");
graph.addVertex("c5-107");
graph.addVertex("c5-201");
graph.addVertex("c5-202");
graph.addVertex("c5-203");
graph.addVertex("c5-204");
graph.addVertex("c5-208");
graph.addVertex("c5-209");
graph.addVertex("c5-301");
graph.addVertex("c5-302");
graph.addVertex("c5-303");
graph.addVertex("c5-304");
graph.addVertex("c5-401");
graph.addVertex("c5-402");
graph.addVertex("c5-403");
graph.addVertex("c5-404");
graph.addVertex("c5-501");
graph.addVertex("c5-502");
graph.addVertex("c5-503");
graph.addVertex("c5-504");
graph.addVertex("c5-htc5");
graph.addVertex("c5-ls");
graph.addVertex("c5-rs");
graph.addVertex("c5-le");
graph.addVertex("c5-re");
graph.addVertex("c5-ms");

//entrance
//ground
graph.addEdge("9c","c5",2);
graph.addEdge("10c","c5",9);
graph.addEdge("9c","c5-le",2);
graph.addEdge("10c","c5-re",2);
graph.addEdge("c5-le","c5-re",9);

graph.addEdge("c5-ms","c5-106",0);
graph.addEdge("c5-ms","c5-208",0);
graph.addEdge("c5-ms","c5-304",0);
graph.addEdge("c5-ms","c5-404",0);
graph.addEdge("c5-ms","c5-504",0);


graph.addEdge("c5-le","c5-ls",1);
graph.addEdge("c5-ls","c5-101",1);
graph.addEdge("c5-le","c5-101",1);
graph.addEdge("c5-101","c5-102",2);
graph.addEdge("c5-102","c5-104",2);
// graph.addEdge("c5-102","c5-103",1);
// graph.addEdge("c5-103","c5-104",1);
// graph.addEdge("c5-104","c5-105",1);
// graph.addEdge("c5-105","c5-106",1);
graph.addEdge("c5-104","c5-106",2);
graph.addEdge("c5-106","c5-re",1);
graph.addEdge("c5-re","c5-rs",1);
graph.addEdge("c5-re","c5-107",2);
graph.addEdge("c5-rs","c5-107",1);

//floor2
graph.addEdge("c5-ls","c5-201",4);
graph.addEdge("c5-201","c5-202",1);
graph.addEdge("c5-202","c5-203",1);
graph.addEdge("c5-203","c5-204",1);
graph.addEdge("c5-204","c5-htc5",2);
graph.addEdge("c5-htc5","c5-208",2);
graph.addEdge("c5-208","c5-209",1);
graph.addEdge("c5-209","c5-rs",4);

//floor3
graph.addEdge("c5-ls","c5-301",8);
graph.addEdge("c5-301","c5-302",2);
graph.addEdge("c5-302","c5-303",2);
graph.addEdge("c5-303","c5-304",2);
graph.addEdge("c5-304","c5-rs",8);

//floor4
graph.addEdge("c5-ls","c5-401",16);
graph.addEdge("c5-401","c5-402",2);
graph.addEdge("c5-402","c5-403",2);
graph.addEdge("c5-403","c5-404",2);
graph.addEdge("c5-404","c5-rs",16);

//floor5
graph.addEdge("c5-ls","c5-501",32);
graph.addEdge("c5-501","c5-502",2);
graph.addEdge("c5-502","c5-503",2);
graph.addEdge("c5-503","c5-504",2);
graph.addEdge("c5-504","c5-rs",32);

