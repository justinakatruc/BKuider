//entrance
graph.addVertex("b3");
graph.addVertex("b3-a");
graph.addVertex("b3-b");
graph.addVertex("b3-c");
graph.addVertex("b3-d");
graph.addVertex("b3-e");
//room
graph.addVertex("b3-101");
graph.addVertex("b3-102");
graph.addVertex("b3-103");
graph.addVertex("b3-104");
graph.addVertex("b3-105");
graph.addVertex("b3-106");
graph.addVertex("b3-107");
graph.addVertex("b3-108");
graph.addVertex("b3-109");
graph.addVertex("b3-110");
graph.addVertex("b3-111");
graph.addVertex("b3-112");
graph.addVertex("b3-113");
graph.addVertex("b3-114");
graph.addVertex("b3-115");
graph.addVertex("b3-116");
graph.addVertex("bkhouse");
graph.addVertex("b3-201");
graph.addVertex("b3-202");
graph.addVertex("b3-203");
graph.addVertex("b3-204");
graph.addVertex("b3-205");
graph.addVertex("b3-206");
graph.addVertex("b3-207");
graph.addVertex("b3-208");
//specialnode
graph.addVertex("circlek");
graph.addVertex("b3-s");


//ground
//entrance
graph.addEdge("1d","b3",2);
graph.addEdge("gate1","b3-a",6);
graph.addEdge("1a","b3-a",5);
graph.addEdge("1a","b3-b",2);
graph.addEdge("1d","b3-c",2);
graph.addEdge("1d","b3-d",1);
graph.addEdge("1c","b3-e",1);

//leftside
graph.addEdge("b3-b","b3-108",0);
graph.addEdge("b3-a","b3-103",0);

graph.addEdge("b3-108","b3-107",2);
graph.addEdge("b3-107","b3-106",1);
graph.addEdge("b3-106","b3-105",1);
graph.addEdge("b3-105","b3-104",1);
graph.addEdge("b3-104","b3-103",1);
graph.addEdge("b3-103","b3-102",1);
graph.addEdge("b3-102","b3-101",1);

//midside
graph.addEdge("b3-c","b3-s",0);
graph.addEdge("b3-s","b3-114",1);
graph.addEdge("b3-s","b3-115",1);

graph.addEdge("b3-108","b3-109",1);
graph.addEdge("b3-109","b3-110",1);
graph.addEdge("b3-110","b3-111",1);
graph.addEdge("b3-111","b3-112",1);
graph.addEdge("b3-112","b3-113",1);
graph.addEdge("b3-113","b3-114",1);


//rightside
graph.addEdge("b3-e","circlek",0);
graph.addEdge("b3-d","b3-116",2);
graph.addEdge("b3-d","bkhouse",2);
graph.addEdge("b3-d","b3-115",1);

graph.addEdge("circlek",'b3-116',1);
graph.addEdge("circlek",'bkhouse',1);

//floor2
graph.addEdge("b3-s","b3-208",1);
//graph.addEdge("b3-s","PTN",1);

graph.addEdge("b3-208","b3-207",1);
graph.addEdge("b3-207","b3-206",1);
graph.addEdge("b3-206","b3-205",1);
graph.addEdge("b3-205","b3-204",1);
graph.addEdge("b3-204","b3-203",1);
graph.addEdge("b3-203","b3-202",1);
graph.addEdge("b3-202","b3-201",1);