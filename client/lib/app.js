_subscriptionComplete = false;
var elements = {};

// subscribe to all collections
Meteor.subscribe('modules', function() {
  _subscriptionComplete = true;
});

Meteor.subscribe('work', function() {
  console.log('subscribed to work now');
  // work subscription
});

Meteor.startup(function() {
  // When editing a work name
  Session.setDefault('editing_work_name', null);
});

