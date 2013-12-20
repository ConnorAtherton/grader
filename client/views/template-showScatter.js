Template.showScatter.rendered = function () {
  var state = Router.current();

  if(state === null) return;
  createProgressGraphs(state.path.substring(1));

};
