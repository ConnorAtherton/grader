var progressInstances = [],
    modules,
    work;

createProgressGraphs = function(graphToDraw) {

// retrieve the data
modules = Modules.find({}, {sort: {name: 1}}).fetch();

  var progressData = [];

  _.each(modules, function(module, index, list) {

    work = Work.find({module_id: module._id}).fetch();

    var progressWorkformat = {};

    _.each(work, function(work, index, array) {
        progressWorkformat[work.name] = {
          mark: work.mark,
          weight: work.weight
        }
    })

    progressData.push({
      name: module.name,
      weight: module.weight,
      overallMark: module.mark,
      work: progressWorkformat
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


