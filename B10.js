graph.addVertex("b10");
graph.addVertex("b10-201");
graph.addVertex("b10-202");
graph.addVertex("b10-203");
graph.addVertex("b10-204");
graph.addVertex("b10-205");
graph.addVertex("b10-206");
graph.addVertex("b10-207");
graph.addVertex("b10-301");
graph.addVertex("b10-302");
graph.addVertex("b10-303");
graph.addVertex("b10-304");
graph.addVertex("b10-305");
graph.addVertex("b10-306");
graph.addVertex("b10-307");
graph.addVertex("b10-rs");
graph.addVertex("b10-ls");

//entrance
graph.addEdge("gate3","b10",20);
graph.addEdge("7e","b10",20);
graph.addEdge("8e","b10-ls",4);
graph.addEdge("gate3","b10-rs",2);
graph.addEdge("7e","b10-ls",10);
//floor2
graph.addEdge("b10-ls","b10-201",1);
graph.addEdge("b10-201","b10-202",1);
graph.addEdge("b10-202","b10-203",1);
graph.addEdge("b10-203","b10-204",1);
graph.addEdge("b10-204","b10-205",1);
graph.addEdge("b10-205","b10-206",1);
graph.addEdge("b10-206","b10-207",1);
graph.addEdge("b10-rs","b10-207",1);
//floor2
graph.addEdge("b10-ls","b10-301",1);
graph.addEdge("b10-301","b10-302",1);
graph.addEdge("b10-302","b10-303",1);
graph.addEdge("b10-303","b10-304",1);
graph.addEdge("b10-304","b10-305",1);
graph.addEdge("b10-305","b10-306",1);
graph.addEdge("b10-306","b10-307",1);
graph.addEdge("b10-307","b10-rs",1);

