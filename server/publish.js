// return all modules..
Meteor.publish('modules', function() {
  return Modules.find({user_id: this.userId});
})

// var example_user = Meteor.users.findOne({email: 'example@example.com'}) || null;
// if(example_user === null) {
//   var options = {
//     username: 'exampleUsername',
//     email: 'example@example.com',
//     password: 'example123'
//   };
//   Accounts.createUser(options)
// }
