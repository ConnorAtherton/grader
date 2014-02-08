// Publish all modules the user owns to the client..
Meteor.publish('modules', function() {
  return Modules.find({user_id: this.userId});
})

// Publish all modules the user owns to the client..
Meteor.publish('work', function() {
  return Work.find({user_id: this.userId});
})

Meteor.publish(null, function() {
  var fields = {questionsComplete: 1}
  return Meteor.users.find({_id: this.userId}, {fields: fields});
})
