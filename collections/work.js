// Create a new module collection...
Work = new Meteor.Collection('work');

Work.allow({
  //only allow inserting if the user is not anonymous, and the document
  //being inserted belongs to the user inserting it.
  'insert': function(userId, doc) {
    return true; // (userId && doc.user_id === userId)
  },

  //for each of the records being update, make sure the current user is the owner
  'update': function(userId, docs, fields, modifier) {
    for(var i=0; i<docs.length; i++ ){
      if ( docs[i].user_id != userId) {
        return false;
      }
    }
    return true;
  },

  //for each of the records being removed, make sure the user owns them
  'remove': function(userId, docs) {
    for(var i=0; i<docs.length; i++ ){
      if ( docs[i].user_id != userId) {
        return false;
      }
    }
    return true;
  }
});
