Template.questions.rendered = function () {
  drawForceGraph();
};

Template.questions.lessThanFive = function () {
  var num = Math.floor(Math.random() * 10);
  if(num < 5) {
    Session.set('evaluation', 'force');
    return true;
  }

  Session.set('evaluation', 'list');
  return false;
}


/**
*
* D3 code for drawing graphs
*
**/

var graph = {
  "nodes": [
    {"name":"Module 1","group":1,"value":1},
    {"name":"Work 1","group":2,"value":3},
    {"name":"Work 2","group":2,"value":3},
    {"name":"Work 3","group":2,"value":6}
  ],
  "links": [
    {"source":1,"target":0,"value":3},
    {"source":2,"target":0,"value":3},
    {"source":3,"target":0,"value":3}
  ]
}

function drawForceGraph() {

  var width = 400,
      height = 200;

  var color = d3.scale.category20();

  var force = d3.layout.force()
      .charge(-120)
      .linkDistance(50)
      .size([width, height]);

  var svg = d3.select('#force-question').append("svg")
      .attr("width", width)
      .attr("height", height);

    force
        .nodes(graph.nodes)
        .links(graph.links)
        .start();

    var link = svg.selectAll(".link")
        .data(graph.links)
      .enter().append("line")
        .attr("class", "link")
        .style("stroke-width", function(d) { return Math.sqrt(d.value); });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
      .enter().append("circle")
        .attr("class", "node")
        .attr("r", function(d) { return d.value * 5; })
        .style("fill", function(d) { return color(d.group); })
        .call(force.drag);

    node.append("title")
        .text(function(d) { return d.name; });

    force.on("tick", function() {
      link.attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node.attr("cx", function(d) { return d.x; })
          .attr("cy", function(d) { return d.y; });
    });

}
