var progressInstances = [],
    modules,
    work;

createProgressGraphs = function(graphToDraw) {

  // retrieve the data
  modules = Modules.find({}, {sort: {name: 1}}).fetch();

  var progressData = [],
      progressWorkformat = {};

  _.each(modules, function(module, index, list) {
    // make sure this is blank before inputting data
    progressWorkformat = [];

    work = Work.find({module_id: module._id}).fetch();

    _.each(work, function(work, index, array) {
        progressWorkformat[work.name] = {
          mark: work.mark,
          weight: work.weight
        }
    });

    progressData.push({
      name: module.name,
      weight: module.weight,
      overallMark: module.mark,
      shortCode : module.shortCode,
      work: progressWorkformat
    })

  })

  var graphs = ['pie', 'scatter', 'force'];

  // Create a new progress object.
  //  -> Should I push this instance into
  //     an array to persist for later?
  var progress = new Progress({
    data: progressData,
    exclude: _.without(graphs, graphToDraw),
    piePlaceholder: document.querySelector('#progressPie'),
    forcePlaceholder: document.querySelector('#progressForce'),
    scatterPlaceholder: document.querySelector('#progressScatter')
  });

}


