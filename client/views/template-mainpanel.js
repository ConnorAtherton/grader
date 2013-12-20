Template.mainPanel.helpers({
  state: function () {
    Session.set('page', 'test');
    return Session.get('page');
  }
});

Template.mainPanel.modules = function() {
  return Modules.find({user_id: Meteor.userId()}, {sort: {name: 1}});
}

Template.mainPanel.events({
  'click #newModule': function (evt, tmp) {
    $('#myModal').modal(options);
  }
});
