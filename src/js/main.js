const d3 = require("d3");
  
// const topo = require('./miserables.json');
// console.log(topo);

var svg = d3.select("div#container")
.append("svg")
.attr("preserveAspectRatio", "xMinYMin meet")
.attr("viewBox", "0 0 1000 900")
.classed("svg-content", true);
width = +svg.attr("width"),
height = +svg.attr("height");

var simulation = d3.forceSimulation()
.force("link", d3.forceLink().id(function(d) { return d.id; }))
.force("charge", d3.forceManyBody())
.force("center", d3.forceCenter(500, 350));

// console.log(d3.json("./dist/assets/miserables.json", function(error, graph) {})
d3.json("http://localhost:3000/dist/js/miserables.json", function(error, graph) {
 
  // d3.json(topo, function(error, graph) {

  if (error) throw error;
  var link = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(graph.links)
  .enter().append("line");
  
  var node = svg.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(graph.nodes)
  .enter().append("circle")
  .attr("r", 2.5)
  .call(d3.drag()
  .on("start", dragstarted)
  .on("drag", dragged)
  .on("end", dragended));

  simulation
  .nodes(graph.nodes)
  // .alpha(.1)
  .on("tick", ticked);
  
  simulation.force("link")
  .links(graph.links);
  
  function ticked() {
    link
    .attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });
    
    node
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}