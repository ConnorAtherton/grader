Template.questions.rendered = function () {
  drawForceGraph();
  drawScatterGraph();
  bindButtons();
};

Template.questions.lessThanFiveForce = function () {
  var num = Math.floor(Math.random() * 10);
  if(num < 5) {
    Session.set('evaluationPriority', 'force');
    return true;
  }

  Session.set('evaluationPriority', 'list');
  return false;
}

Template.questions.lessThanFiveScatter = function () {
  var num = Math.floor(Math.random() * 10);
  if(num < 5) {
    Session.set('evaluationPredict', 'scatter');
    return true;
  }

  Session.set('evaluationPredict', 'list');
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

  if(!document.querySelector('#force-question')) return;

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

drawScatterGraph = function() {

  var data = [{
    "name": "Module 1",
    "shortCode": "1",
    "work": {
        "Work 1": {
            "mark": 70,
            "weight": 26
        },
        "Work 2": {
            "mark": 55,
            "weight": 26
        },
        "Work 3": {
            "mark": null,
            "weight": 48
        }
    },
    "overallMark": 70
}, {
    "name": "Module 2",
    "shortCode": "2",
    "work": {
        "Design": {
            "mark": 92,
            "weight": 12
        },
        "Programming": {
            "mark": 92,
            "weight": 28
        },
        "Exam": {
            "mark": 40,
            "weight": 60
        }

    },
    "overallMark": 61
}];

  if(!document.querySelector('#scatter-question')) return;

  var progress = new Progress({
    data: data,
    exclude: ['pie', 'force'],
    scatterPlaceholder: document.querySelector('#scatter-question')
  });
}

bindButtons = function() {
  var button = $('.startButton');
  var stop = $('.stopButton');

  var start;

  stop.hide();

  button.on('click', function () {
    // show the scatter
    $('.buttonShowIt').show();
    // store a startTime
    start = new Date().getTime();
    // hide the start button
    $(this).hide();
    console.log('clicked timer start', start);
    // hide stop button
    stop.show();
  });

  // bind click listener
  stop.on('click', function () {
    var end = new Date().getTime();
    $('.question-9').attr('data-timeTaken', end - start);
    console.log('stopped the timer', end- start)
    $('.buttonShowIt').hide()
  });
}
