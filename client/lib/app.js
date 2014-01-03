_subscriptionComplete = false;
var elements = {};

// subscribe to all collections
Meteor.subscribe('modules', function() {
  _subscriptionComplete = true;
});

Meteor.startup(function() {
  elements.$mainPanel = $('#mainPanel');
});

