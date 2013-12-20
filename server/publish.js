// return all modules..
Meteor.publish('modules', function() {
  return Modules.find({user_id: this.userId});
})
