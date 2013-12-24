var progressInstances = [];
//     dataset = [{
//   "name" : "GEOG201",
//   "work" : {
//     "Group CW" : {
//       "mark" : 80,
//       "weight" : 30
//     },
//     "Individual CW" : {
//       "mark" : 40,
//       "weight" : 30
//     },
//     "Exam" : {
//       "mark" : null,
//       "weight" : 40
//     }
//   },
//   "overallMark" : 60,
//   "weight" : 15
// },
// {
//   "name" : "GEOG202",
//   "work" : {
//     "Exam" : {
//       "mark" : 67,
//       "weight" : 100
//     }
//   },
//   "overallMark" : 67,
//   "weight" : 15
// },
// {
//   "name" : "GEOG203",
//   "work" : {
//     "CW1 Lab Exercise" : {
//       "mark" : 65,
//       "weight" : 30
//     },
//     "CW2 Assignment" : {
//       "mark" : null,
//       "weight" : 30
//     },
//     "CW3 Assignment" : {
//       "mark" : null,
//       "weight" : 40
//     }
//   },
//   "overallMark" : 65,
//   "weight" : 15
// },
// {
//   "name" : "GEOG204",
//   "work" : {
//     "Practial 1" : {
//       "mark" : 55,
//       "weight" : 40
//     },
//     "Practial 2" : {
//       "mark" : 55,
//       "weight" : 10
//     },
//     "Practial 3" : {
//       "mark" : 55,
//       "weight" : 10
//     },
//     "Exam" : {
//       "mark" : 65,
//       "weight" : 40
//     }
//   },
//   "overallMark" : 59,
//   "weight" : 15
// },
// {
//   "name" : "GEOG205",
//   "work" : {
//     "CW1" : {
//       "mark" : 90,
//       "weight" : 10
//     },
//     "CW2" : {
//       "mark" : 62,
//       "weight" : 10
//     },
//     "Exam 1" : {
//       "mark" : null,
//       "weight" : 80
//     }
//   },
//   "overallMark" : 76,
//   "weight" : 15
// },
// {
//   "name" : "GEOG206",
//   "work" : {
//     "Dissertation" : {
//       "mark" : 40,
//       "weight" : 50
//     },
//     "Dissertation 2" : {
//       "mark" : 78,
//       "weight" : 50
//     }
//   },
//   "overallMark" : 59,
//   "weight" : 30
// },
// {
//   "name" : "GEOG209",
//   "work" : {
//     "Dissertation" : {
//       "mark" : 75,
//       "weight" : 20
//     },
//     "Group CW" : {
//       "mark" : 80,
//       "weight" : 20
//     },
//     "Individual CW" : {
//       "mark" : 60,
//       "weight" : 20
//     },
//     "Practial 1" : {
//       "mark" : null,
//       "weight" : 20
//     },
//     "Exam" : {
//       "mark" : null,
//       "weight" : 20
//     }
//   },
//   "overallMark" : 71,
//   "weight" : 30
// }];

var dataset;

Meteor.startup(function(){
  // dataset = Modules.find({}, {sort: {name: 1}}).fetch();
  // console.log(dataset.length);
});

setUpVars = function() {
  console.log('subscription is ready');
  dataset = Modules.find({}, {sort: {name: 1}}).fetch();
}

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


