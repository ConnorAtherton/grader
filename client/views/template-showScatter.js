Template.showScatter.rendered = function () {
  var state = Router.current();

  if(state === null) return;

  var timeout = Meteor.setInterval(function(){

    if(_subscriptionComplete) {
      // call it in here
      createProgressGraphs(state.path.substring(1));
      Meteor.clearInterval(timeout);
    }

  }, 100);


};
