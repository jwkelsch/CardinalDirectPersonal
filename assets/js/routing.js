class DirectedEdge{
	#start = ""; // name of start node (string)
	#end = ""; // name of end node (string)
	#weight = 0; //int
	/* Constructs a DirectedEdge object. start is a string, end is a string, weight is an int */
	constructor(start, end, weight){
		this.#start = start;
		this.#end = end;
		this.#weight = weight;
	}
	/* Returns the weight of the edge */
	get weight(){
		return this.#weight;
	}
	/* Returns the name of the start node */
	from(){
		return this.#start;
	}
	/* Returns the name of the end node */
	to(){
		return this.#end;
	}
	/* Sets the weight of the edge to the value of weight */
	set weight(weight){
		this.#weight = weight;
	}
}

class  EdgeWeightedDigraph{
	#nodeList = []; //array of node names
	#adjList = []; //array of array of DirectedEdge
	/* Constucts an EdgeWeightedDigraph object. Initializes nodeList and adjList to empty arrays */
	constructor(){
		this.#nodeList = [];
		this.#adjList = [];
	}
	/* Returns the number of nodes represented in the graph */
	get numNodes(){
		return this.#nodeList.length;
	}
	/* Returns the list of node names in the graph */
	get nodes(){
		return this.#nodeList;
	}
	/* Adds a DirectedEdge to the graph in both directions. edge is a DirectedEdge */
	addEdge(edge){
		/* If the name of the starting node is not already in nodeList, add it to nodeList. 
		 * Add an array with the new edge to adjList.
		 */
		if(!this.#nodeList.includes(edge.from())){
			this.#nodeList.push(edge.from());
			this.#adjList.push([edge]);
		}
		/* Otherwise, find the index of the name of the starting node in nodeList and append
		 * the new edge to the corresponding list of adjacent edges in adjList.
		 */
		else{
			let idx = this.#nodeList.indexOf(edge.from());
			this.#adjList[idx].push(edge);
		}
		// Make a new DirectedEdge object in the reverse direction as edge
		let otherWayEdge = new DirectedEdge(edge.to(), edge.from(), edge.weight);
		/* If the name of the starting node (the name of the original ending node)
		 * is not already in nodeList, add it to nodeList. Add an array with the new edge to adjList.
		 */
		if(!this.#nodeList.includes(otherWayEdge.from())){
			this.#nodeList.push(otherWayEdge.from());
			this.#adjList.push([otherWayEdge]);
		}
		/* Otherwise, find the index of the name of the starting node (the name of the ending
		 * node) in nodeList and append the new edge to the corresponding list of adjacent edges 
		 * in adjList.
		 */
		else{
			let idx = this.#nodeList.indexOf(otherWayEdge.from());
			this.#adjList[idx].push(otherWayEdge);
		}
	}
	/* Returns the list of adjacent edges at the index specified by idx */
	adj(idx){
		return this.#adjList[idx];
	}
	/* Returns all edges represented in the graph */
	edges(){ 
		let edgeList = [];
		let i=0;
		for(i=0; i<this.#nodeList.length; i++){
			let j=0;
			for(j=0; j< this.#adjList[i].length; j++){
				edgeList.push(this.#adjList[i][j]);
			}
		}
		return edgeList;
	}
	
}

class Dijkstra{
	/* result is an n x 3 array.
	 * Columns 1: node name (string)
	 * Column 2: distance (int or infinity)
	 * Column 3: previous node's name (null or string)
	 * Column 4: whether or not the node has been processed (boolean)
	 */
	#result = [];
	#graph; //EdgeWeightedDigraph
	
