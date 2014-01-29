_subscriptionComplete = false;

// subscribe to all collections
Meteor.subscribe('modules', function () {
  _subscriptionComplete = true;
});

Meteor.subscribe('work', function () {
  // work subscription
});

Meteor.startup(function() {
  // When editing a work name
  Session.setDefault('editing_work_name', null);
  Session.set('editing_module_mark', null);
  Session.set('editing_module_weight', null);
});

