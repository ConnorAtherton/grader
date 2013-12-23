// return all modules..
Meteor.publish('modules', function() {
  return Modules.find({user_id: this.userId});
})

var example_user = Meteor.users.findOne({username: 'example@example.com'}) || null;
if(example_user == null) {
  var options = {
    username: 'example@example.com',
    email: 'example@example.com',
    password: 'example123'
  };
  Accounts.createUser(options)
}