	/* Constructs a Dijkstra object. graph is an EdgeWeightedDigraph, start is the name of the starting node. */
	constructor(graph, start){
		this.#result = [];
		this.#graph = graph;
		let nodes = graph.nodes; // list of node names
		let n=0;
		// Set up result table
		// Each row starts with [node name, distance = infinity, prev = null, and processFlag = false]
		for(n=0; n<nodes.length; n++){
			this.#result.push([nodes[n], Number.POSITIVE_INFINITY, null, false]);
		}
		let startidx = nodes.indexOf(start);
		this.#result[startidx][1] = 0; //set start distance to 0
	}
	/* Returns the distance from the starting node to the node specified by node. */
	distTo(node){
		let idx = this.#graph.nodes.indexOf(node);
		return this.#result[idx][1];
	}
	/* Returns whether the node specified by node can be reached from the starting node. */
	hasPathTo(node){
		let idx = this.#graph.nodes.indexOf(node);
		return this.#result[idx][1] < Number.POSITIVE_INFINITY;
	}
	/* Returns the index of the unprocessed node with the minimum distance. */
	minDistIndex(){
		let minDist = Number.POSITIVE_INFINITY;
		let minIdx = -1;
		let i=0;
		// Search through the result table
		for(i=0; i<this.#result.length; i++){
			/* If the node has not yet been processed and has a distance less than
			 * the current minimum distance, update the minimum distance and treat
			 * this node's index as the desired index.
			 */
			if(!this.#result[i][3] &&  this.#result[i][1] < minDist){
				minDist = this.#result[i][1];
				minIdx = i;
			}
		}
		return minIdx;
	}
	/* Runs Dijkstra's Algorithm. Returns the resulting table. */
	run(){
		let numUnprocessed = this.#result.length;
		// While there are still nodes to be processed...
		while(numUnprocessed != 0){
			// Find the index of the node with the minimum distance.
			let minIdx = this.minDistIndex();
			if(minIdx != -1){
				// Set the processed flag to true for this node
				this.#result[minIdx][3] = true;
				// Decrement the quantity of nodes to be processed
				numUnprocessed --;
				// Get this node's list of adjacent edges
				let adjList = this.#graph.adj(minIdx);
				// Set currlen to this node's distance
				let currLen = this.#result[minIdx][1];
				/* For each neighbor node (a node that is attached to one
				 * of this node's adjacent edges), add together currLen
				 * and the weight of the edge. If this new distance is
				 * less than the neighbor's current distance, set the
				 * neighbor's current distance to the new distance and
				 * its previous node to the the minimum distance node.
				 */
				for(let neighbor of adjList){
					let adjName = neighbor.to();
					let adjIdx = this.#graph.nodes.indexOf(adjName);
					let newDist = currLen + neighbor.weight;
					if(newDist < this.#result[adjIdx][1]){
						this.#result[adjIdx][1] = newDist;
						this.#result[adjIdx][2] = this.#result[minIdx][0];
					}
				}
			}
		}
		return this.#result;
	}
	/* Returns a list containing the path from the starting node to the node
	 * specified by node. 
     */
	pathTo(node){
		let nodeList = this.#graph.nodes;
		let endIdx = nodeList.indexOf(node);
		// Put the end node in the path list.
		let path = [node];
		// Retrieve the end node's previous node.
		let prev = this.#result[endIdx][2];
		/* While there is a previous node, add the name of the previous node
		 * to the front of the path list and get the next previous node.
		 */
		while(prev != null){
			path.unshift(prev);
			let prevIdx = nodeList.indexOf(prev);
			prev = this.#result[prevIdx][2];	
		}
		return path;
	}
}
	

/* Simple Example Using Dijkstra
let graph = new EdgeWeightedDigraph();
graph.addEdge(new DirectedEdge("a", "b", 4));
graph.addEdge(new DirectedEdge("a", "c", 2));
graph.addEdge(new DirectedEdge("b", "c", 1));
graph.addEdge(new DirectedEdge("b", "d", 5));
graph.addEdge(new DirectedEdge("c", "d", 8));
graph.addEdge(new DirectedEdge("c", "e", 10));
graph.addEdge(new DirectedEdge("d", "e", 2));
graph.addEdge(new DirectedEdge("d", "z", 6));
graph.addEdge(new DirectedEdge("e", "z", 3));

let dijkstra = new Dijkstra(graph, "a");
console.log(dijkstra.run());
let path = dijkstra.pathTo("z");
console.log(path);
*/


var wsc = {
	// Graph of Wentz Science Center
	wscGraph: new EdgeWeightedDigraph(),
	dijkstra: null,
	// Add all of the edges to the Wentz Science Center Graph
	createEdges: function(){
		//floor 0
		this.wscGraph.addEdge(new DirectedEdge("f0 ne", "f0  e", 3));
		this.wscGraph.addEdge(new DirectedEdge("f0  e", "f0 se", 3));
		this.wscGraph.addEdge(new DirectedEdge("f0  v", "f0 se", 1));
		this.wscGraph.addEdge(new DirectedEdge("f0  e", "f0  w", 3));
		this.wscGraph.addEdge(new DirectedEdge("f0 se", "f0 sw", 3));
		this.wscGraph.addEdge(new DirectedEdge("f0  w", "f0 sw", 3));
		this.wscGraph.addEdge(new DirectedEdge("f0 nw", "f0  w", 3));
		this.wscGraph.addEdge(new DirectedEdge("f0 nw", "f0 ne", 3));
		//floor 0 - floor 1 connectors
		this.wscGraph.addEdge(new DirectedEdge("f0 ne", "f1 ne", 3));
		this.wscGraph.addEdge(new DirectedEdge("f0  v", "f1 se", 3));
		//floor 1
		this.wscGraph.addEdge(new DirectedEdge("f1 ne", "f1  e", 3));
		this.wscGraph.addEdge(new DirectedEdge("f1  e", "f1 se", 3));
		this.wscGraph.addEdge(new DirectedEdge("f1  e", "f1  w", 3));
		this.wscGraph.addEdge(new DirectedEdge("f1 se", "f1 sw", 3));
		this.wscGraph.addEdge(new DirectedEdge("f1  w", "f1 sw", 3));
		this.wscGraph.addEdge(new DirectedEdge("f1 nw", "f1  w", 3));
		this.wscGraph.addEdge(new DirectedEdge("f1 nw", "f1 ne", 3));
		//floor 1 - floor 2 connectors
		this.wscGraph.addEdge(new DirectedEdge("f1 ne", "f2 ne", 3));
		this.wscGraph.addEdge(new DirectedEdge("f1 se", "f2 se", 3));
		this.wscGraph.addEdge(new DirectedEdge("f1  w", "f2  w", 3));
		
		//floor 2
		this.wscGraph.addEdge(new DirectedEdge("f2 ne", "f2  e", 3));
		this.wscGraph.addEdge(new DirectedEdge("f2  e", "f2 se", 3));
		this.wscGraph.addEdge(new DirectedEdge("f2  e", "f2  w", 3));
		this.wscGraph.addEdge(new DirectedEdge("f2 se", "f2 sw", 3));
		this.wscGraph.addEdge(new DirectedEdge("f2  w", "f2 sw", 3));
		this.wscGraph.addEdge(new DirectedEdge("f2 nw", "f2  w", 3));
		this.wscGraph.addEdge(new DirectedEdge("f2 nw", "f2 ne", 3));

		//floor 2 - floor 3 connectors
		this.wscGraph.addEdge(new DirectedEdge("f2 ne", "f3 ne", 3));
		this.wscGraph.addEdge(new DirectedEdge("f2 se", "f3 se", 3));
		this.wscGraph.addEdge(new DirectedEdge("f2  w", "f3  w", 3));
		//floor 3
		this.wscGraph.addEdge(new DirectedEdge("f3 ne", "f3  e", 3));
		this.wscGraph.addEdge(new DirectedEdge("f3  e", "f3 se", 3));
		this.wscGraph.addEdge(new DirectedEdge("f3  e", "f3  w", 3));
		this.wscGraph.addEdge(new DirectedEdge("f3 se", "f3 sw", 3));
		this.wscGraph.addEdge(new DirectedEdge("f3  w", "f3 sw", 3));
		this.wscGraph.addEdge(new DirectedEdge("f3 nw", "f3  w", 3));
		this.wscGraph.addEdge(new DirectedEdge("f3 nw", "f3 ne", 3));

	},
	// Run Dijkstra's Algorithm on the graph using the specified start
	runDijkstra: function(start){
		this.dijkstra = new Dijkstra(this.wscGraph, start);
		let result = this.dijkstra.run();
		console.log(result);
	},
	// Returns the path from the starting location to the specified end
	getPathTo: function(end){
		return this.dijkstra.pathTo(end);
	}
};

/*wsc.createEdges();
wsc.runDijkstra("f1 nw");
let path = wsc.getPathTo("f3 e");
console.log(path);*/





		
		
	
	
	
