Evaluations = new Meteor.Collection('evaluations');

Evaluations.allow({
  'insert': function (userId, doc) {
    return true;
  }
})

Meteor.users.allow({
  update: function (userId, user) {
    return userId === user._id;
  }
})
