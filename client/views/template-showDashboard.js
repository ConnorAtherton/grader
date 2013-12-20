Template.showDashboard.events({
  'click .createModule': function (evt, tmpl) {
    // get modules name
    var name = tmpl.find('input.name').value;

    if(name.trim() === '')
      return 'you must enter a module name';

    var user = Meteor.user();

    Modules.insert({
      name: name,
      user_id: user._id,
      timestamp: (new Date()).getTime()
    });

    tmpl.find('input.name').value = '';

  }
});

Template.showDashboard.modules = function () {
  return Modules.find({}, {sort: {name: 1}}).fetch();
};


