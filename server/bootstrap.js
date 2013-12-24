Meteor.methods({
  getAll: function() {
    console.log(Modules.find({}).fetch());
    return Modules.find({}).fetch();
  }
})
