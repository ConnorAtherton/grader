// return all modules..
Meteor.publish('modules', function() {
  return Modules.find({user_id: this.userId});
})

Meteor.startup(function(){
  var example_user = Meteor.users.findOne({username: 'example@example.com'}) || null;
  if(example_user == null) {
    console.log('Adding an example user.')
    var options = {
      username: 'example@example.com',
      email: 'example@example.com',
      password: 'example123'
    };
    Accounts.createUser(options)
  }
})
