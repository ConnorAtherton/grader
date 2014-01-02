_subscriptionComplete = false;

// subscribe to all collections
Meteor.subscribe('modules', function() {
  _subscriptionComplete = true;
});

Meteor.startup(function() {

});

