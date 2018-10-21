const d3 = require("d3");

// Change the size of the d3 SVG relative to device width
let viewBoxVar 
let centerWidth;
let centerHeight;

if(window.innerWidth<1000){
  viewBoxVar = "0 0 500 900";
  centerHeight = 250;
  centerWidth = 250;
}
else{
  viewBoxVar = "0 0 1000 900";
  centerHeight = 500;
  centerWidth = 325;
}

// attach d3 to the div container
var svg = d3.select("div#container")
.append("svg")
.attr("preserveAspectRatio", "xMinYMin meet")
.attr("viewBox", viewBoxVar) // mobile
// .attr("viewBox", "0 0 500 900") // mobile
// .attr("viewBox", "0 0 1000 900") // desktop
.classed("svg-content", true);
width = +svg.attr("width"),
height = +svg.attr("height");

var simulation = d3.forceSimulation()
.force("link", d3.forceLink().id(function(d) { return d.id; }))
.force("charge", d3.forceManyBody())
.force("center", d3.forceCenter(centerHeight, centerWidth)); //mobile
// .force("center", d3.forceCenter(250, 250)); //mobile
// // .force("center", d3.forceCenter(500, 325)); //desktop

d3.json("http://localhost:3000/dist/assets/data/data.json", function(error, graph) {
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



function toggle_visibility(id) {
  var e = document.getElementById(id);
  if(e.style.display == 'block')
  e.style.display = 'none';
  else
  e.style.display = 'block';
}
function rotate_icon(id) {
  var e = document.getElementById(id);
  e.classList.toggle("fa-rotate-45");
}