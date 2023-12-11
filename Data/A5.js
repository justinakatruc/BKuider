graph.addVertex("a5");
graph.addVertex("a5-101");
graph.addVertex("a5-102");
graph.addVertex("a5-103");
graph.addVertex("a5-104");
graph.addVertex("a5-105");
graph.addVertex("a5-106");
graph.addVertex("a5-107");
graph.addVertex("a5-108");
graph.addVertex("a5-109");
graph.addVertex("a5-hta5");
graph.addVertex("a5-hta5le");
graph.addVertex("a5-hta5re");
graph.addVertex("a5-rs");
graph.addVertex("a5-ls");
graph.addVertex("a4-fe");

//entrance
graph.addEdge("4c","a5",5);
graph.addEdge("a5-rs","a5",5);
graph.addEdge("a5-ls","a5",5);
graph.addEdge("a4-fe","a5-101",2);
graph.addEdge("a4-fe","a5-rs",1);

graph.addEdge("4c","a5-ls",3);
graph.addEdge("4c","a5-rs",7);
graph.addEdge("4c","a5-101",6);
graph.addEdge("4c","a5-102",5);
graph.addEdge("4c","a5-103",4);
graph.addEdge("4c","a5-104",4);
graph.addEdge("4c","a5-105",6);
graph.addEdge("4b","a5-105",2);
graph.addEdge("4b","a5-104",3);
graph.addEdge("4a","a5-104",3);
graph.addEdge("4a","a5-105",2);
graph.addEdge("4a","a5-106",2);
graph.addEdge("5b","a5-105",3);
graph.addEdge("5b","a5-106",1);
graph.addEdge("5b","a5-107",2);
graph.addEdge("7c","a5-107",6);

graph.addEdge("a5-101","a5-rs",1);
graph.addEdge("a5-101","a5-102",1);
graph.addEdge("a5-102","a5-103",1);
graph.addEdge("a5-103","a5-ls",1);
graph.addEdge("a5-103","a5-104",1);
graph.addEdge("a5-ls","a5-104",2);
graph.addEdge("a5-104","a5-105",2);
graph.addEdge("a5-105","a5-106",1);
graph.addEdge("a5-106","a5-107",3);
graph.addEdge("a5-107","a5-108",3);
graph.addEdge("a5-108","a5-109",4);
graph.addEdge("a5-109","a5-rs",1);


graph.addEdge("a5-hta5re","a5-hta5",4);
graph.addEdge("a5-hta5le","a5-hta5",4);

 

