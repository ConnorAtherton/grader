// Publish all modules the user owns to the client..
Meteor.publish('modules', function() {
  return Modules.find({user_id: this.userId});
})
