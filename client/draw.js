var progressInstances = [],
    dataset;

createProgressGraphs = function(graphToDraw) {

  // retrieve the data
  dataset = Modules.find({}, {sort: {name: 1}}).fetch();

  var progressData = [];

  _.each(dataset, function(el, index, list) {
      progressData.push({
        name: el.name,
        weight: el.work.weight,
        overallMark: el.work.overallMark,
        work: el.work.workData
      })
  })

  var graphs = ['pie', 'scatter', 'force'];

  // create a new progress object.
  var progress = new Progress({
    data: progressData,
    exclude: _.without(graphs, graphToDraw),
    piePlaceholder: document.querySelector('.progressPie'),
    forcePlaceholder: document.querySelector('.progressForce'),
    scatterPlaceholder: document.querySelector('.progressScatter')
  });

}


